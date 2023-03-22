const baseUrl = "https://crudcrud.com/api/";
const apiKey = "246ca2a3ee38432aa1147ae0f8158982";
const url = baseUrl + apiKey + "/todos";


//letodos perantara menyimpan objek nya

let todos = {}
const STORAGE_TODO = "STORAGE_TODO";
const todoBox = document.getElementById('todo');


function add() {

    //ambil nilai dari text 
    let newText = document.getElementById('new_text');
    console.log(newText.value);

     //tambahkan list baru ke dalam ul
    let newTodo = "<li><span>&#10004</span>"+
    "<span onclick ='toggle(this)'>"+ newText.value +"</span>" + 
    "<span onclick ='removeItem(this)'>&#x274C </span>" +
    "</li>"

    todoBox.insertAdjacentHTML('afterbegin', newTodo)

    var text = newText.value
    const todo ={
        title : text,
        status : false,
    }

    //kosongkan field lagi
    newText.value = ""

    

    fetch(url, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    })
    .then((response) => response.json())
    .then((todo) => {
        createList(text, status=false);
    })

}

function createList(text, status=false){
     //tambahkan listbbaru ke dalam ul
    let isDone = (status) ? 'done' : ""

     let newTodo = `<li><span>&#10004</span> 
     <span class = '${isDone}' onclick ='toggle(this)'> ${text}</span> 
     <span onclick ='removeItem(this)'> &#x274C </span> 
     </li>`

     todoBox.insertAdjacentHTML('afterbegin', newTodo)
}

function toggle(element) {
    let status = element.classList.toggle('sudah');
    const id = this.dataset._id;
    const index = todos.findIndex((todo) => todo._id ==id);
    const todo = todos[index];
    var text = newText.value

    fetch(url + "/" +id,{
        method :"PUT",
        headers : {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title : text,
            status : false,
        })
    })
        .then((response)=> response.json())
        .then((todo)=>{
            todos[index] = todo;
        });
    
    
}

function removeItem(element) {
    element.parentElement.remove();
    const id = this.dataset._id;

    fetch(url + "/" +id,{
        method : "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({

        })
    })
    .then((response)=> response.json());
}

function loadTodos (){
    let text = newText.value
    fetch(url)
    .then((response) => {
        todoBox = response.json();
        todoBox = forEach((text, status = false) => {
            createList(text, status = false);
        })
    })
}