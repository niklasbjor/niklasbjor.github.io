let dasAlTeLoate = new Audio("soundboard/resources/sounds/dasalteloate.mp3");
let oekNiWaar = new Audio("soundboard/resources/sounds/oekniwaar.mp3");
let eyKalmHeZalm = new Audio("soundboard/resources/sounds/eykalmhezalm.mp3");
let munt = new Audio("soundboard/resources/sounds/munt.mp3");
let ochMennekeToch = new Audio("soundboard/resources/sounds/ochmenneketoch.mp3");
let wegSfeer = new Audio("soundboard/resources/sounds/wegsfeer.mp3");
let gertruuuude = new Audio("soundboard/resources/sounds/gertruuuude.mp3");
let goeiendaag = new Audio("soundboard/resources/sounds/goeiendaag.mp3");
let kustNaMenKlte = new Audio("soundboard/resources/sounds/kustnamenkl.mp3");
let lapjepap = new Audio("soundboard/resources/sounds/lapjepap.mp3");
let lelijkIsNiks = new Audio("soundboard/resources/sounds/lelijkisniks.mp3");
let ochgodjemenas = new Audio("soundboard/resources/sounds/ochgodjemenas.mp3");

document.addEventListener('DOMContentLoaded', e => {
    document.getElementById('dasAlTeLoate').addEventListener("mousedown", () => dasAlTeLoate.play());
    document.getElementById('oekNiWaar').addEventListener("mousedown", () => oekNiWaar.play());
    document.getElementById('eyKalmHeZalm').addEventListener("mousedown", () => eyKalmHeZalm.play());
    document.getElementById('munt').addEventListener("mousedown", () => munt.play());
    document.getElementById('ochMennekeToch').addEventListener("mousedown", () => ochMennekeToch.play());
    document.getElementById('wegSfeer').addEventListener("mousedown", () => wegSfeer.play());
    document.getElementById('goeiendaag').addEventListener("mousedown", () => goeiendaag.play());
    document.getElementById('ochgodjemenas').addEventListener("mousedown", () => ochgodjemenas.play());
    document.getElementById('lapjepap').addEventListener("mousedown", () => lapjepap.play());
    document.getElementById('lelijkIsNiks').addEventListener("mousedown", () => lelijkIsNiks.play());
    document.getElementById('kustNaMenKlte').addEventListener("mousedown", () => kustNaMenKlte.play());
    document.getElementById('gertruuuude').addEventListener("mousedown", () => gertruuuude.play());
});
