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
const galleryImgs = document.querySelectorAll(".item img");

galleryImgs.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

document.querySelector(".close").addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
<script>
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
</script>
