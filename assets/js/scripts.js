const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    items.forEach(item => {
      item.style.display = category === "all" || item.dataset.category === category ? "block" : "none";
    });
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
// const lightboxCaption = document.getElementById("lightbox-caption");
const galleryImgs = document.querySelectorAll(".item img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentGroup = [];
let currentCaptions = [];
let currentIndex = 0;

// Open lightbox with group
galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    const group = img.dataset.images ? JSON.parse(img.dataset.images) : [img.src];
    const captions = img.dataset.captions ? JSON.parse(img.dataset.captions) : [img.alt];

    currentGroup = group;
    currentCaptions = captions;
    currentIndex = 0;

    showImage(currentIndex);
    lightbox.style.display = "flex";
  });
});

function showImage(index) {
  lightboxImg.src = currentGroup[index];
  lightboxCaption.textContent = currentCaptions[index] || "";
}

// Navigation
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
  showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentGroup.length;
  showImage(currentIndex);
});

// Close
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
