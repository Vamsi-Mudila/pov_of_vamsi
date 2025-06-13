// Filtering functionality
const buttons = document.querySelectorAll(".category-buttons button");
const images = document.querySelectorAll(".image-wrapper");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    images.forEach(image => {
      image.style.display =
        category === "all" || image.dataset.category === category
          ? "block"
          : "none";
    });

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".image-wrapper img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

document.querySelector(".lightbox .close").addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
