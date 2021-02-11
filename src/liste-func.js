let vokabelListdeuEng = getLeftListFromLocalStorage();
let vokabelListEng = getRightListFromLocalStorage();

updateRightList();
updateLeftList();
loadLolli();


function getLeftListFromLocalStorage() {
    let items = localStorage.getItem('ListdeuEng');

    if (items == null || items == '') {
        items = [];
    } else {
        items = items.split(',');
    }
    return items;
}
function getRightListFromLocalStorage() {
    let items = localStorage.getItem('ListEng');

    if (items == null || items == '') {
        items = [];
    } else {
        items = items.split(',');
    }
    return items;
}
function vokabelToDB() {
    let vokabelLeft = document.getElementById('input-left').value;
    let vokabelRight = document.getElementById('input-right').value;

    if (vokabelLeft != null) {
        vokabelListdeuEng.push(vokabelLeft);
        localStorage.setItem('ListdeuEng', vokabelListdeuEng);
    }
    if (vokabelRight != null) {
        vokabelListEng.push(vokabelRight);
        localStorage.setItem('ListEng', vokabelListEng)
    };
    document.getElementById('input-left').value = "";
    document.getElementById('input-right').value = "";
}
function updateLeftList() {
    document.getElementById('ListdeuEng').innerHTML = '';

    for (let index = 0; index < vokabelListdeuEng.length; index += 1) {
        document.getElementById('ListdeuEng').innerHTML += '<li>' + vokabelListdeuEng[index] +
            '<button onclick = "removeItem(' + index + '); updateLeftList(); updateRightList();" class="edit">x</button></li>';

    }
}
function updateRightList() {
    document.getElementById('ListEng').innerHTML = '';

    for (let index = 0; index < vokabelListEng.length; index += 1) {
        document.getElementById('ListEng').innerHTML += '<li>' + vokabelListEng[index] + '</li>';

    }
}
function removeItem(itemIndex) {
    vokabelListdeuEng.splice(itemIndex, 1);
    vokabelListEng.splice(itemIndex, 1);
    localStorage.setItem('ListdeuEng', vokabelListdeuEng);
    localStorage.setItem('ListEng', vokabelListEng);
}