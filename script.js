const DEFAULT_SETTINGS = {
  personName: "Vanesa",
  signature: "Con carino",
  whatsappNumber: "51917726087",
  metAt: "2026-06-30T20:47"
};

const STORAGE_KEYS = {
  settings: "vanesa.settings",
  completed: "vanesa.completedPlans",
  memories: "vanesa.memories",
  bingo: "vanesa.bingo",
  smiles: "vanesa.smiles",
  ritual: "vanesa.ritual"
};

const categories = ["Cafe", "Casa", "Aventura", "Arte", "Noche", "Detalle", "Paseo", "Sorpresa"];

const planTexts = [
  ["Cafe con pregunta sorpresa", "Tomar un cafe y responder una pregunta bonita escrita en una servilleta."],
  ["Paseo sin mapa", "Caminar por una zona linda y elegir el camino por turnos."],
  ["Cine con dulces favoritos", "Ver una pelicula y armar una bolsa con sus dulces favoritos."],
  ["Picnic pequeno", "Llevar una manta, algo rico y quedarse mirando el cielo."],
  ["Cena hecha por mi", "Preparar una cena sencilla, con musica suave y mesa bonita."],
  ["Tarde de helado", "Probar dos sabores nuevos y elegir el ganador de la tarde."],
  ["Lista de canciones", "Escuchar canciones que recuerden algo y guardar una playlist de los dos."],
  ["Museo o galeria", "Ir a mirar arte y escoger la obra que mas se parece a nosotros."],
  ["Noche de juegos de mesa", "Jugar algo sencillo y poner premios pequenos para cada ronda."],
  ["Desayuno sorpresa", "Comenzar el dia con pan, fruta, cafe y una nota escrita a mano."],
  ["Atardecer en silencio", "Buscar un lugar con buena vista y ver como cambia la luz."],
  ["Fotitos estilo diario", "Tomarnos cinco fotos espontaneas para guardar el dia."],
  ["Carta en papel", "Escribirnos una carta corta y leerla cuando termine la cita."],
  ["Postre compartido", "Pedir un postre grande y pelear romanticamente por el ultimo bocado."],
  ["Ruta de panaderias", "Visitar dos panaderias y elegir el mejor antojo."],
  ["Caminata con flores", "Caminar despacio y comprarle una flor sencilla al final."],
  ["Tarde de libreria", "Buscar libros, leer primeras paginas y recomendarnos uno."],
  ["Noche de pizza", "Armar pizza en casa con ingredientes elegidos por ambos."],
  ["Karaoke privado", "Cantar canciones sin pena y guardar una cancion oficial."],
  ["Pintar algo juntos", "Comprar lienzo o cartulina y pintar sin buscar perfeccion."],
  ["Cita de fotos antiguas", "Mirar fotos de la infancia y contar historias de cada una."],
  ["Cocinar una receta nueva", "Elegir una receta que ninguno haya preparado antes."],
  ["Tarde de parque", "Sentarnos en una banca y hablar de cosas que no se dicen con prisa."],
  ["Compra de matching detail", "Elegir un llavero, pulsera o detalle pequeno que combine."],
  ["Reto de 10 preguntas", "Hacernos preguntas honestas y responder con calma."],
  ["Noche de chocolate caliente", "Preparar chocolate y ver algo tranquilo bajo una manta."],
  ["Visita a un mirador", "Subir a ver la ciudad y pedir un deseo para los dos."],
  ["Cita de mercado", "Comprar ingredientes en un mercado y cocinar con lo encontrado."],
  ["Tarde sin celulares", "Guardar los celulares una hora y estar presentes de verdad."],
  ["Album de recuerdos", "Elegir fotos, ponerles fecha y escribir una linea por cada una."],
  ["Cena con velas", "Hacer que una comida normal se sienta especial con luz bonita."],
  ["Bicicleta o scooter", "Dar una vuelta tranquila y terminar con algo frio para tomar."],
  ["Noche de serie nueva", "Ver el primer episodio de una serie que ninguno conozca."],
  ["Visitar un lugar nuevo", "Elegir un sitio donde nunca hayamos ido y hacerlo nuestro."],
  ["Cita de dibujo", "Dibujarnos uno al otro y guardar el resultado aunque salga raro."],
  ["Ramo improvisado", "Armar un ramo pequeno con flores sueltas y una tarjeta."],
  ["Tarde de poesia", "Leer poemas cortos y elegir una frase para dedicar."],
  ["Cena tematica", "Escoger un pais y preparar comida, musica y ambiente de ese lugar."],
  ["Noche de preguntas al azar", "Sacar papelitos con preguntas y responder sin correr."],
  ["Paseo bajo lluvia", "Salir con paraguas, caminar poquito y terminar con cafe caliente."],
  ["Cita de postales", "Escribir una postal para el futuro y guardarla cerrada."],
  ["Mini roadtrip", "Ir a un lugar cercano solo por la historia de ir juntos."],
  ["Tarde de manualidades", "Hacer pulseras, collage o algo pequeno con las manos."],
  ["Mirar estrellas", "Alejarnos de las luces y buscar constelaciones aunque inventemos nombres."],
  ["Cita deportiva suave", "Jugar bowling, billar, minigolf o algo donde podamos reirnos."],
  ["Noche de sushi o makis", "Pedir varios sabores y calificarlos como jurado serio."],
  ["Recorrido de murales", "Buscar murales o paredes bonitas y tomar fotos ahi."],
  ["Domingo lento", "Hacer un plan sin prisa: caminar, comer y volver temprano."],
  ["Cita con playlist sorpresa", "Llevar audifonos y turnarnos canciones en el camino."],
  ["Dulce favorito", "Aparecer con su dulce favorito y una invitacion escrita."],
  ["Tarde de cartas", "Jugar cartas y cambiar cada premio por un abrazo o una promesa."],
  ["Noche de peliculas malas", "Ver una pelicula mala y comentarla como criticos profesionales."],
  ["Cita de cocina dulce", "Hornear galletas, brownies o panqueques y decorar juntos."],
  ["Paseo por flores", "Ir a una floreria y elegir la flor que mas parezca Vanesa."],
  ["Visitar una feria", "Caminar por una feria, probar algo y comprar un recuerdo pequeno."],
  ["Cita de terraza", "Sentarnos en una terraza y hablar de planes futuros."],
  ["Dia de museo + cafe", "Mirar una exposicion y terminar comentandola con cafe."],
  ["Tarde de cartas para abrir luego", "Escribir notas para momentos futuros: cuando este feliz, triste o cansada."],
  ["Cita de playlist de infancia", "Escuchar canciones de cuando eramos ninos y contar recuerdos."],
  ["Paseo al amanecer", "Ver salir el sol y desayunar algo sencillo despues."],
  ["Noche elegante en casa", "Vestirnos bonito para cenar en casa como si fuera restaurante."],
  ["Cita de fotos instantaneas", "Tomar fotos e imprimirlas despues para el diario."],
  ["Tour de cafeterias", "Probar dos cafes distintos y elegir nuestro favorito."],
  ["Tarde de rompecabezas", "Armar un puzzle mientras conversamos sin apuro."],
  ["Cita de lectura compartida", "Leer en voz alta una pagina cada uno."],
  ["Noche de tacos", "Preparar tacos con muchas opciones y votar el mejor."],
  ["Paseo por la costa", "Caminar cerca del agua y dejar que el viento haga su parte."],
  ["Clase juntos", "Tomar una clase de baile, cocina, pintura o algo nuevo."],
  ["Cita de preguntas futuras", "Imaginar un viaje, una casa, una rutina y escribir tres suenos."],
  ["Tarde de spa casero", "Mascarillas, crema de manos, musica suave y cero prisa."],
  ["Noche de velas y musica", "Apagar luces fuertes y escuchar canciones que nos abracen."],
  ["Cita de biblioteca", "Buscar un rincon tranquilo y leer un rato juntos."],
  ["Paseo fotografico", "Salir con el objetivo de encontrar diez cosas bonitas."],
  ["Cita de cocina peruana", "Preparar o salir por un plato peruano y brindar por el dia."],
  ["Noche de confesiones lindas", "Decir tres cosas que admiramos del otro."],
  ["Tarde de compras pequenas", "Elegir un objeto barato que represente el dia."],
  ["Cita de helados de barrio", "Buscar una heladeria pequena y volverla nuestra."],
  ["Mirar nubes", "Acostarnos en una manta y encontrar figuras en las nubes."],
  ["Noche de baile lento", "Bailar una cancion suave aunque sea en una sala pequena."],
  ["Cita de cartas de agradecimiento", "Escribir tres gracias concretas y leerlas."],
  ["Ruta de comida callejera", "Probar algo salado, algo dulce y una bebida nueva."],
  ["Paseo con libreria final", "Caminar y terminar eligiendo un libro para regalarle."],
  ["Cita de acuarela", "Pintar una escena pequena del dia con acuarelas."],
  ["Noche de trivia personal", "Hacer preguntas sobre gustos, fechas y detalles."],
  ["Tarde de parque con cometa", "Llevar una cometa o burbujas y permitirnos ser simples."],
  ["Cita de cocina con musica", "Cocinar mientras suena una playlist hecha solo para ella."],
  ["Cafe y metas", "Hablar de metas y elegir una forma de apoyarnos."],
  ["Noche de cartas al azar", "Sacar retos tiernos: abrazo largo, halago, recuerdo, pregunta."],
  ["Paseo por un barrio bonito", "Caminar por calles lindas y escoger una casa imaginaria."],
  ["Cita de postre casero", "Preparar fresas, crema, chocolate o algo dulce para compartir."],
  ["Tarde de origami", "Hacer figuras de papel y escribir una frase por dentro."],
  ["Cena con menu escrito", "Crear un menu casero con nombres romanticos para cada plato."],
  ["Cita de pelicula favorita", "Ver su pelicula favorita y preguntarle por que la quiere."],
  ["Paseo de recuerdos", "Volver a un lugar que ya tenga significado para nosotros."],
  ["Noche de estrellas en pantalla", "Ver documentales del cielo y planear mirar estrellas de verdad."],
  ["Tarde de jardin o vivero", "Elegir una plantita y ponerle un nombre de los dos."],
  ["Cita de desayuno nocturno", "Hacer panqueques o huevos de noche, porque si."],
  ["Cartas en sobres", "Preparar sobres con mensajes para dias especiales."],
  ["Plan secreto", "Invitarla sin contar destino y cuidar cada detalle del camino."],
  ["Cita numero cien", "Repetir nuestro plan favorito y celebrar haber llegado hasta aqui."]
];

