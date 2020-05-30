let soundTuples = [
    ['dasAlTeLoate', new Audio("soundboard/resources/sounds/dasalteloate.mp3")],
    ['oekNiWaar', new Audio("soundboard/resources/sounds/oekniwaar.mp3")],
    ['eyKalmHeZalm', new Audio("soundboard/resources/sounds/eykalmhezalm.mp3")],
    ['munt', new Audio("soundboard/resources/sounds/munt.mp3")],
    ['ochMennekeToch', new Audio("soundboard/resources/sounds/ochmenneketoch.mp3")],
    ['wegSfeer', (new Audio("soundboard/resources/sounds/wegsfeer.mp3"))],
    ['gertruuuude', new Audio("soundboard/resources/sounds/gertruuuude.mp3")],
    ['goeiendaag', new Audio("soundboard/resources/sounds/goeiendaag.mp3")],
    ['kustNaMenKlte', new Audio("soundboard/resources/sounds/kustnamenkl.mp3")],
    ['lapjepap', new Audio("soundboard/resources/sounds/lapjepap.mp3")],
    ['lelijkIsNiks', new Audio("soundboard/resources/sounds/lelijkisniks.mp3")],
    ['ochgodjemenas', new Audio("soundboard/resources/sounds/ochgodjemenas.mp3")],
    ['pakawi', new Audio("soundboard/resources/sounds/pakawi.mp3")]];
const easterEggButton = 'gertruuuude';
let counter = 0;

document.addEventListener('DOMContentLoaded', () => {
    soundTuples.forEach(tuple => {
        document.getElementById(tuple[0]).addEventListener("click", () => handleClick(tuple));
        tuple[1].addEventListener('ended', () => handleEnded(tuple[0]))
    });
});

function handleClick(tuple) {
    if (counter >= 2 && tuple[0] === easterEggButton) {
        new Audio("soundboard/resources/sounds/wegsfeer.mp3").play();
        window.alert('Gelieve Gertrude niet te misbruiken');
        document.getElementById(easterEggButton).disabled = true;
    } else {
        playSound(tuple);
        document.getElementById(easterEggButton).disabled = false;
    }
}

async function playSound(tuple) {
    try {
        await tuple[1].play();
        document.getElementById(tuple[0]).classList.add('active-button');
    } catch (err) {
        document.getElementById(tuple[0]).classList.remove('active-button');
    }
}

function handleEnded(soundName) {
    if (soundName === easterEggButton) {
        counter++;
    } else {
        counter = 0;
    }

    document.getElementById(soundName).classList.remove('active-button');
}
