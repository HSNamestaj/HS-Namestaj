document.addEventListener("DOMContentLoaded", function() {
    // dugme Saznaj više
    var btn = document.getElementById("btn-saznaj");
    var detalji = document.getElementById("detalji");

    btn.addEventListener("click", function() {
        if (detalji.style.display === "none" || detalji.style.display === "") {
            detalji.style.display = "block";
            btn.textContent = "Sakrij";
        } else {
            detalji.style.display = "none";
            btn.textContent = "Saznaj više";
        }
    });

    // dugme Proizvodi
    const btnProizvodi = document.getElementById("btn-proizvodi");
    const sekcijaProizvodi = document.getElementById("sekcija-proizvodi");

    btnProizvodi.addEventListener("click", () => {
        sekcijaProizvodi.style.display = sekcijaProizvodi.style.display === "block" ? "none" : "block";
    });

    // Lightbox kod ostaje isti
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close');

    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox) lightbox.style.display = 'none';
    });
});

function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}