const plans = planTexts.map(([title, detail], index) => ({
  id: index + 1,
  title,
  detail,
  category: categories[index % categories.length]
}));

const acrostics = [
  {
    title: "Cuando pienso en ti",
    lines: [
      ["V", "uelvo a creer en los detalles pequenos."],
      ["A", "prendo que lo bonito tambien puede ser tranquilo."],
      ["N", "ace una sonrisa donde antes habia prisa."],
      ["E", "n cada plan encuentro una razon para cuidarte."],
      ["S", "i el dia pesa, quiero ser pausa y abrazo."],
      ["A", "si, sin ruido, te voy queriendo mejor."]
    ]
  },
  {
    title: "Promesa sencilla",
    lines: [
      ["V", "oy a mirarte con ternura incluso en los dias comunes."],
      ["A", "companar tus suenos sera parte de los mios."],
      ["N", "unca quiero que falte respeto en lo que construyamos."],
      ["E", "legirte sera un gesto diario, no una frase vacia."],
      ["S", "ere calma cuando el mundo vaya demasiado rapido."],
      ["A", "qui estoy, con ganas honestas de hacerte bien."]
    ]
  },
  {
    title: "Mi forma de invitarte",
    lines: [
      ["V", "en conmigo a coleccionar momentos."],
      ["A", "unque sean pequenos, si son contigo alcanzan."],
      ["N", "os quedan calles, cafes, canciones y fotos."],
      ["E", "spero que cada cita tenga algo de magia discreta."],
      ["S", "on tus ojos mi parte favorita del plan."],
      ["A", "cepta una aventura mas, Vanesa."]
    ]
  }
];

