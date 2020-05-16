let soundTuples = [
    ['dasAlTeLoate', new Audio("soundboard/resources/sounds/dasalteloate.mp3")],
    ['oekNiWaar', new Audio("soundboard/resources/sounds/oekniwaar.mp3")],
    ['eyKalmHeZalm', new Audio("soundboard/resources/sounds/eykalmhezalm.mp3")],
    ['munt', new Audio("soundboard/resources/sounds/munt.mp3")],
    ['ochMennekeToch', new Audio("soundboard/resources/sounds/ochmenneketoch.mp3")],
    ['wegSfeer', new Audio("soundboard/resources/sounds/wegsfeer.mp3")],
    ['gertruuuude', new Audio("soundboard/resources/sounds/gertruuuude.mp3")],
    ['goeiendaag', new Audio("soundboard/resources/sounds/goeiendaag.mp3")],
    ['kustNaMenKlte', new Audio("soundboard/resources/sounds/kustnamenkl.mp3")],
    ['lapjepap', new Audio("soundboard/resources/sounds/lapjepap.mp3")],
    ['lelijkIsNiks', new Audio("soundboard/resources/sounds/lelijkisniks.mp3")],
    ['ochgodjemenas', new Audio("soundboard/resources/sounds/ochgodjemenas.mp3")]];

document.addEventListener('DOMContentLoaded', e => {
    soundTuples.forEach(st => document.getElementById(st[0]).addEventListener("mousedown", () => st[1].play()));
});
