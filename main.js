let write = new Audio("sounds/write.mp3")
let erase = new Audio("sounds/erase.mp3")
let music = new Audio("sounds/music.mp3")
let click = new Audio("sounds/wood.mp3")
textarea1.addEventListener("keydown", function(e){
    console.log(e.keyCode);
    if(e.keyCode == 8){
        erase.currentTime = 0
        erase.play();
    }else{
        write.currentTime = 0
        write.play();
    }
    });
textarea2.addEventListener("keydown", function(e){
    console.log(e.keyCode);
    if(e.keyCode == 8){
        erase.currentTime = 0
        erase.play();
    }else{
        write.currentTime = 0
        write.play();
    }
    });

let engLower = [];
for (let i = 97; i <= 122; i++) engLower.push(String.fromCharCode(i));

let engUpper = [];
for (let i = 65; i <= 90; i++) engUpper.push(String.fromCharCode(i));

let ukr = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ" +
          "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя";

function shiftCharacters(ch, n, alphabet) {
    let index = alphabet.indexOf(ch);
    if (index === -1) return null;
    return alphabet[(index + n + alphabet.length) % alphabet.length];
}

function chypher(password, n) {
    let result = '';
    for (let ch of password) {
        let newCh =
            shiftCharacters(ch, n, engLower) ??
            shiftCharacters(ch, n, engUpper) ??
            shiftCharacters(ch, n, ukr);

        result += newCh ?? ch;
    }
    return result;
}

function dechypher(password, n) {
    let result = '';
    for (let ch of password) {
        let newCh =
            shiftCharacters(ch, -n, engLower) ??
            shiftCharacters(ch, -n, engUpper) ??
            shiftCharacters(ch, -n, ukr);

        result += newCh ?? ch;
    }
    return result;
}

chypherBtn.onclick = function(){
    click.currentTime = 0
    click.volume = 0.2
    click.play()
    textarea2.value = chypher(textarea1.value, parseInt(numImp.value))
}
dechypherBtn.onclick = function(){
    click.currentTime = 0
    click.volume = 0.2
    click.play()
    textarea2.value = dechypher(textarea1.value, parseInt(numImp.value))
}
clearBtn.onclick = function(){
    textarea2.value = ""
    textarea1.value = ""
    erase.currentTime = 0
    erase.play()
}
let musicOn = 0
caesar.onclick = function(){
if(musicOn == 0){
    musicOn++
    music.play()
    music.volume = 0.1
}else{
    musicOn--
    music.pause()
    music.currentTime = 0
}

}