const quickMessages = [
  {
    title: "Canjear una cita",
    text: "Hola, quiero canjear una de nuestras citas. Elige algo bonito para mi y prometo ir con ganas de pasarla lindo."
  },
  {
    title: "Plan sorpresa",
    text: "Hola, hoy quiero canjear un plan sorpresa contigo. Sorprendeme con una actividad bonita de la pagina."
  },
  {
    title: "Cita tranquila",
    text: "Hola, quiero canjear una cita tranquila: cafe, paseo o algo sencillo donde podamos conversar bonito."
  },
  {
    title: "Cita con foto",
    text: "Hola, quiero canjear una cita y guardar una foto para nuestro diario. Esta vez toca crear un recuerdo nuevo."
  },
  {
    title: "Canje romantico",
    text: "Hola, vengo a canjear un momento romantico. Puede ser algo simple, pero que se sienta hecho con carino."
  },
  {
    title: "Cita pendiente",
    text: "Hola, revise el tarjetero y quiero elegir una actividad pendiente. Mandame una propuesta y la canjeamos."
  }
];

const coupons = [
  ["Cafe bonito", "Un cafe con conversacion lenta y una foto para el diario."],
  ["Abrazo largo", "Un abrazo sin apuro, de esos que arreglan un poco el dia."],
  ["Playlist para mi", "Una playlist con canciones que te recuerden a Vanesa."],
  ["Carta a mano", "Una carta corta, honesta y guardable."],
  ["Paseo sorpresa", "Una salida sin decir destino hasta llegar."],
  ["Cena en casa", "Algo sencillo, bien servido y con musica suave."],
  ["Postre elegido", "Un postre donde ella elige y tu no discutes."],
  ["Foto favorita", "Una foto bonita juntos y una nota para el diario."],
  ["Tarde sin prisa", "Un plan lento, sin mirar tanto la hora."],
  ["Mensaje bonito", "Un mensaje largo, honesto y enviado sin motivo."],
  ["Mini regalo", "Un detalle pequeno que diga: me acorde de ti."],
  ["Plan de lluvia", "Cafe caliente, paraguas y una caminata corta."]
];

