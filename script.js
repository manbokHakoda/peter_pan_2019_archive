
"use strict";

/* =====================================
   1. ЗУРГИЙН АРХИВ
===================================== */

const galleryPhotos = Array.from({ length: 30 }, (_, i) => ({
  src: `photos/image${i + 1}.jpg`,
  title: `Тайзны дурсамж ${String(i + 1).padStart(2, "0")}`
}));

/* =====================================
   2. ЖҮЖИГЧДИЙН МЭДЭЭЛЭЛ
===================================== */

const actors = [
  {
    id: 1,
    name: "Б.Амарбаясгалан",
    role: "Ахмад Хүүк, Старки",
    image: "images/amarbayasgalan.jpg",
    category: "Далайн дээрэмчин"
  },
  {
    id: 2,
    name: "Б.Анхтуяа",
    role: "Майкл, Зоригт охид",
    image: "images/ankhtuya.jpg",
    category: "Жүжигчин"
  },
  {
    id: 3,
    name: "Б.Ариунсувд",
    role: "Вэнди",
    image: "images/ariunsuvd.jpg",
    category: "Гол дүр"
  },
  {
    id: 4,
    name: "Б.Батдэмбэрэл",
    role: "Ахмад Хүүк",
    image: "images/batdemberel.jpg",
    category: "Далайн дээрэмчин"
  },
  {
    id: 5,
    name: "М.Энх-Үйлс",
    role: "Лиза, асрагч",
    image: "images/enkh-uyls.jpg",
    category: "Жүжигчин"
  },
  {
    id: 6,
    name: "М.Эрдэмтөгс",
    role: "Ноён Дарлинг",
    image: "images/erdemtugs.jpg",
    category: "Дарлингийн гэр бүл"
  },
  {
    id: 7,
    name: "П.Ихэрбаяр",
    role: "Сми",
    image: "images/ikherbayar.jpg",
    category: "Далайн дээрэмчин"
  },
  {
    id: 8,
    name: "Хакода Манбок",
    role: "Алдагдсан хөвгүүд",
    image: "images/hakoda-manbok.jpg",
    category: "Алдагдсан хөвгүүд"
  },
  {
    id: 9,
    name: "Ц.Мичидмаа",
    role: "Жон, далайн дээрэмчин",
    image: "images/michidmaa.jpg",
    category: "Жүжигчин"
  },
  {
    id: 10,
    name: "С.Мөнхгэрэл",
    role: "Питер Пэн",
    image: "images/munkhgerel.jpg",
    category: "Гол дүр"
  },
  {
    id: 11,
    name: "Г.Номулин",
    role: "Жүкэс",
    image: "images/nomulin.jpg",
    category: "Далайн дээрэмчин"
  },
  {
    id: 12,
    name: "Д.Нямтулга",
    role: "Жон, Дарлингийн хүү",
    image: "images/nyamtulga.jpg",
    category: "Дарлингийн гэр бүл"
  },
  {
    id: 13,
    name: "Б.Тэргэл",
    role: "Слайтли",
    image: "images/tergel.jpg",
    category: "Алдагдсан хөвгүүд"
  },
  {
    id: 14,
    name: "М.Өлзийхишиг",
    role: "Кэкко, далайн дээрэмчин",
    image: "images/ulziikhishig.jpg",
    category: "Жүжигчин"
  },
  {
    id: 15,
    name: "Э.Золзаяа",
    role: "Нүүдлэр, далайн дээрэмчин",
    image: "images/zolzaya.jpg",
    category: "Жүжигчин"
  }
];

/* =====================================
   3. ПРОФАЙЛЫН ТАНИЛЦУУЛГА
===================================== */

const profileBios = {
  1: "2019 оны архивт Ахмад Хүүк болон Старкийн дүртэй холбогдон бүртгэгдсэн.",
  2: "Архивын бүртгэлд Майкл болон Зоригт охидын дүртэй холбогдон тэмдэглэгдсэн.",
  3: "Вэндигийн дүрээр архивт тэмдэглэгдсэн.",
  4: "Ахмад Хүүкийн дүрээр архивт тэмдэглэгдсэн.",
  5: "Лиза болон асрагчийн дүрээр архивт тэмдэглэгдсэн.",
  6: "Ноён Дарлингийн дүрээр архивт тэмдэглэгдсэн.",
  7: "Смигийн дүрээр архивт тэмдэглэгдсэн.",
  8: "2019 оны жүжигт Алдагдсан хөвгүүдийн дүрийн багт оролцсон дурсамж.",
  9: "Жон болон далайн дээрэмчний дүрээр архивт тэмдэглэгдсэн.",
  10: "Питер Пэний дүрээр архивт тэмдэглэгдсэн.",
  11: "Жүкэсийн дүрээр архивт тэмдэглэгдсэн.",
  12: "Жон буюу Дарлингийн хүүгийн дүрээр архивт тэмдэглэгдсэн.",
  13: "Слайтлигийн дүрээр архивт тэмдэглэгдсэн.",
  14: "Кэкко болон далайн дээрэмчний дүрээр архивт тэмдэглэгдсэн.",
  15: "Нүүдлэр болон далайн дээрэмчний дүрээр архивт тэмдэглэгдсэн."
};

