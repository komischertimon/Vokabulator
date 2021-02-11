let Name = "";


function setName() {
        document.getElementById('NameNav').innerHTML = Name;
        document.getElementById('NameLernen').innerHTML = Name;
}
function setPlaceholder() {
    document.getElementById('input-right').placeholder = Name;
    console.log("in meinem Benz")
}
function changeName(place) {
    Name = prompt('Welche Sprache willst du lernen?');
    saveName();
    setName();
    if (place) {
        setPlaceholder();
    }
}
function saveName() {
    localStorage.setItem('Name', Name)
}
function loadName() {
    Name = localStorage.getItem('Name');
    if(!Name) {
        Name = "Englisch"
    }
    setName();
}