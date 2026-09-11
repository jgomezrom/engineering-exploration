import { useEffect, useRef, type RefObject } from "react";

// What a keyboard or screen-reader user needs from a modal that the visual
// design alone doesn't give them:
//
//   - focus moves into the dialog when it opens, so the next Tab lands inside
//     it rather than on the page dimmed out behind the backdrop
//   - Tab and Shift+Tab wrap around inside the dialog instead of escaping into
//     that page
//   - focus returns to whatever opened the dialog when it closes, so the
//     reader carries on from where they were instead of being dropped at the
//     top of the document
//
// Both modals on the site mount only while they're open, so this runs once per
// opening: the effect's setup is "opened" and its cleanup is "closed".
//
// Pair it with role="dialog" and aria-modal="true" on the same element — this
// hook handles focus, those attributes are what tell assistive technology the
// element is a dialog at all.
const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function useDialogFocus<T extends HTMLElement>(initialFocus?: RefObject<HTMLElement | null>) {
  const dialogRef = useRef<T>(null);

  useEffect(() => {
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    if (!dialog) return;

    (initialFocus?.current ?? dialog.querySelector<HTMLElement>(FOCUSABLE) ?? dialog).focus();

    function trapTab(e: KeyboardEvent) {
      if (e.key !== "Tab" || !dialog) return;
      const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      // The contains() checks also pull focus back in if it somehow ended up
      // outside the dialog, rather than only wrapping at the two ends.
      if (e.shiftKey && (active === first || !dialog.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !dialog.contains(active))) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", trapTab);
    return () => {
      document.removeEventListener("keydown", trapTab);
      // Only hand focus back if the opener is still in the document; focusing
      // a node that has been removed does nothing useful.
      if (opener && document.contains(opener)) opener.focus();
    };
  }, [initialFocus]);

  return dialogRef;
}
