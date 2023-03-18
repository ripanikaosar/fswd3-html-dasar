const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');
if (window.localStorage.getItem("todos") == undefined) {
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}
var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);

class item {
    constructor(name) {
        this.createItem(name);
    }
    createItem(name) {
        var boxItm = document.createElement('div');
        boxItm.classList.add('item');

        var masuk = document.createElement('input');
        masuk.type = "text";
        masuk.disabled = true;
        masuk.value = name;
        masuk.classList.add('item_input');

        var selesai = document.createElement('button');
        selesai.classList.add('selesai');
        selesai.innerHTML = "&#10004"
        selesai.addEventListener('click', function(){
            selesai.innerHTML = "Sudah Selesai";
        });
       

        var hapus = document.createElement('button');
        hapus.classList.add('remove');
        hapus.innerHTML = "&#x274C";
        hapus.addEventListener('click', () => this.hapus(boxItm, name));

        container.appendChild(boxItm);
        boxItm.appendChild(masuk);
        boxItm.appendChild(selesai);
        boxItm.appendChild(hapus);

    }

    selesai() {
        boxItm.parentNode.appendChild(boxItm);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }

    hapus(boxItm, name) {
        boxItm.parentNode.removeChild(boxItm);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', periksa);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        periksa();
    }
})
function periksa() {
    if (inputValue.value != "") {
        new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        inputValue.value = "";
    }
}
for (var v = 0; v < todos.length; v++) {
    new item(todos[v]);
}
new item("Belajar Javascript");


