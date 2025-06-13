const buttons = document.querySelectorAll(".category-buttons button");
const images = document.querySelectorAll(".image-wrapper");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    images.forEach(image => {
      image.style.display = (category === "all" || image.dataset.category === category) ? "block" : "none";
    });
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
  });
});
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
document.querySelectorAll(".image-wrapper img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    document.body.classList.add("lightbox-open");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});
document.querySelector(".close").addEventListener("click", () => {
  lightbox.style.display = "none";
  document.body.classList.remove("lightbox-open");
});
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    document.body.classList.remove("lightbox-open");
  }
});
