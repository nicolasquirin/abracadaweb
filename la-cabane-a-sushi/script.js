// ---- Nav scroll state ----
const header = document.getElementById("siteHeader");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
document.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---- Scroll reveal ----
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => io.observe(el));

// ---- Menu data (source: la-cabane-a-sushi-ms.sumupstore.com & sumupbookings.com) ----
const dishes = [
  // Formules
  {
    cat: "menus",
    name: "Menu solo — 10 pièces",
    price: "11,50 €",
    img: "img_05RS52Z7FE8W29ZZWXBH1R7GKR",
  },
  {
    cat: "menus",
    name: "Menu Gourmand",
    price: "14,50 €",
    img: "img_1T8JRFYD1M9ZJTHMF06GF7K00G",
  },
  {
    cat: "menus",
    name: "Menu duo",
    price: "24,00 €",
    img: "img_141C5ZEXHZ8Z4RM8FG4D8R2F1B",
  },
  {
    cat: "menus",
    name: "Menu veggies",
    price: "11,50 €",
    img: "img_0KYAQ9TYGZ8QZAEY631CZRBB1Q",
  },
  {
    cat: "menus",
    name: "Menu Banh mi bœuf",
    price: "9,00 €",
    img: "img/banhmi_pain.png",
  },
  {
    cat: "menus",
    name: "Box festive — 32 pièces",
    price: "35,00 €",
    img: "img/32pcs.png",
  },
  {
    cat: "menus",
    name: "Poké Ball",
    price: "12,90 €",
    img: "img_2SJ4FK5DE79YBRS7SZW9JVV5CV",
  },

  {
    cat: "menus",
    name: "Poke veggies",
    price: "10,50 €",
    img: "img_4SE1CMWRJ59RMRTS4ZAM6KC6VM",
  },

  // Sushi & makis
  {
    cat: "sushi",
    name: "Sushi x4",
    price: "5,00 €",
    img: "img_0JVM86HCHF9EK9YKYX4VEDFQ6D",
  },
  {
    cat: "sushi",
    name: "Sushi x8",
    price: "9,50 €",
    img: "img_0JVM86HCHF9EK9YKYX4VEDFQ6D",
  },
  {
    cat: "sushi",
    name: "Maki avocat",
    price: "5,00 €",
    img: "img_3QACWWRHZM8ZSA7CPE0SCX7GT4",
  },
  {
    cat: "sushi",
    name: "Maki saumon x8",
    price: "6,00 €",
    img: "img_54K2QHSNXK88XAWS9769B2FWAD",
  },
  {
    cat: "sushi",
    name: "California x8",
    price: "9,50 €",
    img: "img_7S5CHJ0G7995GSRXM16VCRTST8",
  },
  {
    cat: "sushi",
    name: "California crispy Ebifry",
    price: "11,50 €",
    img: "img_0FV10H3J0J8AH8780TFRH328WV",
  },
  {
    cat: "sushi",
    name: "Sashimi x6",
    price: "10,50 €",
    img: "img_2EM3ZS3T0P8EXBCJBDFEQ2Z820",
  },
  {
    cat: "sushi",
    name: "Sashimi x12",
    price: "14,50 €",
    img: "img_6W89ZZKJV48FSRRD8E9DG7K4NV",
  },
  {
    cat: "sushi",
    name: "Tartare saumon",
    price: "12,90 €",
    img: "img_5D44CRMP6N9B385BCQ5X5JMXEE",
  },
  {
    cat: "sushi",
    name: "Chou saumon",
    price: "5,90 €",
    img: "img_2JDS7F46TG8DBTR0K6QTH3R1K3",
  },
  {
    cat: "sushi",
    name: "Chou",
    price: "2,00 €",
    img: "img_15MPM9XWR28V2VQ5AENHSF2EN2",
  },

  // Plats chauds
  {
    cat: "plats",
    name: "Bo bun",
    price: "12,90 €",
    img: "img_523TFTRJ8W9KPBY669F2MZ7SV0",
  },
  {
    cat: "plats",
    name: "Bœuf Lok Lak",
    price: "12,90 €",
    img: "img_3GA6HNXM5V895S6YGPH1J43W4M",
  },
  {
    cat: "plats",
    name: "Bœuf Lok Lak udons",
    price: "13,50 €",
    img: "img_5J3H9X672Q8MKSA8DP4DXETMC2",
  },
  {
    cat: "plats",
    name: "Bœuf sauté aux poivrons",
    price: "12,90 €",
    img: "img_6NB1SBJ3BG8XQR4G5QYNM9QD99",
  },
  {
    cat: "plats",
    name: "Sauté de saumon",
    price: "12,90 €",
    img: "img_0F2XP69VY291KAB6Y9X54V3TBX",
  },
  {
    cat: "plats",
    name: "Nouilles udon au bœuf",
    price: "13,00 €",
    img: "img_5J3H9X672Q8MKSA8DP4DXETMC2",
  },
  { cat: "plats", name: "Nouilles udon végétarien", price: "11,90 €" },

  // Fritures & entrées
  {
    cat: "fritures",
    name: "Corn dog",
    price: "4,90 €",
    img: "img/corndog.png",
  },
  {
    cat: "fritures",
    name: "Crevette tempura x3",
    price: "5,00 €",
    img: "img_2H4X3D9JS58KQBXGM9JYDZS2P9",
  },
  {
    cat: "fritures",
    name: "Gyozas poulet x4",
    price: "6,00 €",
    img: "img_572ADZ5PVR9W896YQZF1DYX3H7",
  },
  {
    cat: "fritures",
    name: "Gyozas veggies x4",
    price: "5,00 €",
    img: "img_5H05S0K9CF80HAJGJ9F3X7FNXW",
  },
  {
    cat: "fritures",
    name: "Nems porc x4",
    price: "5,00 €",
    img: "img_3BHY8HAJTW8WCS3DEAMSJ2PVE7",
  },
  {
    cat: "fritures",
    name: "Nems poulet x4",
    price: "5,00 €",
    img: "img_3BHY8HAJTW8WCS3DEAMSJ2PVE7",
  },
  {
    cat: "fritures",
    name: "Plateau fritures",
    price: "14,90 €",
    img: "img_5KQG4X4E6R8XQTXBWK44CS0H1D",
  },

  // Boissons
  {
    cat: "boissons",
    name: "Café",
    price: "1,50 €",
    img: "img_59NJTKK8XX965TM6K46STCKVA5",
  },
  {
    cat: "boissons",
    name: "Chocolat chaud",
    price: "2,00 €",
    img: "img_6YKQYN6FNC8F880M46MERGCPQR",
  },
  {
    cat: "boissons",
    name: "Coca-Cola 33cl",
    price: "2,00 €",
    img: "img_0THZM8BBN89PZVWSMDHZD216ND",
  },
  {
    cat: "boissons",
    name: "Coca-Cola zero",
    price: "2,00 €",
    img: "img_6FBRETMJ8V8D99B762X97HBG3A",
  },
  {
    cat: "boissons",
    name: "Oasis 33cl",
    price: "2,00 €",
    img: "img_2S0TMHFR1R8Y3RPMV8B8XA735H",
  },
  {
    cat: "boissons",
    name: "Orangina 33cl",
    price: "2,00 €",
    img: "img_2EBGAKHWMJ99TVSYM6FB9EVW8Y",
  },
  {
    cat: "boissons",
    name: "Ice Tea 33cl",
    price: "2,00 €",
    img: "img_1FBACGSWB18KY9JP9WHACM8EYH",
  },
  {
    cat: "boissons",
    name: "San Pellegrino 50cl",
    price: "2,00 €",
    img: "img_2NNFQDC29897HAMXA267D9HJ26",
  },
  {
    cat: "boissons",
    name: "Cristaline 50cl",
    price: "2,00 €",
    img: "img_5JBMVVECKZ8QDTX99P8YD8TTD4",
  },

  // Desserts
  {
    cat: "desserts",
    name: "Cœur coulant chocolat &amp; chantilly",
    price: "5,90 €",
  },
  { cat: "desserts", name: "Salade de fruits", price: "3,50 €" },

  // Suppléments
  {
    cat: "supplements",
    name: "Supplément avocat",
    price: "1,50 €",
    img: "img_4HF82BWGYW9GET7W2RBR43KHRC",
  },
  {
    cat: "supplements",
    name: "Supplément riz",
    price: "1,00 €",
    img: "img_56AQN2S3618CJAW8QFDAVT8MCR",
  },
  {
    cat: "supplements",
    name: "Supplément saumon",
    price: "2,00 €",
    img: "img_6606VZAT0H8QJA14RVA0XVS2YT",
  },
];

