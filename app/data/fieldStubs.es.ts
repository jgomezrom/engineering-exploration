import { FieldStub } from "./types";

// Spanish translations of the lighter-weight "stub" field entries, same
// shape as fieldStubs.ts. Mirrors the fieldsEs.ts pattern: only translated
// stubs appear here, and FieldPageContent falls back to the English stub
// (with a small notice) for any not yet translated.
export const fieldStubsEs: FieldStub[] = [
  {
    slug: "architectural-engineering",
    name: "Ingeniería Arquitectónica",
    tagline: "Los sistemas estructurales, mecánicos y eléctricos que hacen que un edificio realmente funcione.",
    whatItIs:
      "Los sistemas técnicos dentro de un edificio — soporte estructural, calefacción y refrigeración, electricidad, iluminación, acústica — son el territorio de la ingeniería arquitectónica, trabajado junto a arquitectos, quienes se enfocan más en la forma y distribución del edificio. Es un campo más pequeño y especializado que combina conceptos de ingeniería civil, mecánica y eléctrica aplicados específicamente a edificios.",
    realWorldExamples: [
      "Sistemas estructurales para edificios grandes o complejos",
      "Diseño de sistemas de calefacción, refrigeración, y ventilación",
      "Sistemas eléctricos y de iluminación de edificios",
      "Diseño acústico para espacios como salas de conciertos",
    ],
    relatedMajors: ["Ingeniería Arquitectónica", "Ingeniería Civil (con cierta superposición)", "Ingeniería Mecánica (con cierta superposición)"],
    relatedField: "civil-engineering",
    salaryNote:
      "La Oficina de Estadísticas Laborales de EE. UU. no rastrea la ingeniería arquitectónica como su propia categoría separada — usualmente se agrupa con la ingeniería civil o mecánica según el puesto específico. Consulta la página de Ingeniería Civil para ver datos de salario relacionados y con fuente.",
    whatEngineersWorkOn:
      "Los ingenieros arquitectónicos hacen que el interior de un edificio funcione. Eso significa dimensionar los sistemas de calefacción y refrigeración de un espacio, trazar la distribución eléctrica y la iluminación, hacer pasar ductos y tuberías por una estructura que ya está llena de vigas, y comprobar que una sala va a sonar como debe. El reto recurrente es espacial: varios sistemas necesitan ocupar el mismo hueco de techo, y alguien tiene que resolver de quién es ese espacio.",
    commonMisconceptions: [
      "Que es lo mismo que la arquitectura — los arquitectos trabajan la forma, la distribución, y el uso; los ingenieros arquitectónicos, los sistemas que hacen habitable el edificio.",
      "Que los sistemas se añaden al final — los recorridos y el espacio de máquinas hay que planificarlos temprano o simplemente no caben.",
      "Que es un campo pequeño y menor — climatización, iluminación, y electricidad son una parte grande tanto del costo de un edificio como de su consumo energético.",
      "Que el trabajo es invisible — los ocupantes lo notan de inmediato cuando está mal hecho: ruido, corrientes de aire, deslumbramiento, o salas que nunca alcanzan la temperatura.",
    ],
    mythsAndRealities: [
      {
        myth: "La ingeniería arquitectónica es otro nombre para la arquitectura.",
        reality:
          "Los arquitectos dan forma al edificio. Los ingenieros arquitectónicos diseñan los sistemas estructurales, mecánicos, eléctricos, y acústicos de su interior, normalmente trabajando junto a ellos.",
      },
      {
        myth: "Los sistemas del edificio se diseñan al final.",
        reality:
          "Las salas de máquinas, los patinillos, y el espacio de techo hay que reservarlos temprano. Dejarlo tarde es como acabas con ductos que no tienen por dónde pasar.",
      },
      {
        myth: "Nadie nota este trabajo.",
        reality:
          "Nadie lo nota cuando está bien. Una rejilla ruidosa, una luminaria que deslumbra, o una sala que no enfría se notan de inmediato.",
      },
      {
        myth: "Se trata sobre todo de elegir equipos de un catálogo.",
        reality:
          "La selección es un paso. Calcular cargas, coordinar recorridos por la estructura, y cumplir requisitos energéticos y normativos es el trabajo real.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Dibujo técnico o CAD, si está disponible", "Química", "Cualquier materia de dibujo o diseño que ofrezca tu escuela"],
    helpfulSkills: [
      "Buen razonamiento espacial, porque varios sistemas compiten por el mismo espacio físico",
      "Soltura con fundamentos mecánicos y eléctricos, ya que el puesto abarca ambos",
      "Coordinación con arquitectos y otros oficios, que es parte diaria del trabajo",
      "Cuidado con normativas y estándares energéticos, que definen buena parte de lo que un edificio puede hacer",
      "Atención a cómo la gente experimenta realmente un espacio — temperatura, luz, y ruido",
    ],
    typicalProjects: [
      "Dimensionar calefacción y refrigeración según el uso, el clima, y la construcción del edificio",
      "Trazar la distribución eléctrica y la iluminación de una planta",
      "Coordinar recorridos de ductos, tuberías, y cableado por la estructura para que todo quepa",
      "Diseñar la acústica de un espacio donde la calidad del sonido importa",
      "Modelar el consumo energético previsto de un edificio y ajustar el diseño para reducirlo",
    ],
    typicalWorkday:
      "La mayor parte del día es diseño y coordinación frente a una computadora, trabajando en un modelo compartido del edificio con arquitectos y otros ingenieros y resolviendo las interferencias que aparecen. Las visitas a obra se concentran durante la construcción, comprobando que lo que se instala coincide con los planos. Los plazos siguen las fases de diseño del proyecto, así que la carga llega por oleadas más que de forma pareja.",
    industries: [
      "Consultoras de instalaciones e ingeniería multidisciplinar",
      "Estudios de arquitectura con ingeniería interna",
      "Constructoras y empresas de diseño y construcción",
      "Grandes propietarios inmobiliarios y equipos de mantenimiento institucional",
      "Fabricantes de sistemas y equipos para edificios",
    ],
    advantages: [
      "El resultado son lugares donde la gente pasa la vida entera",
      "El trabajo abarca pensamiento mecánico, eléctrico, y estructural en vez de un área estrecha",
      "Hay una línea directa entre las decisiones de diseño y cuánta energía consume un edificio",
      "Siempre se están construyendo, reformando, y actualizando edificios, así que el trabajo no depende de un solo sector",
    ],
    challenges: [
      "Diseñas dentro de restricciones fijadas por la arquitectura, y rara vez puedes moverlas",
      "Los conflictos de coordinación son constantes, porque cada sistema quiere el mismo hueco de techo",
      "Los recortes de presupuesto suelen caer sobre sistemas que el ocupante no ve hasta que fallan",
      "Las normativas y requisitos energéticos son detallados y cambian con el tiempo",
    ],
    thingsPeopleDislike: [
      "Rehacer recorridos porque un cambio estructural o arquitectónico movió algo",
      "Ver cómo se recorta calidad en sistemas que los ocupantes sufrirán durante décadas",
      "El volumen de reuniones de coordinación en un proyecto grande",
      "Que te culpen por quejas de confort causadas por decisiones tomadas en otro lado",
    ],
  },
  {
    slug: "automotive-engineering",
    name: "Ingeniería Automotriz",
    tagline: "El diseño, las pruebas, y la fabricación detrás de los autos y otros vehículos de carretera.",
    whatItIs:
      "La ingeniería automotriz trata sobre el diseño, las pruebas, y la fabricación de autos y otros vehículos de carretera — motores, transmisiones, sistemas de seguridad, y, cada vez más, tecnología de vehículos eléctricos y autónomos. Normalmente se estudia como una especialización dentro de la ingeniería mecánica, no como su propia carrera separada.",
    realWorldExamples: [
      "Diseño de motores y sistemas de transmisión",
      "Pruebas de seguridad y colisión de vehículos",
      "Sistemas de batería y motor para vehículos eléctricos",
      "Sistemas avanzados de asistencia al conductor y vehículos autónomos",
    ],
    relatedMajors: ["Ingeniería Mecánica (con enfoque automotriz)", "Ingeniería Eléctrica (con cierta superposición para sistemas eléctricos y autónomos)"],
    relatedField: "mechanical-engineering",
    salaryNote:
      "Los ingenieros automotrices normalmente se rastrean bajo la categoría más amplia de 'ingenieros mecánicos' en la Oficina de Estadísticas Laborales de EE. UU., no como su propia ocupación separada. Consulta la página de Ingeniería Mecánica para ver esos datos de salario con fuente.",
    whatEngineersWorkOn:
      "Los ingenieros automotrices trabajan a fondo sobre una parte del vehículo, no sobre autos enteros a la vez. Una persona puede encargarse del sistema de refrigeración, del mecanismo del pestillo de una puerta, de la gestión térmica de la batería, o del software que decide cuándo intervienen los frenos. El trabajo va desde el diseño y la simulación inicial hasta la construcción de prototipos, las pruebas, y la larga etapa de revisión posterior — buena parte de la cual se dedica a averiguar por qué una pieza no se comporta como decía el modelo, y a cambiarla hasta que lo haga.",
    commonMisconceptions: [
      "Que los ingenieros automotrices diseñan el aspecto de los autos — el estilo exterior e interior lo hacen sobre todo diseñadores, y los ingenieros trabajan dentro de formas que a menudo ya están decididas.",
      "Que el trabajo trata sobre todo de rendimiento y velocidad — se dedica mucho más esfuerzo de ingeniería a la seguridad, las emisiones, el costo, la durabilidad, y la fabricabilidad que a hacer un vehículo rápido.",
      "Que los vehículos eléctricos simplificaron el campo — un eléctrico elimina el motor y la caja de cambios, pero añade sistemas de alto voltaje, gestión térmica de baterías, y mucho más software.",
      "Que hay que ser aficionado a los autos para pertenecer aquí — mucha gente entra desde la ingeniería mecánica, eléctrica, o de software sin haber reconstruido nunca un motor.",
    ],
    mythsAndRealities: [
      {
        myth: "Los ingenieros automotrices diseñan cómo se ven los autos.",
        reality:
          "El estilo es en gran medida trabajo de un diseñador. Los ingenieros suelen trabajar dentro de una forma ya aprobada, y buena parte de la habilidad está en hacer que el mecanismo quepa en el espacio disponible.",
      },
      {
        myth: "El trabajo trata sobre todo de hacer autos rápidos.",
        reality:
          "El rendimiento es un requisito que compite con la seguridad ante choques, las emisiones, el costo, el peso, la fiabilidad, y si una fábrica puede realmente producir la pieza.",
      },
      {
        myth: "Pasas los días rodeado de autos terminados.",
        reality:
          "La mayor parte del trabajo es sobre un componente, un banco de pruebas, una simulación, o una hoja de resultados. Algunos ingenieros pasan años sin tener un vehículo completo delante.",
      },
      {
        myth: "Los vehículos eléctricos hicieron más fácil la ingeniería automotriz.",
        reality:
          "Cambió dónde está la dificultad en vez de eliminarla. Los motores y las transmisiones dieron paso a la química de baterías, la seguridad de alto voltaje, la gestión térmica, y el software.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Química", "Informática o programación, si se ofrece", "Dibujo técnico o CAD, si está disponible"],
    helpfulSkills: [
      "Soltura con la mecánica y la termodinámica, ya que casi todos los problemas de un vehículo se reducen a fuerzas, calor, o ambos",
      "Disposición a probar y volver a probar, porque una pieza que funciona en simulación a menudo se comporta distinto en un banco de pruebas",
      "Atención a las tolerancias y al costo, ya que un diseño que no se puede fabricar de forma repetible y económica no llega a producción",
      "Programación suficiente para ser útil, porque cada vez más el comportamiento del vehículo se decide en software",
      "Trabajar dentro de restricciones fijadas por otros equipos, que es buena parte de la realidad diaria del puesto",
    ],
    typicalProjects: [
      "Diseñar y validar un solo componente — un soporte, una bomba, un pestillo — frente a objetivos de resistencia, peso, y costo",
      "Realizar pruebas de choque o durabilidad y analizar qué dicen los resultados sobre el diseño",
      "Desarrollar la gestión térmica de una batería para que se mantenga en su rango seguro de temperatura",
      "Ajustar el software de control de frenado, tracción, o asistencia al conductor",
      "Rediseñar una pieza para que pueda montarse realmente en una línea de producción al ritmo necesario",
    ],
    typicalWorkday:
      "El tiempo se reparte entre el diseño y la simulación frente a una computadora, el trabajo en un laboratorio de pruebas o un banco, y bastantes reuniones con los otros equipos cuyas piezas tocan la tuya. Los ciclos de prueba marcan el ritmo: se ejecuta un ensayo, llegan los resultados, y los días siguientes se dedican a entenderlos. Los plazos suelen estar ligados a los hitos del programa del vehículo, lo que hace que algunas etapas sean mucho más intensas que otras.",
    industries: [
      "Fabricantes de vehículos",
      "Proveedores de componentes y sistemas, que emplean a una gran parte de los ingenieros automotrices",
      "Empresas de vehículos eléctricos y baterías",
      "Automovilismo deportivo y fabricantes de vehículos especializados",
      "Organismos de pruebas, certificación, y regulación",
    ],
    advantages: [
      "El trabajo termina dentro de objetos que la gente usa a diario, lo que hace inusualmente fácil señalarlo",
      "Las habilidades se transfieren bien, ya que los fundamentos mecánicos, térmicos, y de control se aplican en aeroespacial, energía, y maquinaria pesada",
      "Las pruebas son físicas e inmediatas — averiguas bastante rápido si un diseño aguanta",
      "El cambio hacia vehículos eléctricos y automatizados ha abierto trabajo real para quienes vienen del software o la electrónica",
    ],
    challenges: [
      "La presión sobre el costo es constante, y un diseño técnicamente mejor pierde con regularidad frente a uno más barato",
      "La regulación de seguridad y emisiones limita bastante lo que se puede hacer",
      "Los programas de vehículos son largos, así que pueden pasar años entre tu trabajo y algo que llegue a la carretera",
      "El trabajo suele concentrarse en ciertas regiones y empresas, lo que puede implicar mudarse para seguir en el campo",
    ],
    thingsPeopleDislike: [
      "Encargarse de un componente pequeño durante mucho tiempo, en vez de trabajar sobre un vehículo completo",
      "Ver cómo un diseño del que estás orgulloso se cambia para ahorrar una cantidad pequeña por unidad",
      "Ciclos largos de validación y papeleo entre terminar un diseño y ponerlo en producción",
      "Periodos de sobrecarga alrededor de los hitos del programa y las fechas de lanzamiento",
    ],
  },
  {
    slug: "manufacturing-engineering",
    name: "Ingeniería de Manufactura",
    tagline: "Cómo un diseño se convierte en un producto físico real a gran escala — los procesos y equipos detrás.",
    whatItIs:
      "La ingeniería de manufactura trata sobre los procesos y equipos usados para realmente producir cosas a gran escala — la maquinaria, las herramientas, y los flujos de trabajo que convierten un diseño en un producto físico, y hacer que todo eso funcione mejor. Se superpone de cerca tanto con la ingeniería mecánica como con la industrial.",
    realWorldExamples: [
      "Diseño de líneas de producción y equipo de fábrica",
      "Diseño de herramientas y dispositivos de sujeción para manufactura",
      "Mejora de procesos para reducir desperdicio o defectos",
      "Automatización de pasos de manufactura",
    ],
    relatedMajors: ["Ingeniería de Manufactura", "Ingeniería Industrial (con cierta superposición)", "Ingeniería Mecánica (con cierta superposición)"],
    relatedField: "industrial-engineering",
    salaryNote:
      "La ingeniería de manufactura tampoco se rastrea como su propia categoría separada en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se agrupa con la ingeniería industrial o mecánica. Consulta la página de Ingeniería Industrial para ver datos de salario relacionados y con fuente.",
    whatEngineersWorkOn:
      "Los ingenieros de manufactura trabajan en la distancia entre un diseño que funciona una vez y un diseño que se puede fabricar miles de veces, bien, y a un precio que alguien pagará. Especifican máquinas y herramentales, ordenan la secuencia de operaciones, diseñan los dispositivos que sujetan una pieza mientras se trabaja, y persiguen por qué un proceso que iba bien el mes pasado ahora produce desperdicio. Gran parte del trabajo ocurre en la planta y no en un escritorio.",
    commonMisconceptions: [
      "Que los ingenieros de manufactura diseñan el producto — diseñan el proceso que lo fabrica, y a menudo tienen que pedir cambios en un diseño que no se puede producir de forma económica.",
      "Que el campo desaparece por la automatización — automatizar una línea es en sí ingeniería de manufactura, y alguien tiene que especificarla, instalarla, y mantenerla funcionando.",
      "Que es trabajo de fábrica de baja cualificación — implica diseño de procesos, estadística, herramentales, y bastante diagnóstico bajo presión de tiempo.",
      "Que cuando la línea ya corre el trabajo está hecho — los procesos se desvían, los proveedores cambian, y las herramientas se desgastan, así que una línea en marcha necesita atención constante.",
    ],
    mythsAndRealities: [
      {
        myth: "Los ingenieros de manufactura diseñan los productos que se fabrican.",
        reality:
          "Diseñan cómo se fabrican. Una parte frecuente del trabajo es decirle a un equipo de diseño que su pieza está bien en pantalla y es imposible de producir al ritmo necesario.",
      },
      {
        myth: "La automatización está eliminando el campo.",
        reality:
          "La automatización desplaza el trabajo en vez de eliminarlo. Elegir, integrar, y mantener equipo automatizado es ingeniería de manufactura.",
      },
      {
        myth: "Es lo mismo que la ingeniería industrial.",
        reality:
          "Se solapan. La industrial se inclina hacia los sistemas, el flujo, y la eficiencia; la de manufactura, hacia los procesos físicos y la maquinaria.",
      },
      {
        myth: "Te sientas en un escritorio.",
        reality:
          "Pasas mucho tiempo en planta, porque los problemas aparecen en la máquina y no en el plano.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Estadística, si se ofrece", "Dibujo técnico o CAD, si está disponible", "Taller, robótica, o materias prácticas si tu escuela las tiene"],
    helpfulSkills: [
      "Sentido mecánico práctico, ya que buena parte del trabajo es entender por qué una máquina o una herramienta se comporta como lo hace",
      "Soltura con la estadística, porque la calidad de un proceso se mide y se controla estadísticamente",
      "Diagnóstico sistemático, ya que un defecto suele tener varias causas plausibles que hay que ir descartando en orden",
      "Buen trato con operadores y técnicos, que a menudo conocen el proceso mejor que nadie",
      "Tolerancia a la interrupción, porque una línea detenida tiene prioridad sobre lo que estuvieras haciendo",
    ],
    typicalProjects: [
      "Diseñar un dispositivo que sujete una pieza con precisión mientras se mecaniza o se suelda",
      "Definir la secuencia de operaciones para el ensamblaje de un producto nuevo",
      "Encontrar la causa raíz de un defecto que empezó a aparecer en una línea existente",
      "Especificar y poner en marcha una máquina nueva o una celda robotizada",
      "Rediseñar un proceso para reducir tiempo de ciclo, desperdicio, o tiempo de cambio",
    ],
    typicalWorkday:
      "El día se mueve entre la planta y el escritorio, normalmente no según tu propia agenda. El trabajo planificado es diseño de procesos, planos de herramental, y análisis de datos; el no planificado es lo que se haya detenido. El calendario de producción lo condiciona todo — las pruebas y los cambios de formato suelen darse alrededor de los turnos, y algunas puestas en marcha caen de noche o en un paro programado porque es el único momento en que la línea está libre.",
    industries: [
      "Fabricantes de automoción y aeroespacial",
      "Producción de electrónica y bienes de consumo",
      "Fabricación de dispositivos médicos y farmacéutica",
      "Fabricantes por contrato y proveedores de componentes",
      "Proveedores de equipo industrial y automatización",
    ],
    advantages: [
      "La retroalimentación es inmediata y física — un cambio mejora la línea o no lo hace",
      "El trabajo es visible, ya que puedes ver funcionando el proceso que diseñaste",
      "Las habilidades sirven en casi cualquier industria que fabrique un objeto físico",
      "Hay una ruta clara hacia operaciones y dirección de planta para quien la quiera",
    ],
    challenges: [
      "La presión de producción es constante, y una línea parada cuesta por minuto",
      "El costo y el tiempo de ciclo limitan las soluciones tanto como la física",
      "El trabajo por turnos, las puestas en marcha nocturnas, y los paros programados son habituales",
      "Los entornos de fábrica pueden ser ruidosos, calurosos, y físicamente exigentes",
    ],
    thingsPeopleDislike: [
      "Que te saquen del trabajo planificado para apagar el incendio de esta mañana",
      "Trabajo nocturno y de fin de semana durante instalaciones y paros",
      "Pelear con el mismo defecto recurrente que tiene varias causas posibles",
      "Tener que defender un cambio de diseño que haría la producción mucho más fácil",
    ],
  },
  {
    slug: "systems-engineering",
    name: "Ingeniería de Sistemas",
    tagline: "Cómo todas las piezas individuales de un proyecto grande y complejo terminan funcionando bien juntas.",
    whatItIs:
      "La ingeniería de sistemas se aleja de cualquier componente individual para ver cómo un sistema complejo se integra como un todo — asegurándose de que cada pieza de un proyecto grande, sea un avión, una nave espacial, o una plataforma de software importante, funcione correctamente con todas las demás. Se trata menos de diseñar una parte específica y más de gestionar cómo se conecta todo.",
    realWorldExamples: [
      "Coordinar cómo funcionan juntos los subsistemas de un avión o una nave espacial",
      "Gestionar los requisitos y la integración de grandes proyectos de defensa o infraestructura",
      "Supervisar cómo interactúan los componentes de hardware y software de un producto complejo",
    ],
    relatedMajors: ["Ingeniería de Sistemas", "A menudo se estudia como una especialización dentro de la ingeniería aeroespacial, industrial o eléctrica"],
    relatedField: "aerospace-engineering",
    salaryNote:
      "Como varios campos de esta página, la ingeniería de sistemas no se rastrea como su propia categoría separada en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se estudia como una especialización dentro de otra disciplina de ingeniería. Consulta las páginas de Ingeniería Aeroespacial o Industrial para ver datos de salario relacionados y con fuente.",
    whatEngineersWorkOn:
      "Los ingenieros de sistemas se hacen cargo de las uniones entre las partes más que de las partes en sí. Convierten un objetivo vago en requisitos lo bastante concretos como para diseñar contra ellos, deciden cómo se van a comunicar los subsistemas entre sí, y después verifican que el conjunto armado realmente hace lo que se pidió. Buena parte del trabajo es escrito — requisitos, definiciones de interfaz, planes de prueba, y los estudios comparativos que dejan constancia de por qué se eligió una opción sobre otra.",
    commonMisconceptions: [
      "Que es gestión de proyectos con título de ingeniería — el trabajo es técnico, y consiste en hacerse cargo de interfaces y requisitos, no de calendarios y presupuestos.",
      "Que hay que dominar a fondo cada subsistema — hace falta lo suficiente de cada uno para hacer las preguntas correctas y detectar cuándo dos equipos han supuesto cosas distintas.",
      "Que es solo para naves espaciales y defensa — cualquier producto donde hardware, software, y personas tengan que funcionar juntos usa la misma disciplina.",
      "Que la documentación es burocracia — en un proyecto grande, la interfaz escrita suele ser lo único que evita que dos equipos construyan piezas que no encajan.",
    ],
    mythsAndRealities: [
      {
        myth: "La ingeniería de sistemas es solo gestión de proyectos.",
        reality:
          "Los gestores se ocupan del calendario y el costo. Los ingenieros de sistemas se ocupan de los requisitos, las interfaces, y de si el resultado integrado realmente los cumple.",
      },
      {
        myth: "Tienes que ser experto en cada subsistema.",
        reality:
          "Necesitas profundidad suficiente para hacer buenas preguntas a los especialistas y para notar cuándo dos equipos están suponiendo cosas distintas en silencio.",
      },
      {
        myth: "Es un puesto solo para gente veterana.",
        reality:
          "Mucha gente empieza ahí, aunque bastantes llegan tras algunos años en una disciplina concreta, que es de donde sale el olfato útil.",
      },
      {
        myth: "Los documentos son el objetivo.",
        reality:
          "Los documentos son la forma de hacer explícitos los acuerdos entre equipos. Cuando se saltan, los desacuerdos aparecen después, durante la integración, y salen caros.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Informática o programación, si se ofrece", "Estadística, si se ofrece", "Cualquier materia que implique escritura estructurada"],
    helpfulSkills: [
      "Escritura precisa, porque un requisito ambiguo lo construirán de dos formas distintas dos equipos distintos",
      "Capacidad de sostener el sistema completo en la cabeza sin necesitar dominar cada detalle",
      "Hacer preguntas incómodas temprano, ya que los problemas de integración son más baratos de encontrar antes de construir nada",
      "Negociar entre equipos cuyas decisiones locales razonables entran en conflicto entre sí",
      "Paciencia con el proceso, que en proyectos grandes es lo que mantiene coherente al sistema",
    ],
    typicalProjects: [
      "Convertir el objetivo de un cliente en un conjunto de requisitos verificables",
      "Definir la interfaz entre dos subsistemas construidos por equipos distintos",
      "Hacer un estudio comparativo de opciones frente a costo, masa, riesgo, y plazo",
      "Planificar cómo se va a verificar y probar el sistema integrado",
      "Rastrear un fallo encontrado durante la integración hasta el requisito o la interfaz que lo permitió",
    ],
    typicalWorkday:
      "El día tiene más reuniones y escritura que la mayoría de los puestos de ingeniería, porque el trabajo consiste en gran medida en mantener alineados a equipos separados. Las revisiones son parte fija del ritmo, igual que leer los diseños de otras personas con suficiente atención como para notar qué han dado por supuesto. La intensidad se dispara en la integración y las pruebas, cuando todo lo acordado sobre el papel se encuentra con todo lo que se construyó de verdad.",
    industries: [
      "Programas aeroespaciales y de naves espaciales",
      "Defensa y grandes proyectos públicos",
      "Automoción, sobre todo para software y electrónica a nivel de vehículo",
      "Dispositivos médicos y otros productos regulados",
      "Infraestructura y sistemas de transporte a gran escala",
    ],
    advantages: [
      "Ves el sistema completo en vez de un componente, lo que encaja con quien disfruta la visión de conjunto",
      "Las habilidades se transfieren bien entre industrias, ya que la disciplina es en gran medida la misma",
      "El trabajo está cerca de las decisiones que dan forma a un proyecto desde el principio",
      "Es una ruta natural hacia el liderazgo técnico sin dejar la ingeniería por la gestión",
    ],
    challenges: [
      "Buena parte del trabajo es escribir y reunirse, que no es lo que mucha gente imagina",
      "A menudo respondes por resultados que no controlas directamente",
      "Los programas son largos, y el proceso formal puede sentirse pesado en el día a día",
      "Es más difícil señalar una cosa y decir que la construiste tú",
    ],
    thingsPeopleDislike: [
      "El volumen de documentación y revisión que exigen los proyectos grandes",
      "Estar en medio de equipos que no se ponen de acuerdo, una y otra vez",
      "Los huecos largos entre definir algo y ver si funcionó",
      "Que te culpen en la integración por huecos que se señalaron y no se financiaron",
    ],
  },
  {
    slug: "structural-engineering",
    name: "Ingeniería Estructural",
    tagline: "Si un edificio o puente puede cargar con seguridad su propio peso, además del viento, los terremotos, y el uso diario.",
    whatItIs:
      "La ingeniería estructural trata sobre la estructura portante de edificios y puentes — asegurándose de que una estructura pueda cargar con seguridad su propio peso más fuerzas como el viento, los terremotos, y el uso diario. Normalmente se estudia como una especialización dentro de la ingeniería civil, no como su propia carrera separada.",
    realWorldExamples: [
      "Diseño de la estructura portante de edificios",
      "Diseño y análisis estructural de puentes",
      "Ingeniería de resistencia sísmica y al viento",
      "Inspección estructural de edificios y puentes existentes",
    ],
    relatedMajors: ["Ingeniería Civil (con enfoque estructural)", "Ingeniería Estructural (ofrecida como carrera propia en algunas universidades)"],
    relatedField: "civil-engineering",
    salaryNote:
      "Los ingenieros estructurales normalmente se rastrean bajo la categoría más amplia de 'ingenieros civiles' en la Oficina de Estadísticas Laborales de EE. UU., no como su propia ocupación separada. Consulta la página de Ingeniería Civil para ver esos datos de salario con fuente.",
    whatEngineersWorkOn:
      "Los ingenieros estructurales deciden si algo se va a mantener en pie, y seguir en pie. Dimensionan vigas, columnas, losas, cimentaciones, y las conexiones entre todo eso, y modelan las cargas que una estructura tiene que resistir — su propio peso, las personas y equipos dentro, el viento, la nieve, y, según dónde se construya, los sismos. Buena parte del trabajo es el detallado: dibujar las uniones y fijaciones con precisión suficiente para que un contratista pueda construirlas, y rehacerlas cuando la arquitectura cambia alrededor.",
    commonMisconceptions: [
      "Que los ingenieros estructurales diseñan el edificio entero — los arquitectos suelen decidir la forma y la distribución, y el ingeniero estructural resuelve el esqueleto que lo sostiene.",
      "Que ahora el software hace el trabajo — el software es estándar, pero alguien tiene que elegir el modelo, decidir qué casos de carga importan, y juzgar si el resultado es creíble.",
      "Que todo es obra nueva — evaluar, reforzar, y reparar estructuras que ya existen es una parte grande del campo.",
      "Que las matemáticas son lo difícil — los cálculos se aprenden, y la habilidad más difícil suele ser el detallado y la coordinación con todos los demás que tocan el edificio.",
    ],
    mythsAndRealities: [
      {
        myth: "Los ingenieros estructurales diseñan edificios.",
        reality:
          "Diseñan el esqueleto portante. La forma, la distribución, y la apariencia suelen ser decisiones del arquitecto, dentro de las cuales la estructura tiene que funcionar.",
      },
      {
        myth: "La computadora hace los cálculos, así que el trabajo es capturar datos.",
        reality:
          "El software devuelve con toda confianza una respuesta a un modelo mal planteado. Decidir el modelo y verificar que el resultado tenga sentido es la ingeniería.",
      },
      {
        myth: "Es un trabajo de diseño creativo.",
        reality:
          "Hay criterio, pero es criterio dentro de normativas y factores de seguridad. Ser deliberadamente conservador es parte de hacerlo bien.",
      },
      {
        myth: "Solo trabajas en obras nuevas y emblemáticas.",
        reality:
          "Gran parte del trabajo son edificios ordinarios, y bastante consiste en inspeccionar o reforzar estructuras que ya están ahí.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Dibujo técnico o CAD, si está disponible", "Estadística, si se ofrece"],
    helpfulSkills: [
      "Razonamiento espacial, porque hay que imaginar cómo viajan las fuerzas por la estructura hasta el suelo",
      "Soltura trabajando dentro de normativas y estándares, que definen buena parte de lo permitido",
      "Precisión y cuidado, porque un caso de carga olvidado o una conexión mal detallada tiene consecuencias reales",
      "Comunicación clara con arquitectos y contratistas, ya que tus planos los construye otra persona",
      "Disposición a ser conservador, que en este campo es una virtud profesional y no falta de audacia",
    ],
    typicalProjects: [
      "Dimensionar la estructura de un edificio frente a cargas de gravedad, viento, y sismo",
      "Analizar un puente existente para juzgar qué cargas puede seguir soportando con seguridad",
      "Diseñar una cimentación para las condiciones del terreno realmente encontradas en obra",
      "Detallar conexiones para que la estructura se pueda montar en el orden correcto",
      "Reforzar un edificio antiguo para cumplir requisitos actuales de sismo o viento",
    ],
    typicalWorkday:
      "La mayor parte del día es análisis y dibujo frente a una computadora, intercalado con coordinación con arquitectos y otros ingenieros cuyos sistemas atraviesan la misma estructura. Las visitas a obra llegan por rachas, normalmente en hitos de construcción o cuando algo en sitio no coincide con los planos. Revisar los cálculos de otras personas es parte rutinaria del trabajo, y que revisen los tuyos también.",
    industries: [
      "Consultoras estructurales y civiles",
      "Constructoras y empresas de diseño y construcción",
      "Organismos públicos de transporte e infraestructura",
      "Inspección de edificios e ingeniería forense",
      "Fabricantes de productos y sistemas estructurales",
    ],
    advantages: [
      "El trabajo es permanente y público — puedes pararte frente a él años después",
      "El propósito es inusualmente claro, ya que se trata de evitar que las estructuras lastimen a alguien",
      "Las habilidades sirven para edificios, puentes, y estructuras industriales sin empezar de cero",
      "La colegiación profesional da una ruta definida y reconocida para avanzar",
    ],
    challenges: [
      "La responsabilidad es real, y los errores tienen consecuencias que otros campos no tienen del mismo modo",
      "Las normativas y aprobaciones limitan bastante lo que se puede hacer",
      "Los proyectos son largos, y los diseños se revisan una y otra vez cuando cambia la arquitectura",
      "Obtener la licencia lleva años de experiencia supervisada y exámenes después de la carrera",
    ],
    thingsPeopleDislike: [
      "Cargar con la responsabilidad legal mucho después de terminado el proyecto",
      "Rehacer trabajo porque un cambio previo movió un muro o una columna",
      "Cuánto tiempo se va en revisar, documentar, y defender cálculos",
      "Ser quien tiene que decir que no a una idea que se vería mejor de lo que se comportaría",
    ],
  },
  {
    slug: "energy-engineering",
    name: "Ingeniería de Energía",
    tagline: "Cómo se genera, distribuye, y usa la energía de forma eficiente — desde redes eléctricas hasta energías renovables.",
    whatItIs:
      "La ingeniería de energía abarca cómo se genera, distribuye, y usa la energía de forma eficiente — sistemas de energía tradicionales, energía renovable como la solar y la eólica, y la eficiencia energética en edificios e industria. En lugar de ser una sola disciplina estandarizada, se apoya en la ingeniería mecánica, eléctrica y ambiental.",
    realWorldExamples: [
      "Diseño de sistemas de energía solar y eólica",
      "Sistemas de redes eléctricas y distribución de energía",
      "Sistemas de eficiencia energética en edificios",
      "Sistemas de almacenamiento de baterías y gestión de energía",
    ],
    relatedMajors: ["Ingeniería de Energía", "Ingeniería Eléctrica (con cierta superposición)", "Ingeniería Mecánica (con cierta superposición)"],
    relatedField: "electrical-engineering",
    salaryNote:
      "No existe una categoría separada para la ingeniería de energía en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se estudia a través de la ingeniería eléctrica o mecánica con un enfoque en energía. Consulta la página de Ingeniería Eléctrica para ver datos de salario relacionados y con fuente.",
    whatEngineersWorkOn:
      "Los ingenieros de energía trabajan sobre cómo se genera, transporta, almacena, y desperdicia la energía. Eso puede significar dimensionar un campo solar y sus inversores, modelar cuánto cuesta realmente operar el sistema de calefacción de un edificio, calcular dónde una red puede absorber más generación intermitente, o auditar una fábrica para encontrar por dónde se está yendo la energía. Buena parte del trabajo es medir y modelar antes de construir nada, porque el argumento para un cambio suele ser tan financiero como técnico.",
    commonMisconceptions: [
      "Que se trata solo de renovables — gran parte del campo es eficiencia, almacenamiento, y mantener funcionando la generación y las redes que ya existen.",
      "Que la eficiencia es menor frente a construir generación nueva — reducir lo que consume un edificio o una planta suele ser el cambio más barato y rápido disponible.",
      "Que es una carrera única y definida — la mayoría llega desde la ingeniería eléctrica o mecánica con enfoque en energía.",
      "Que la tecnología es lo difícil — las limitaciones más duras suelen ser el costo, la regulación, y la red física que ya está instalada.",
    ],
    mythsAndRealities: [
      {
        myth: "La ingeniería de energía significa trabajar en solar y eólica.",
        reality:
          "Las renovables son parte. También lo son las redes, el almacenamiento, la generación convencional, el calor de procesos industriales, y lograr que los edificios consuman menos desde el principio.",
      },
      {
        myth: "El trabajo es diseñar centrales nuevas.",
        reality:
          "Mucho más del trabajo es análisis — medir, modelar, y demostrar que un cambio propuesto realmente se va a pagar solo.",
      },
      {
        myth: "Cuando una tecnología es lo bastante barata, se instala.",
        reality:
          "La instalación choca con permisos, colas de conexión a la red, e infraestructura existente que no fue diseñada para ella.",
      },
      {
        myth: "Es una carrera de ingeniería aparte.",
        reality:
          "Suele ser una especialización. La mayoría estudió ingeniería eléctrica o mecánica y se movió hacia la energía por materias y empleos.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Química", "Estadística, si se ofrece", "Informática o programación, si se ofrece"],
    helpfulSkills: [
      "Soltura con la termodinámica y los fundamentos eléctricos, ya que el campo cruza ambos",
      "Poder trabajar con datos medidos en vez de supuestos, porque las promesas de ahorro tienen que resistir el escrutinio",
      "Nociones financieras básicas, ya que casi toda propuesta se defiende por su periodo de retorno tanto como por su física",
      "Paciencia con la regulación y los procesos de las eléctricas, que definen qué se puede conectar y cuándo",
      "Programación o manejo de hojas de cálculo suficiente para modelar un sistema antes de comprometerse",
    ],
    typicalProjects: [
      "Dimensionar un campo solar, sus inversores, y su conexión para un sitio concreto",
      "Auditar un edificio o una fábrica e identificar dónde se está desperdiciando energía",
      "Modelar cómo se comportaría un sistema de baterías a lo largo de un día de demanda",
      "Evaluar si un tramo de red puede admitir más generación intermitente",
      "Comparar opciones de calefacción o refrigeración por consumo y por costo de operación",
    ],
    typicalWorkday:
      "El tiempo se reparte entre modelado y análisis frente a una computadora y trabajo en sitio — recorrer instalaciones, leer medidores, comprobar qué está realmente instalado frente a lo que dicen los planos. Los informes y propuestas ocupan una parte real de la semana, porque buena parte del trabajo consiste en convencer a alguien de que vale la pena financiar un cambio. Los plazos de permisos y de las eléctricas marcan el ritmo más que la ingeniería en sí.",
    industries: [
      "Empresas eléctricas y operadores de red",
      "Desarrolladores de energías renovables",
      "Consultoras de ingeniería que hacen auditorías e instalaciones de edificios",
      "Fabricantes con grandes consumos energéticos industriales",
      "Programas públicos de energía y eficiencia",
    ],
    advantages: [
      "El trabajo conecta directamente con cuánta energía se usa y se desperdicia, algo fácil de que te importe",
      "Abarca trabajo eléctrico y mecánico, así que el día a día varía más que en un campo más estrecho",
      "Los resultados son medibles — normalmente puedes mostrar qué cambió tras un proyecto",
      "Hay demanda tanto en obra nueva como en mejorar lo que ya existe",
    ],
    challenges: [
      "El avance suele estar limitado por costo, permisos, y acceso a la red más que por la ingeniería",
      "El campo está moldeado por la política pública, que cambia con gobiernos y ciclos de financiamiento",
      "No es una carrera única bien definida, así que el camino de entrada está menos señalizado que en otras",
      "Los ahorros hay que demostrarlos, y medirlos es más difícil y desordenado de lo que suena",
    ],
    thingsPeopleDislike: [
      "Esperar permisos, aprobaciones de la eléctrica, y colas de conexión a la red",
      "Escribir una y otra vez la justificación económica de un trabajo técnicamente obvio",
      "Ver cómo se rechaza una propuesta sólida solo por su periodo de retorno",
      "Trabajo en sitio en salas de máquinas y azoteas que son calurosas, estrechas, o ambas",
    ],
  },
  {
    slug: "semiconductor-engineering",
    name: "Ingeniería de Semiconductores",
    tagline: "Cómo se diseñan y fabrican los chips que impulsan casi todos los dispositivos electrónicos modernos.",
    whatItIs:
      "La ingeniería de semiconductores trata sobre diseñar y fabricar los chips que impulsan casi todos los dispositivos electrónicos modernos — trabajando a la escala de circuitos y materiales individuales, no de un producto terminado. Combina la ingeniería eléctrica, la ciencia de materiales, y la manufactura de precisión.",
    realWorldExamples: [
      "Diseño de microchips y procesadores",
      "Ingeniería de procesos de fabricación de semiconductores",
      "Pruebas de chips y verificación de calidad",
      "Ingeniería de materiales para la manufactura de semiconductores",
    ],
    relatedMajors: ["Ingeniería Eléctrica (con enfoque en semiconductores)", "Ciencia e Ingeniería de Materiales (con cierta superposición)", "Ingeniería en Computación (con cierta superposición)"],
    relatedField: "electrical-engineering",
    salaryNote:
      "No hay una categoría separada para la ingeniería de semiconductores en la Oficina de Estadísticas Laborales de EE. UU. — usualmente se estudia a través de la ingeniería eléctrica, en computación, o de materiales. Consulta la página de Ingeniería Eléctrica para ver datos de salario relacionados y con fuente.",
    whatEngineersWorkOn:
      "Los ingenieros de semiconductores trabajan a una escala donde el material mismo es el diseño. Algunos se dedican al circuito — colocar transistores, verificar tiempos, y simular un bloque mucho antes de que exista silicio alguno. Otros se dedican al proceso, ajustando la secuencia de depósito, litografía, y grabado que construye un chip capa por capa, y buscando por qué una oblea salió mal. Ambos lados viven de los datos: cantidades enormes de mediciones, y la estadística necesaria para distinguir un efecto real del ruido.",
    commonMisconceptions: [
      "Que se trata de construir computadoras — el trabajo es el chip en sí, varias capas de abstracción por debajo de un producto terminado.",
      "Que diseño y fabricación son el mismo puesto — el diseño de chips y la ingeniería de procesos de fábrica son carreras bastante distintas que comparten industria.",
      "Que todo está automatizado — las herramientas lo están, pero decidir qué ejecutar, y diagnosticar qué salió mal, no.",
      "Que pasas el día en una sala limpia con traje blanco — algunos puestos sí, y muchos otros están enteramente frente a una computadora.",
    ],
    mythsAndRealities: [
      {
        myth: "Los ingenieros de semiconductores construyen computadoras.",
        reality:
          "Construyen lo que va dentro del chip. Una computadora terminada está muchas capas de abstracción por encima de donde ocurre este trabajo.",
      },
      {
        myth: "Es un solo trabajo.",
        reality:
          "Diseño y proceso son casi profesiones separadas. Uno simula circuitos en un escritorio; el otro opera y depura una línea de fabricación.",
      },
      {
        myth: "Las fábricas modernas están totalmente automatizadas, así que hay poco que hacer.",
        reality:
          "La automatización ejecuta los pasos. Los ingenieros deciden cuáles deben ser esos pasos y averiguan por qué cayó el rendimiento cuando nada obvio cambió.",
      },
      {
        myth: "Necesitas un doctorado para entrar.",
        reality:
          "Los puestos de investigación suelen pedirlo, pero muchísimo trabajo de diseño, prueba, y proceso lo hace gente con licenciatura o maestría.",
      },
    ],
    usefulSubjects: ["Física", "Cálculo", "Química", "Informática o programación, si se ofrece", "Estadística, si se ofrece"],
    helpfulSkills: [
      "Soltura con la física y la química a un nivel por debajo de lo visible, ya que el comportamiento viene de efectos de materiales y cuánticos",
      "Estadística sólida, porque el rendimiento y el control de procesos son problemas estadísticos antes que físicos",
      "Programación y scripting, ya que analizar a mano los datos de proceso y prueba no es viable",
      "Paciencia con ciclos de retroalimentación largos, porque un cambio en un proceso puede tardar semanas en verse en los resultados",
      "Diagnóstico metódico, porque un defecto puede venir de cualquiera de cientos de pasos",
    ],
    typicalProjects: [
      "Diseñar y simular un bloque de circuito frente a objetivos de tiempo, consumo, y área",
      "Ajustar un paso de depósito o grabado para alcanzar un espesor o perfil objetivo",
      "Investigar por qué cayó el rendimiento en un producto o una herramienta concreta",
      "Desarrollar procedimientos de prueba que detecten chips defectuosos antes de enviarlos",
      "Caracterizar un material o proceso nuevo y documentar cómo se comporta",
    ],
    typicalWorkday:
      "En los puestos de diseño, la mayor parte del día es simulación y análisis frente a una computadora, con revisiones de diseño de por medio. En los puestos de proceso y rendimiento, es una mezcla de análisis de datos y tiempo dentro o junto a la fábrica, siguiendo experimentos y reaccionando cuando una herramienta se desvía. Ambos lados están marcados por ciclos largos — una oblea tarda semanas en recorrer la línea, así que el experimento de hoy responde una pregunta que hiciste hace tiempo.",
    industries: [
      "Diseñadores de chips y empresas sin fábrica propia",
      "Fundiciones de semiconductores y fabricantes integrados",
      "Proveedores de equipo y materiales para semiconductores",
      "Laboratorios de investigación e instalaciones universitarias",
      "Empresas que diseñan silicio a medida para sus propios productos",
    ],
    advantages: [
      "El trabajo está debajo de casi toda la tecnología moderna, así que su alcance es inusualmente amplio",
      "Es trabajo técnico genuinamente profundo, con espacio para especializarse muchísimo",
      "Las rutas de diseño y de proceso son bastante distintas, así que una puede encajarte cuando la otra no",
      "Las habilidades de estadística y control de procesos se transfieren a otra manufactura de alta precisión",
    ],
    challenges: [
      "Los ciclos de retroalimentación son largos, lo que hace la iteración lenta comparada con el software o lo mecánico",
      "La industria es intensiva en capital y cíclica, y la contratación se mueve con ese ciclo",
      "Las fábricas se concentran en regiones concretas, así que las opciones de ubicación pueden ser limitadas",
      "La curva de aprendizaje es empinada, y mucho del conocimiento práctico es específico del proceso de una empresa",
    ],
    thingsPeopleDislike: [
      "Esperar semanas a que una oblea te diga si una idea funcionó",
      "El protocolo de sala limpia, el vestuario, y las restricciones que conlleva",
      "Perseguir problemas de rendimiento con cientos de causas posibles y poca evidencia",
      "Las guardias y la cobertura por turnos cuando una línea de producción no puede detenerse",
    ],
  },
];
