// Competências
var spanElement = document.getElementById("extend");
var competencias = document.getElementById("competencias");
var manifesto = document.getElementById("manifesto");

var textoAdicional = [
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
    competencias.innerHTML = "<span>" + showtimesAsString + "</span>";
}

spanElement.addEventListener("click", changeContent);

// Manifesto
var manifestoElement = document.getElementById("manifesto");

manifestoElement.addEventListener("click", changeManifesto);

function changeManifesto() {
    manifesto.innerHTML = "às vezes trabalhamos, às vezes não. tenta a sorte. enquanto criativos, estaremos dispostos a procurar um novo caminho, burocrático e apelativo, em prol de uma estética que seja abrasiva. gostamos de tomar as rédeas do projeto e entregar o que acreditamos, tomando uma abordagem quase artística, trazida de nosso repertório. um método de trabalho que mais se parece com construção física, mas trazida para o meio digital. para subir as estruturas, é preciso viga, tijolo e cimento. é preciso também deixar o tempo agir, para que as ideias fermentem. no fim, é interessante perceber, com o resultado, os fungos e a ferrugem surgirem. parece dramático, parece poético e parece absurdo. se você tiver coragem, tenta a sorte.";
}