/* =====================================
   4. HTML ЭЛЕМЕНТҮҮД
===================================== */

const $ = selector => document.querySelector(selector);

const galleryGrid = $("#galleryGrid");
const actorsGrid = $("#actorsGrid");
const actorSearch = $("#actorSearch");
const actorCategory = $("#actorCategory");
const actorCount = $("#actorCount");

const lightbox = $("#lightbox");
const lightboxImage = $("#lightboxImage");
const lightboxCaption = $("#lightboxCaption");

const profileModal = $("#profileModal");
const profileImage = $("#profileImage");
const profileFallback = $("#profileFallback");

let currentPhoto = 0;
let previousFocus = null;
let previousModal = null;

/* =====================================
   5. ЗУРАГ ОЛДОХГҮЙ ҮЕД
===================================== */

function makeFallback(label) {
  const element = document.createElement("div");
  element.className = "image-fallback";
  element.textContent = label;
  return element;
}

function createSafeImage(src, alt, fallbackLabel) {
  const img = document.createElement("img");

  img.src = src;
  img.alt = alt;
  img.loading = "lazy";

  img.onerror = () => {
    img.onerror = null;
    img.replaceWith(makeFallback(fallbackLabel));
  };

  return img;
}

/* =====================================
   6. ГАЛЕРЕЙ ҮҮСГЭХ
===================================== */

function renderGallery() {
  if (!galleryGrid) return;

  galleryGrid.replaceChildren();

  galleryPhotos.forEach((photo, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "gallery-item";
    button.setAttribute("aria-label", photo.title);

    button.appendChild(
      createSafeImage(photo.src, photo.title, "ПИТЕР ПЭН · 2019")
    );

    const caption = document.createElement("span");
    caption.className = "gallery-caption";
    caption.textContent = photo.title;

    button.appendChild(caption);

    button.addEventListener("click", () => {
      openLightbox(index);
    });

    galleryGrid.appendChild(button);
  });
}

/* =====================================
   7. ГАЛЕРЕЙН ЗУРАГ ТОМРУУЛАХ
===================================== */

function openLightbox(index) {
  if (!lightbox) return;

  previousFocus = document.activeElement;
  previousModal = null;

  currentPhoto = index;
  showLightboxPhoto();

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  $("#lightboxClose")?.focus();
}

function showLightboxPhoto() {
  const photo = galleryPhotos[currentPhoto];

  if (!photo || !lightboxImage) return;

  lightboxImage.onerror = () => {
    lightboxImage.onerror = null;
    lightboxImage.removeAttribute("src");
    lightboxCaption.textContent =
      photo.title + " — зураг олдсонгүй. Файлын замыг шалгана уу.";
  };

  lightboxImage.src = photo.src;
  lightboxImage.alt = photo.title;

  lightboxCaption.textContent =
    `${photo.title} · ${currentPhoto + 1} / ${galleryPhotos.length}`;
}

function movePhoto(direction) {
  currentPhoto =
    (currentPhoto + direction + galleryPhotos.length) %
    galleryPhotos.length;

  showLightboxPhoto();
}

function closeLightbox() {
  if (!lightbox?.classList.contains("open")) return;

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  if (previousFocus && typeof previousFocus.focus === "function") {
    previousFocus.focus();
  }

  previousFocus = null;
}

/* =====================================
   8. ЖҮЖИГЧДИЙН ХАЙЛТ, АНГИЛАЛ
===================================== */