const surprises = [
  "Quiero canjear una cita con cafe y una caminata bonita.",
  "Quiero canjear una cita sorpresa donde tu elijas todo.",
  "Quiero canjear una tarde de fotos para nuestro diario.",
  "Quiero canjear una cena tranquila contigo.",
  "Quiero canjear un paseo sin prisa y con postre al final.",
  "Quiero canjear una noche de pelicula, manta y algo dulce.",
  "Quiero canjear una carta escrita a mano.",
  "Quiero canjear una playlist hecha pensando en mi.",
  "Quiero canjear una salida donde tomemos una foto bonita.",
  "Quiero canjear una tarde de helado y conversacion."
];

const dicePlaces = ["Cafe", "Parque", "Casa", "Mirador", "Helado", "Libreria"];
const diceActions = ["foto", "postre", "carta", "playlist", "paseo", "abrazo"];
const jarNotes = [
  "Me gusta cuando haces que un dia normal se sienta especial.",
  "Tu risa merece guardarse como recuerdo favorito.",
  "Hoy toca un plan pequeno, pero con carino enorme.",
  "Una foto contigo siempre mejora el diario.",
  "Que bonito seria canjear una cita sin prisa.",
  "Tu eliges el plan y yo prometo cuidar los detalles.",
  "Hay momentos que todavia no pasan y ya quiero recordarlos.",
  "Esta pagina existe porque Vanesa merece detalles bonitos."
];
const bingoItems = ["Cafe", "Foto", "Postre", "Carta", "Paseo", "Risa", "Abrazo", "Playlist", "Sorpresa"];

let settings = loadJSON(STORAGE_KEYS.settings, DEFAULT_SETTINGS);
let completedPlans = new Set(loadJSON(STORAGE_KEYS.completed, []));
let customMemories = loadJSON(STORAGE_KEYS.memories, []);
let manifestMemories = [];
let activeFilter = "all";
let activeSearch = "";
let timerID;
let puzzleLetters = [];
let puzzleUsed = new Set();
let puzzleIndex = 0;
let rouletteRotation = 0;
let bingoDone = new Set(loadJSON(STORAGE_KEYS.bingo, []));
let smileCount = loadJSON(STORAGE_KEYS.smiles, 0);
let ritualDone = new Set(loadJSON(STORAGE_KEYS.ritual, []));

const plansGrid = document.querySelector("#plansGrid");
const timeline = document.querySelector("#timeline");
const acrosticGrid = document.querySelector("#acrosticGrid");
const letterGrid = document.querySelector("#letterGrid");
const settingsDialog = document.querySelector("#settingsDialog");

init();

function init() {
  renderPlans();
  renderAcrostics();
  renderLetters();
  renderCoupons();
  renderBingo();
  renderSmileCounter();
  renderRitual();
  resetPuzzle();
  spinSurprise();
  rollDateDice();
  openJarNote();
  renderTimeline();
  updateProgress();
  updateWhatsAppLinks();
  bindEvents();
  startTimer();
  loadPhotoManifest();
}

function bindEvents() {
  document.querySelector("#planSearch").addEventListener("input", (event) => {
    activeSearch = event.target.value.trim().toLowerCase();
    renderPlans();
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      activeFilter = button.dataset.filter;
      renderPlans();
    });
  });

  document.querySelector("#randomPlan").addEventListener("click", pickRandomPlan);
  document.querySelector("#addMemory").addEventListener("click", addMemory);
  document.querySelector("#openSettings").addEventListener("click", openSettings);
  document.querySelector("#saveSettings").addEventListener("click", saveSettings);
  document.querySelector("#resetPuzzle").addEventListener("click", resetPuzzle);
  document.querySelector("#surpriseButton").addEventListener("click", spinSurprise);
  document.querySelector("#rollDice").addEventListener("click", rollDateDice);
  document.querySelector("#openJar").addEventListener("click", openJarNote);
  document.querySelector("#resetBingo").addEventListener("click", resetBingo);
  document.querySelector("#addSmile").addEventListener("click", addSmile);
  document.querySelector("#checkSecret").addEventListener("click", checkSecret);
  document.querySelector("#secretInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkSecret();
  });
  document.querySelectorAll("[data-ritual]").forEach((button) => {
    button.addEventListener("click", () => toggleRitual(button.dataset.ritual));
  });
}

