let nevem ="Daniel";
let azEnKorom = 24;
console.log("The Javascript has been loaded too.");

// ez egy egysoros komment
/*
tobb soros
kommentet irni
*/

// >, <, >=, <=, ==, ===,
if (azEnKorom >= 21) {
    console.log("Amerikaban is eleg idos vagyok az alkoholhoz.") 
}   else if (azEnKorom >= 18) {
    console.log("Mar eleg idos vagyok, hogy igyak Europaban.")
}   else {
    console.log("Meg nem lephetsz dohanyboltba.")
}

let masikKor = 18;

if (masikKor > 18) {
    console.log("A masik is eleg idos ahhoz, hogy igyon egy sort.")
    }

console.log("Ez itt a vege.")

// jQuerys part//

console.log($("h1").text())
$("h1").text("Ezt Javascript-bol valtoztattuk meg!")

console.log($(".yellow").css("background-color"))
$(".yellow").css("background-color")
$("li").css("background-color")
$("p").html("alma, ami <strong>nagyon</strong> fontos")
$("li:last-of-type").remove()
$("li").toggleClass("yellow")

function adjHozzaEgyLit() {
    $("ul").append("<li>ujabb elem</li>")
}

//$("button").click(adjHozzaEgyLit)
$("#hozzaado").click(function() {
    $("ul").append("<li>ujabb elem</li>")
})

$("#torlo").click(() => {
    $("li:last-of-type").remove()
})

for (let i = 0; i < 100; i = i + 1) {
    $("ul").append(`<li>${i+1}.Nem csalok tobbet a vizsgan.</li>`)
}

let szinek = ["orange", "magenta", "brown", "green", "blue", "teal"]


function egySzinDoboz(szin) {
    $(".kontener").append('<div class="doboz"></div>')
    $(".kontener div:last-of-type").css("background-color", szin)
}

egySzinDoboz("lime")
egySzinDoboz("pink")

szinek.forEach(function (szin) {
    $(".kontener").append('<div class="doboz"></div>')
    $(".kontener div:last-of-type").css("background-color", szin)
})