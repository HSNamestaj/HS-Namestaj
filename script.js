document.addEventListener("DOMContentLoaded", function() {
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
});