function renderPlans() {
  const visiblePlans = plans.filter((plan) => {
    const isDone = completedPlans.has(plan.id);
    const matchesFilter = activeFilter === "all" || (activeFilter === "done" && isDone) || (activeFilter === "pending" && !isDone);
    const searchable = `${plan.title} ${plan.detail} ${plan.category}`.toLowerCase();
    return matchesFilter && searchable.includes(activeSearch);
  });

  plansGrid.innerHTML = visiblePlans.map((plan) => {
    const isDone = completedPlans.has(plan.id);
    const message = buildPlanMessage(plan);
    return `
      <article class="plan-card ${isDone ? "is-done" : ""}" id="plan-${plan.id}">
        <div class="plan-top">
          <span class="tag">${isDone ? "Realizado" : plan.category}</span>
          <span class="plan-number">#${String(plan.id).padStart(2, "0")}</span>
        </div>
        <h3>${escapeHTML(plan.title)}</h3>
        <p>${escapeHTML(plan.detail)}</p>
        <div class="plan-actions">
          <a class="button quiet" href="${whatsAppURL(message)}" target="_blank" rel="noreferrer" aria-label="Enviar plan por WhatsApp">
            ${sendIcon()} Invitar
          </a>
          <button class="button ${isDone ? "primary" : "secondary"}" type="button" data-toggle-plan="${plan.id}">
            ${checkIcon()} ${isDone ? "Realizado" : "Marcar"}
          </button>
        </div>
      </article>
    `;
  }).join("");

  plansGrid.querySelectorAll("[data-toggle-plan]").forEach((button) => {
    button.addEventListener("click", () => togglePlan(Number(button.dataset.togglePlan)));
  });
}

function togglePlan(id) {
  if (completedPlans.has(id)) {
    completedPlans.delete(id);
  } else {
    completedPlans.add(id);
  }
  saveJSON(STORAGE_KEYS.completed, [...completedPlans]);
  renderPlans();
  renderTimeline();
  updateProgress();
}

function updateProgress() {
  const done = completedPlans.size;
  const pending = plans.length - done;
  const percent = Math.round((done / plans.length) * 100);
  document.querySelector("#doneCount").textContent = done;
  document.querySelector("#pendingCount").textContent = pending;
  document.querySelector("#progressBar").style.width = `${percent}%`;
  document.querySelector("#progressText").textContent = `${percent}% de esta aventura`;
}

function pickRandomPlan() {
  const pool = plans.filter((plan) => !completedPlans.has(plan.id));
  const selected = pool[Math.floor(Math.random() * pool.length)] || plans[Math.floor(Math.random() * plans.length)];
  if (!selected) return;
  activeFilter = "all";
  activeSearch = "";
  document.querySelector("#planSearch").value = "";
  document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("is-active", item.dataset.filter === "all"));
  renderPlans();
  requestAnimationFrame(() => {
    const card = document.querySelector(`#plan-${selected.id}`);
    if (!card) return;
    card.classList.add("is-picked");
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => card.classList.remove("is-picked"), 1800);
  });
}

async function loadPhotoManifest() {
  try {
    const response = await fetch("fotos/fotos.json", { cache: "no-store" });
    if (!response.ok) throw new Error("No manifest");
    const photos = await response.json();
    if (Array.isArray(photos)) {
      manifestMemories = photos;
      renderTimeline();
    }
  } catch (error) {
    manifestMemories = [];
    renderTimeline();
  }
}

function renderTimeline() {
  const doneMemories = [...completedPlans].slice(-8).reverse().map((id) => {
    const plan = plans.find((item) => item.id === id);
    return {
      title: plan ? plan.title : "Plan realizado",
      date: new Date().toISOString().slice(0, 10),
      note: plan ? `Marcamos este plan como realizado: ${plan.detail}` : "Un recuerdo mas para nosotros.",
      src: ""
    };
  });

  const memories = [...customMemories, ...manifestMemories, ...doneMemories]
    .filter(Boolean)
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));

  if (!memories.length) {
    timeline.innerHTML = `<div class="empty-state">El primer recuerdo espera su foto, su fecha y una historia pequena.</div>`;
    return;
  }

  timeline.innerHTML = memories.map((memory) => {
    const alt = escapeAttribute(memory.title || "Recuerdo con Vanesa");
    const image = memory.dataUrl
      ? `<img class="memory-photo" src="${escapeAttribute(memory.dataUrl)}" alt="${alt}" loading="lazy">`
      : memory.src
        ? `<img class="memory-photo" src="fotos/${escapeAttribute(memory.src)}" alt="${alt}" loading="lazy" onerror="this.remove()">`
        : `<div class="memory-photo" aria-hidden="true"></div>`;
    return `
      <article class="memory-card">
        ${image}
        <div class="memory-body">
          <time>${formatDate(memory.date)}</time>
          <h3>${escapeHTML(memory.title || "Recuerdo con Vanesa")}</h3>
          <p>${escapeHTML(memory.note || "Un capitulo bonito de esta historia.")}</p>
        </div>
      </article>
    `;
  }).join("");
}

