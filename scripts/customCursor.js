var fada = document.getElementById("extend");
        var cuz = document.getElementById("cu");

        var textoAdicional =
            [
                
                "design gráphico",
                "editorial",
                "direção criativa",
                "tipografia",
                "estratégia",
                "design de produto digital",
                "fotographia a.k.a photografia",
                "curadores de musika estranha",
                "sinalização & wayfinding",
                "identidade visual",
                "bland branding",
                "motion design",
                "arquitetos digitæs",
                "expografia",
                "código",
                "guidelines",
                "embalagem",
                "naming",
                "fazedor de imagem",
                "e qualquer coisa se você for maluco o suficiente",
                "tenta a sorte."

            ];
        var showtimesAsString = textoAdicional.join(', ');

        function changeContent() {
            cu.innerHTML = "<span>" + showtimesAsString + "</span>";
        }

        fada.addEventListener("click", changeContent);

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