// Filter Buttons
const filterButtons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    // Update active state
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Show/Hide images based on category
    items.forEach(item => {
      item.style.display = (category === "all" || item.dataset.category === category) ? "block" : "none";
    });
  });
});

// Lightbox Functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryImgs = document.querySelectorAll(".item img");

galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  });
});

// Close Lightbox
document.querySelector(".close").addEventListener("click", () => {
  lightbox.style.display = "none";
  document.body.style.overflow = ''; // Re-enable scroll
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    document.body.style.overflow = '';
  }
});
