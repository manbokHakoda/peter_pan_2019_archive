
"use strict";

/* =====================================
   1. ЗУРГИЙН АРХИВ
===================================== */

const galleryPhotos = [
  {
    src: "https://i.postimg.cc/qMLVbbmQ/image1.jpg",
    title: "Тайзны дурсамж 01"
  },
  {
    src: "https://i.postimg.cc/GhQw77MK/image2.jpg",
    title: "Тайзны дурсамж 02"
  },
  {
    src: "https://i.postimg.cc/Hs2DZZS6/image3.jpg",
    title: "Тайзны дурсамж 03"
  },
    {
    src: "https://i.postimg.cc/9Fp588x8/image4.jpg",
    title: "Тайзны дурсамж 01"
  },
  {
    src: "https://i.postimg.cc/9Fp588xs/image5.jpg",
    title: "Тайзны дурсамж 02"
  },
  {
    src: "https://i.postimg.cc/c4my999W/image6.jpg",
    title: "Тайзны дурсамж 03"
  },
    {
    src: "https://i.postimg.cc/TY9M777M/image7.jpg",
    title: "Тайзны дурсамж 01"
  },
  {
    src: "https://i.postimg.cc/MKD2PPPq/image8.jpg",
    title: "Тайзны дурсамж 02"
  },
  {
    src: "https://i.postimg.cc/Z55k182Z/image9.jpg",
    title: "Тайзны дурсамж 03"
  },
    {
    src: "https://i.postimg.cc/RZZrj7yM/image10.jpg",
    title: "Тайзны дурсамж 01"
  },
  {
    src: "https://i.postimg.cc/HkkGfwRY/image11.jpg",
    title: "Тайзны дурсамж 02"
  },
  {
    src: "https://i.postimg.cc/Sxx0w63Q/image12.jpg",
    title: "Тайзны дурсамж 03"
  },
    {
    src: "https://i.postimg.cc/YCCcJ6Zh/image13.jpg",
    title: "Тайзны дурсамж 01"
  },
  {
    src: "https://i.postimg.cc/FHHt2y81/image14.jpg",
    title: "Тайзны дурсамж 02"
  },
  {
    src: "https://i.postimg.cc/wjjKSXZ1/image15.jpg",
    title: "Тайзны дурсамж 03"
  },
    {
    src: "https://i.postimg.cc/y88qwmt3/image16.jpg",
    title: "Тайзны дурсамж 01"
  },
  {
    src: "https://i.postimg.cc/QddLRQwp/image17.jpg",
    title: "Тайзны дурсамж 02"
  },
  {
    src: "https://i.postimg.cc/8zz8qR9R/image18.jpg",
    title: "Тайзны дурсамж 03"
  },
    {
    src: "https://i.postimg.cc/qvvf9sSc/image19.jpg",
    title: "Тайзны дурсамж 01"
  },
  {
    src: "https://i.postimg.cc/YCDck4Bv/image20.jpg",
    title: "Тайзны дурсамж 02"
  },
  {
    src: "https://i.postimg.cc/bwVX8Gft/image21.jpg",
    title: "Тайзны дурсамж 03"
  },
    {
    src: "https://i.postimg.cc/Z5skZ9z3/image22.jpg",
    title: "Тайзны дурсамж 01"
  },
  {
    src: "https://i.postimg.cc/P5VGhLnY/image23.jpg",
    title: "Тайзны дурсамж 02"
  },
  {
    src: "https://i.postimg.cc/jS3VKWYy/image24.jpg",
    title: "Тайзны дурсамж 03"
  },
    {
    src: "https://i.postimg.cc/sgHFyBCT/image25.jpg",
    title: "Тайзны дурсамж 01"
  },
  {
    src: "https://i.postimg.cc/Mp3kxcJs/image26.jpg",
    title: "Тайзны дурсамж 02"
  },
  {
    src: "https://i.postimg.cc/4x2CZKR2/image27.jpg",
    title: "Тайзны дурсамж 03"
  },
    {
    src: "https://i.postimg.cc/nhS8Zsfw/image28.jpg",
    title: "Тайзны дурсамж 01"
  },
  {
    src: "https://i.postimg.cc/y8pqBJC5/image29.jpg",
    title: "Тайзны дурсамж 02"
  },
  {
    src: "https://i.postimg.cc/sgHFyBCq/image30.jpg",
    title: "Тайзны дурсамж 03"
  }
];