async function addMemory() {
  const title = document.querySelector("#memoryTitle").value.trim();
  const date = document.querySelector("#memoryDate").value;
  const src = document.querySelector("#memoryPhoto").value.trim();
  const file = document.querySelector("#memoryFile").files[0];
  const note = document.querySelector("#memoryNote").value.trim();
  const status = document.querySelector("#memoryStatus");

  if (!title && !note && !src && !file) return;

  status.textContent = "Guardando recuerdo...";
  const dataUrl = file ? await resizeImageFile(file) : "";

  customMemories.unshift({
    title: title || "Recuerdo con Vanesa",
    date: date || new Date().toISOString().slice(0, 10),
    src,
    dataUrl,
    note: note || "Un dia que merece quedarse guardado."
  });

  if (!saveJSON(STORAGE_KEYS.memories, customMemories)) {
    customMemories.shift();
    status.textContent = "La foto pesa demasiado para guardarse aqui. Prueba con una imagen mas ligera o subela a /fotos.";
    return;
  }

  document.querySelector("#memoryTitle").value = "";
  document.querySelector("#memoryDate").value = "";
  document.querySelector("#memoryPhoto").value = "";
  document.querySelector("#memoryFile").value = "";
  document.querySelector("#memoryNote").value = "";
  status.textContent = "Recuerdo guardado. Ya aparece en el diario.";
  renderTimeline();
}

function renderAcrostics() {
  acrosticGrid.innerHTML = acrostics.map((poem) => `
    <article class="acrostic-card">
      <h3>${escapeHTML(poem.title)}</h3>
      ${poem.lines.map(([letter, line]) => `
        <p class="acrostic-line"><strong>${letter}</strong><span>${escapeHTML(line)}</span></p>
      `).join("")}
    </article>
  `).join("");
}

function renderLetters() {
  letterGrid.innerHTML = quickMessages.map((message) => `
    <article class="letter-card">
      <div>
        <h3>${escapeHTML(message.title)}</h3>
        <p>${escapeHTML(message.text)}</p>
      </div>
      <div class="letter-actions">
        <a class="button primary" href="${whatsAppURL(message.text)}" target="_blank" rel="noreferrer">
          ${sendIcon()} Enviar
        </a>
        <button class="button quiet" type="button" data-copy="${escapeAttribute(message.text)}">
          ${copyIcon()} Copiar
        </button>
      </div>
    </article>
  `).join("");

  letterGrid.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(button.dataset.copy);
      const original = button.innerHTML;
      button.innerHTML = `${checkIcon()} Copiado`;
      setTimeout(() => {
        button.innerHTML = original;
      }, 1300);
    });
  });
}

function renderCoupons() {
  const couponGrid = document.querySelector("#couponGrid");
  couponGrid.innerHTML = coupons.map(([title, detail]) => `
    <article class="coupon-card">
      <span class="tag">Cupon</span>
      <h3>${escapeHTML(title)}</h3>
      <p>${escapeHTML(detail)}</p>
      <a class="button primary" href="${whatsAppURL(buildRedeemMessage(title))}" target="_blank" rel="noreferrer">
        ${sendIcon()} Canjear
      </a>
    </article>
  `).join("");
}

function rollDateDice() {
  const place = dicePlaces[Math.floor(Math.random() * dicePlaces.length)];
  const action = diceActions[Math.floor(Math.random() * diceActions.length)];
  const message = `Quiero canjear una cita de ${place.toLowerCase()} con ${action}.`;

  document.querySelector("#dateDieOne").textContent = place;
  document.querySelector("#dateDieTwo").textContent = action;
  document.querySelector("#diceResult").textContent = `${place} + ${action}: ese es el mini plan elegido.`;
  document.querySelector("#diceWhatsapp").href = whatsAppURL(`Hola, ${message}`);
}

