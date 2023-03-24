function clearPhone (){
    if (document.getElementById('phoneField').value == 'example: 212-123-1234'){
        document.getElementById('phoneField').value = '';
}
}
function resetPhone (){
    if (document.getElementById('phoneField').value == ''){
        document.getElementById('phoneField').value = 'example: 212-123-1234';
}
}
function clearName() {
    if (document.getElementById('nameField').value == 'First and Last Name'){
        document.getElementById('nameField').value = '';
    }
}
function resetName() {
    if (document.getElementById('nameField').value == ''){
        document.getElementById('nameField').value = 'First and Last Name';
    }
}
function clearNick() {
    if (document.getElementById('nickField').value == 'Nickname'){
        document.getElementById('nickField').value = '';
    }
}
function resetNick() {
    if (document.getElementById('nickField').value == ''){
        document.getElementById('nickField').value = 'Nickname';
    }
}