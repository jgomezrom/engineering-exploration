import { test } from "node:test";
import assert from "node:assert/strict";
import { TRUSS_LEVELS, type DesignMember } from "../app/data/trussLevels.ts";
import { checkMember, designMass, referenceMass, sameSpan, sanitiseDesign, testDesign, tierFor } from "../app/lib/trussGame.ts";

// The game promises that every level can be beaten and shows each level's
// reference mass as the target. These tests keep both promises true if a level
// or a steel section is ever changed.

for (const level of TRUSS_LEVELS) {
  test(`${level.id}: the reference design is legal`, () => {
    level.reference.forEach((member, index) => {
      assert.equal(checkMember(level, member.a, member.b), "ok", `member ${index + 1}`);
      const duplicates = level.reference.filter((other) => sameSpan(other, member.a, member.b));
      assert.equal(duplicates.length, 1, `member ${index + 1} is duplicated`);
    });
  });

  test(`${level.id}: the reference design carries the load`, () => {
    const outcome = testDesign(level, level.reference);
    assert.ok(outcome.result.stable, "reference design should be a stable structure");
    assert.ok(outcome.holds, "reference design should hold the full load");
    assert.equal(tierFor(outcome.mass, referenceMass(level)), "reference");
  });

  test(`${level.id}: an empty design does not pass`, () => {
    assert.equal(testDesign(level, []).holds, false);
  });
}

test("building the first level entirely from rods fails by buckling", () => {
  // This is the lesson the first level is built around, so it must stay true.
  const level = TRUSS_LEVELS[0];
  const allRods: DesignMember[] = level.reference.map((member) => ({ ...member, section: "rod" }));
  const outcome = testDesign(level, allRods);
  assert.ok(outcome.result.stable);
  assert.equal(outcome.holds, false);
  if (outcome.result.stable) {
    const critical = outcome.result.members[outcome.result.criticalMember];
    assert.ok(critical.force < 0 && critical.bucklingGoverns, "the failing member should be one that buckles");
  }
  assert.ok(designMass(allRods) < designMass(level.reference), "rods are lighter, which is why it is tempting");
});

test("members that pass through a joint or reach too far are rejected", () => {
  const level = TRUSS_LEVELS[1];
  assert.equal(checkMember(level, [0, 0], [2, 0]), "through-joint");
  assert.equal(checkMember(level, [0, 0], [2, 2]), "through-joint");
  assert.equal(checkMember(level, [0, 0], [4, 1]), "too-long");
  assert.equal(checkMember(level, [0, 0], [0, 0]), "same-joint");
  assert.equal(checkMember(level, [0, 0], [1, -1]), "outside");
  assert.equal(checkMember(level, [0, 0], [1, 2]), "ok");
});

test("stored designs are cleaned before use", () => {
  const level = TRUSS_LEVELS[0];
  const cleaned = sanitiseDesign(level, [
    { a: [0, 0], b: [1, 1], section: "tube" },
    { a: [1, 1], b: [0, 0], section: "rod" }, // same span again
    { a: [0, 0], b: [2, 0], section: "rod" }, // passes through a joint
    { a: [0, 0], b: [9, 9], section: "rod" }, // off the grid
    { a: [0, 0], b: [1, 0], section: "gold" }, // not a real section
    "nonsense",
    null,
  ]);
  assert.deepEqual(cleaned, [{ a: [0, 0], b: [1, 1], section: "tube" }]);
  assert.deepEqual(sanitiseDesign(level, "not an array"), []);
});