function openJarNote() {
  const note = jarNotes[Math.floor(Math.random() * jarNotes.length)];
  document.querySelector("#jarNote").textContent = note;
  document.querySelector("#jarWhatsapp").href = whatsAppURL(`Hola, saque esta nota del frasquito: ${note}`);
}

function renderBingo() {
  const bingoGrid = document.querySelector("#bingoGrid");
  bingoGrid.innerHTML = bingoItems.map((item) => `
    <button type="button" class="${bingoDone.has(item) ? "is-done" : ""}" data-bingo="${escapeAttribute(item)}">${item}</button>
  `).join("");
  document.querySelector("#bingoProgress").textContent = `${bingoDone.size} de ${bingoItems.length} momentos marcados.`;

  bingoGrid.querySelectorAll("[data-bingo]").forEach((button) => {
    button.addEventListener("click", () => toggleBingo(button.dataset.bingo));
  });
}

function toggleBingo(item) {
  if (bingoDone.has(item)) {
    bingoDone.delete(item);
  } else {
    bingoDone.add(item);
  }
  saveJSON(STORAGE_KEYS.bingo, [...bingoDone]);
  renderBingo();
}

function resetBingo() {
  bingoDone = new Set();
  saveJSON(STORAGE_KEYS.bingo, []);
  renderBingo();
}

function renderSmileCounter() {
  document.querySelector("#smileCount").textContent = smileCount;
  document.querySelector("#smileWhatsapp").href = whatsAppURL(`Hola, tengo ${smileCount} sonrisas acumuladas y quiero cobrar una cita bonita.`);
}

function addSmile() {
  smileCount += 1;
  saveJSON(STORAGE_KEYS.smiles, smileCount);
  renderSmileCounter();
}

function checkSecret() {
  const input = document.querySelector("#secretInput");
  const message = document.querySelector("#secretMessage");
  const link = document.querySelector("#secretWhatsapp");
  const value = input.value.trim().toUpperCase();

  if (value === "VANESA") {
    message.textContent = "Clave correcta. Se desbloqueo una cita secreta.";
    link.classList.remove("is-disabled");
    link.setAttribute("aria-disabled", "false");
    link.href = whatsAppURL("Hola, desbloquee el codigo secreto VANESA y quiero canjear una cita secreta.");
    return;
  }

  message.textContent = "Casi. La palabra secreta es el nombre que hace bonita esta pagina.";
  link.classList.add("is-disabled");
  link.setAttribute("aria-disabled", "true");
  link.href = "#juego";
}

function renderRitual() {
  document.querySelectorAll("[data-ritual]").forEach((button) => {
    button.classList.toggle("is-done", ritualDone.has(button.dataset.ritual));
  });

  const text = ritualDone.size === 3
    ? "Ritual completo: esta cita ya merece entrar al diario."
    : `${ritualDone.size} de 3 detalles marcados.`;
  document.querySelector("#ritualText").textContent = text;
}

function toggleRitual(item) {
  if (ritualDone.has(item)) {
    ritualDone.delete(item);
  } else {
    ritualDone.add(item);
  }
  saveJSON(STORAGE_KEYS.ritual, [...ritualDone]);
  renderRitual();
}

function resetPuzzle() {
  puzzleLetters = shuffleLetters("VANESA".split(""));
  puzzleUsed = new Set();
  puzzleIndex = 0;
  renderPuzzle();
}

function renderPuzzle() {
  const target = "VANESA";
  const slots = document.querySelector("#puzzleSlots");
  const tiles = document.querySelector("#puzzleTiles");
  const message = document.querySelector("#puzzleMessage");
  const redeemLink = document.querySelector("#puzzleWhatsapp");

  slots.innerHTML = target.split("").map((letter, index) => `
    <span class="${index < puzzleIndex ? "is-filled" : ""}">${index < puzzleIndex ? letter : ""}</span>
  `).join("");

  tiles.innerHTML = puzzleLetters.map((letter, index) => `
    <button type="button" data-puzzle-index="${index}" ${puzzleUsed.has(index) ? "disabled" : ""}>${letter}</button>
  `).join("");

  if (puzzleIndex === target.length) {
    message.textContent = "Puzzle completo. Ya puedes canjear una cita sorpresa.";
    redeemLink.classList.remove("is-disabled");
    redeemLink.setAttribute("aria-disabled", "false");
    redeemLink.href = whatsAppURL("Hola, complete el puzzle de Vanesa y quiero canjear mi cita sorpresa.");
  } else {
    message.textContent = `Elige la letra ${target[puzzleIndex]}.`;
    redeemLink.classList.add("is-disabled");
    redeemLink.setAttribute("aria-disabled", "true");
    redeemLink.href = "#juego";
  }

  tiles.querySelectorAll("[data-puzzle-index]").forEach((button) => {
    button.addEventListener("click", () => choosePuzzleLetter(Number(button.dataset.puzzleIndex)));
  });
}