function renderActors() {
  if (!actorsGrid) return;

  const query = (actorSearch?.value || "")
    .trim()
    .toLocaleLowerCase("mn");

  const category = actorCategory?.value || "all";

  const filtered = actors.filter(actor => {
    const searchable =
      `${actor.name} ${actor.role} ${actor.category}`
        .toLocaleLowerCase("mn");

    const matchesText = searchable.includes(query);

    const matchesCategory =
      category === "all" || actor.category === category;

    return matchesText && matchesCategory;
  });

  actorsGrid.replaceChildren();

  if (actorCount) {
    actorCount.textContent =
      `${filtered.length} / ${actors.length} жүжигчин`;
  }

  if (filtered.length === 0) {
    const empty = document.createElement("p");

    empty.className = "small";
    empty.textContent = "Тохирох жүжигчин олдсонгүй.";

    actorsGrid.appendChild(empty);
    return;
  }

  filtered.forEach(actor => {
    const card = document.createElement("button");

    card.type = "button";
    card.className = "actor-card";
    card.setAttribute(
      "aria-label",
      `${actor.name} — дэлгэрэнгүй профайл нээх`
    );

    const avatar = document.createElement("div");
    avatar.className = "actor-avatar";

    avatar.appendChild(
      createSafeImage(
        actor.image,
        actor.name,
        actor.name.slice(0, 1)
      )
    );

    const details = document.createElement("div");

    const name = document.createElement("h3");
    name.textContent = actor.name;

    const role = document.createElement("p");
    role.textContent = "Дүр: " + actor.role;

    const cat = document.createElement("p");
    cat.className = "actor-category";
    cat.textContent = actor.category;

    const more = document.createElement("p");
    more.className = "actor-category";
    more.textContent = "Дэлгэрэнгүй үзэх ↗";

    details.append(name, role, cat, more);
    card.append(avatar, details);

    card.addEventListener("click", () => {
      openActorProfile(actor);
    });

    actorsGrid.appendChild(card);
  });
}

/* =====================================
   9. ЖҮЖИГЧНИЙ ПРОФАЙЛ НЭЭХ
===================================== */

function openActorProfile(actor) {
  if (!profileModal) return;

  previousFocus = document.activeElement;
  previousModal = null;

  $("#profileName").textContent = actor.name;
  $("#profileRole").textContent = "Дүр: " + actor.role;
  $("#profileCategory").textContent = actor.category;

  $("#profileBio").textContent =
    actor.bio ||
    profileBios[actor.id] ||
    "Одоогоор нэмэлт мэдээлэл байхгүй.";

  profileImage.onerror = () => {
    profileImage.onerror = null;
    profileImage.style.display = "none";

    profileFallback.textContent = actor.name.slice(0, 1);
    profileFallback.classList.add("show");
  };

  profileFallback.classList.remove("show");
  profileImage.style.display = "block";

  profileImage.src = actor.image;
  profileImage.alt = actor.name;

  profileModal.classList.add("open");
  profileModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  $("#profileClose")?.focus();
}

/* =====================================
   10. ПРОФАЙЛ ХААХ
===================================== */

function closeActorProfile() {
  if (!profileModal?.classList.contains("open")) return;

  profileModal.classList.remove("open");
  profileModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  if (previousFocus && typeof previousFocus.focus === "function") {
    previousFocus.focus();
  }

  previousFocus = null;
}

/* =====================================
   11. ГАР УТАСНЫ ЦЭС
===================================== */

const menuToggle = $("#menuToggle");
const nav = $("#nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Цэс хаах" : "Цэс нээх"
  );
});

nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

/* =====================================
   12. ҮЙЛДЛИЙН ТОВЧНУУД
===================================== */

actorSearch?.addEventListener("input", renderActors);

actorCategory?.addEventListener("change", renderActors);

$("#lightboxClose")?.addEventListener("click", closeLightbox);

$("#lightboxPrev")?.addEventListener("click", () => {
  movePhoto(-1);
});

$("#lightboxNext")?.addEventListener("click", () => {
  movePhoto(1);
});

lightbox?.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});

$("#profileClose")?.addEventListener("click", closeActorProfile);

profileModal?.addEventListener("click", event => {
  if (event.target === profileModal) {
    closeActorProfile();
  }
});

/* =====================================
   13. ESCAPE, СУМАН ТОВЧНУУД
===================================== */

document.addEventListener("keydown", event => {
  if (profileModal?.classList.contains("open")) {
    if (event.key === "Escape") {
      closeActorProfile();
    }
    return;
  }

  if (lightbox?.classList.contains("open")) {
    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      movePhoto(-1);
    }

    if (event.key === "ArrowRight") {
      movePhoto(1);
    }
  }
});

/* =====================================
   14. ОНЫГ АВТОМАТААР ХАРУУЛАХ
===================================== */

const year = $("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

/* =====================================
   15. САЙТЫГ ЭХЛҮҮЛЭХ
===================================== */

renderGallery();
renderActors();