const glyphs = {
  menus: "膳",
  sushi: "寿",
  plats: "炒",
  fritures: "炸",
  boissons: "茶",
  desserts: "甜",
  supplements: "加",
};

const grid = document.getElementById("menuGrid");

function renderDishes(filter) {
  grid.innerHTML = "";
  const list = dishes.filter((d) => filter === "all" || d.cat === filter);
  list.forEach((d, i) => {
    const el = document.createElement("div");
    el.className = "dish";
    const thumb = d.img
      ? `<img src="${d.img.startsWith("img/") ? d.img : `https://images.sumup.com/${d.img}?w=600&q=75`}" alt="${d.name}" loading="lazy">`
      : `<span class="glyph">${glyphs[d.cat] || "和"}</span>`;
    el.innerHTML = `
        <div class="thumb">${thumb}</div>
        <div class="row">
          <span class="name">${d.name}</span>
          <span class="price">${d.price}</span>
        </div>`;
    grid.appendChild(el);
    requestAnimationFrame(() => {
      setTimeout(() => el.classList.add("show"), i * 35);
    });
  });
}
renderDishes("all");

document.getElementById("tabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  renderDishes(btn.dataset.cat);
});

// ---- Hours (source: sumupbookings.com) ----
const hours = [
  { day: "Lundi", times: ["Fermé"] },
  { day: "Mardi", times: ["11:30 – 14:00", "18:30 – 21:30"] },
  { day: "Mercredi", times: ["11:30 – 14:00", "18:30 – 21:30"] },
  { day: "Jeudi", times: ["11:30 – 14:00", "18:30 – 21:30"] },
  { day: "Vendredi", times: ["11:30 – 14:00", "18:30 – 21:30"] },
  { day: "Samedi", times: ["Fermé"] },
  { day: "Dimanche", times: ["Fermé"] },
];
const hoursList = document.getElementById("hoursList");
const todayIndex = (new Date().getDay() + 6) % 7; // Monday = 0
hours.forEach((h, i) => {
  const li = document.createElement("li");
  const closed = h.times[0] === "Fermé";
  li.className = (closed ? "closed " : "") + (i === todayIndex ? "today" : "");
  li.innerHTML = `<span>${h.day}</span><span class="times">${h.times.join("<br>")}</span>`;
  hoursList.appendChild(li);
});
document.addEventListener("DOMContentLoaded", function () {
  const text =
    "Derrière chaque création de La Cabane à Sushi MS, il y a une passion : vous faire découvrir une cuisine asiatique fraîche, généreuse et authentique.";

  const element = document.querySelector(".typewriter");

  let index = 0;

  setTimeout(() => {
    function writeText() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;

        setTimeout(writeText, 35);
      }
    }

    writeText();
  }, 2000);
});
const slides = document.querySelectorAll(".news-slider img");

let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");

  current++;

  if (current >= slides.length) {
    current = 0;
  }

  slides[current].classList.add("active");
}, 3000);