function choosePuzzleLetter(index) {
  const target = "VANESA";
  const message = document.querySelector("#puzzleMessage");
  if (puzzleUsed.has(index)) return;

  if (puzzleLetters[index] === target[puzzleIndex]) {
    puzzleUsed.add(index);
    puzzleIndex += 1;
    renderPuzzle();
    return;
  }

  message.textContent = "Casi. Busca la letra que sigue para desbloquear el canje.";
}

function spinSurprise() {
  const index = Math.floor(Math.random() * surprises.length);
  const text = surprises[index];
  const wheel = document.querySelector("#rouletteWheel");
  rouletteRotation += 720 + 360 + Math.floor(Math.random() * 360);
  wheel.classList.add("is-spinning");
  wheel.style.transform = `rotate(${rouletteRotation}deg)`;
  document.querySelector("#surpriseText").textContent = "Girando...";

  setTimeout(() => {
    wheel.classList.remove("is-spinning");
    document.querySelector("#surpriseText").textContent = text;
    document.querySelector("#surpriseWhatsapp").href = whatsAppURL(`Hola, ${text.toLowerCase()}`);
  }, 900);
}

function buildRedeemMessage(title) {
  return `Hola, quiero canjear este cupon: ${title}. Lo vi en la pagina de Vanesa y quiero hacerlo contigo.`;
}

function shuffleLetters(letters) {
  return letters
    .map((letter) => ({ letter, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.letter);
}

function openSettings() {
  document.querySelector("#settingWhatsapp").value = settings.whatsappNumber || "";
  document.querySelector("#settingSignature").value = settings.signature || "";
  document.querySelector("#settingMetAt").value = toDateTimeLocal(settings.metAt);
  settingsDialog.showModal();
}

function saveSettings() {
  settings = {
    ...settings,
    whatsappNumber: document.querySelector("#settingWhatsapp").value.replace(/[^\d]/g, ""),
    signature: document.querySelector("#settingSignature").value.trim() || DEFAULT_SETTINGS.signature,
    metAt: document.querySelector("#settingMetAt").value || DEFAULT_SETTINGS.metAt
  };
  saveJSON(STORAGE_KEYS.settings, settings);
  settingsDialog.close();
  updateWhatsAppLinks();
  renderPlans();
  renderLetters();
  renderCoupons();
  rollDateDice();
  openJarNote();
  renderSmileCounter();
  renderPuzzle();
  spinSurprise();
  startTimer();
}

function updateWhatsAppLinks() {
  const message = "Hola, vi la pagina y quiero canjear una cita contigo. Sorprendeme con una actividad bonita.";
  document.querySelector("#heroWhatsapp").href = whatsAppURL(message);
}

function startTimer() {
  clearInterval(timerID);
  tickTimer();
  timerID = setInterval(tickTimer, 1000);
}

function tickTimer() {
  const start = new Date(settings.metAt || DEFAULT_SETTINGS.metAt);
  const diff = Math.max(0, Date.now() - start.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.querySelector("#timeDays").textContent = days;
  document.querySelector("#timeHours").textContent = String(hours).padStart(2, "0");
  document.querySelector("#timeMinutes").textContent = String(minutes).padStart(2, "0");
  document.querySelector("#timeSeconds").textContent = String(seconds).padStart(2, "0");
}

function buildPlanMessage(plan) {
  return `Hola, quiero canjear el plan #${plan.id}: ${plan.title}. ${plan.detail}`;
}

function whatsAppURL(text) {
  const encoded = encodeURIComponent(text);
  const phone = settings.whatsappNumber ? settings.whatsappNumber.replace(/[^\d]/g, "") : "";
  return phone ? `https://wa.me/${phone}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
}

function sendIcon() {
  return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7Z"/></svg>`;
}

function checkIcon() {
  return `<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m20 6-11 11-5-5"/></svg>`;
}

function copyIcon() {
  return `<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
}

function formatDate(value) {
  if (!value) return "Fecha especial";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("es", { day: "2-digit", month: "long", year: "numeric" }).format(date);
}

function toDateTimeLocal(value) {
  if (!value) return DEFAULT_SETTINGS.metAt;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value.slice(0, 16);
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60000);
  return local.toISOString().slice(0, 16);
}

function resizeImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maxSide = 1200;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      image.onerror = reject;
      image.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHTML(value).replaceAll("`", "&#096;");
}
