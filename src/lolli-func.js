let lolliCount = 0;

try {
    lolliCount = localStorage.getItem('lolli-count');
}catch(err){
}

function addLolli() {
    lolliCount ++;
    saveLolli();
}
function removeLolli() {
    lolliCount --;
    saveLolli();
}

function saveLolli() {
    localStorage.setItem('lolli-count', lolliCount);
}
function loadLolli() {
    try {
        lolliCount = localStorage.getItem('lolli-count');
    }catch(err){
    }
    document.getElementById('lolli-count').innerHTML = lolliCount;
}