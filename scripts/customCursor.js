document.addEventListener("DOMContentLoaded", function () {
    var cursor = document.querySelector(".custom-cursor");
    var timeoutId;
    var escala = 1;

    function escalarCursor() {
        escala += 60;
        cursor.style.transform = "scale(" + escala + ")";
    }

    function resetarCursor() {
        clearTimeout(timeoutId);
        cursor.style.transform = "scale(1)";
        escala = 1;
    }

    document.addEventListener("mousemove", function (e) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        resetarCursor();
        clearTimeout(timeoutId);
        timeoutId = setTimeout(escalarCursor, 3000);
    });

    var timeoutInicial = setTimeout(escalarCursor, 3000);

    document.addEventListener("mouseout", function () {
        resetarCursor();
    });
});