/* =====================================
   2. ЖҮЖИГЧДИЙН МЭДЭЭЛЭЛ
===================================== */

const actors = [
  {
    id: 1,
    name: "Б.Амарбаясгалан",
    role: "Ахмад Хүүк, Старки",
    image: "https://i.postimg.cc/KjzC3xbG/amarbayasgalan.jpg",
    category: "Далайн дээрэмчин"
  },
  {
    id: 2,
    name: "Б.Анхтуяа",
    role: "Майкл, Зоригт охид",
    image: "https://i.postimg.cc/zvB4H8Nv/ankhtuya.jpg",
    category: "Жүжигчин"
  },
  {
    id: 3,
    name: "Б.Ариунсувд",
    role: "Вэнди",
    image: "https://i.postimg.cc/XqJtB4Wp/ariunsuvd.jpg",
    category: "Гол дүр"
  },
  {
    id: 4,
    name: "Б.Батдэмбэрэл",
    role: "Ахмад Хүүк",
    image: "https://i.postimg.cc/fyL1SDsL/batdemberel.jpg",
    category: "Далайн дээрэмчин"
  },
  {
    id: 5,
    name: "М.Энх-Үйлс",
    role: "Лиза, асрагч",
    image: "https://i.postimg.cc/1Xj2p2Rs/enkh-uyls.jpg",
    category: "Жүжигчин"
  },
  {
    id: 6,
    name: "М.Эрдэмтөгс",
    role: "Ноён Дарлинг",
    image: "https://i.postimg.cc/RhDycyCM/erdemtugs.jpg",
    category: "Дарлингийн гэр бүл"
  },
  {
    id: 7,
    name: "П.Ихэрбаяр",
    role: "Сми",
    image: "https://i.postimg.cc/kGpzxzMM/ikherbayar.jpg",
    category: "Далайн дээрэмчин"
  },
  {
    id: 8,
    name: "Хакода Манбок",
    role: "Алдагдсан хөвгүүд",
    image: "https://i.postimg.cc/RhDycyCv/hakoda-manbok.jpg",
    category: "Алдагдсан хөвгүүд"
  },
  {
    id: 9,
    name: "Ц.Мичидмаа",
    role: "Жон, далайн дээрэмчин",
    image: "https://i.postimg.cc/0jBFpF5k/michidmaa.jpg",
    category: "Жүжигчин"
  },
  {
    id: 10,
    name: "С.Мөнхгэрэл",
    role: "Питер Пэн",
    image: "https://i.postimg.cc/Y0sZ1Z29/munkhgerel.jpg",
    category: "Гол дүр"
  },
  {
    id: 11,
    name: "Г.Номулин",
    role: "Жүкэс",
    image: "https://i.postimg.cc/ZnM2r2Y0/nomulin.jpg",
    category: "Далайн дээрэмчин"
  },
  {
    id: 12,
    name: "Д.Нямтулга",
    role: "Жон, Дарлингийн хүү",
    image: "https://i.postimg.cc/j2Fmzmq2/nyamtulga.jpg",
    category: "Дарлингийн гэр бүл"
  },
  {
    id: 13,
    name: "Б.Тэргэл",
    role: "Слайтли",
    image: "https://i.postimg.cc/zvc6n6DR/tergel.jpg",
    category: "Алдагдсан хөвгүүд"
  },
  {
    id: 14,
    name: "М.Өлзийхишиг",
    role: "Кэкко, далайн дээрэмчин",
    image: "https://i.postimg.cc/ZnM2r2Yr/ulziikhishig.jpg",
    category: "Жүжигчин"
  },
  {
    id: 15,
    name: "Э.Золзаяа",
    role: "Нүүдлэр, далайн дээрэмчин",
    image: "https://i.postimg.cc/3NcVgVrj/zolzaya.jpg",
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
