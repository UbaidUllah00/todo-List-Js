
function addTodo() {
    var todoList = document.getElementById("todolisting")
    // 1.get input
    var todoInput = document.getElementById("todoInput")
    if (todoInput.value.length < 3) {
        alert("Enter correct todo value")
        return
    }

    // console.log("todoInput", todoInput.value)

    // 2.create Li
    var li = document.createElement("li")
    li.style.marginTop = "10px"
    li.style.display = "flex"
    li.style.fontWeight = "bold"


    // 3.set li value
    li.innerHTML = todoInput.value

    // console.log("li",li)

    // create button 

    var editBtn = document.createElement("button")
    // editBtn.setAttribute("onclick", "editT(this)")
    editBtn.innerHTML = "Edit"
    editBtn.setAttribute("onclick","editTodo(this)")
    editBtn.style.color = "red"
    editBtn.style.background = "blue"
    editBtn.style.border = "none"
    // editBtn.style.justifyContent = "center"
    // editBtn.style.display = "flex"
    editBtn.style.width = "100px"
    editBtn.style.height = "40px"
    editBtn.style.marginLeft = "100px"
    editBtn.style.borderRadius = "50px"
    editBtn.style.fontWeight = "bold"


    
    
    var deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "DELETE"
    // deleteBtn.setAttribute("onClick", "delTodo(this)")
    deleteBtn.setAttribute("onclick" , "delTodo(this)")
    deleteBtn.style.width = "100px"
    deleteBtn.style.height = "40px"
    deleteBtn.style.marginLeft = "100px"
    deleteBtn.style.borderRadius = "50px"
    deleteBtn.style.fontWeight = "bold"
    deleteBtn.style.color = "red"
    deleteBtn.style.background = "blue"
    deleteBtn.style.border = "none"
    



    // apppending li these buttons

    li.appendChild(editBtn)
    li.appendChild(deleteBtn)


    // append krwaenge parent ma li ko
    todoList.appendChild(li);

    todoInput.value = "";

}

function deleteAll(){
    var todoList = document.getElementById("todolisting") 
    // console.log(todoList.innerHTML);
    todoList.innerHTML = "";
}

function delTodo(ele){
    // console.log("delTodo", ele.parentNode)

    ele.parentNode.remove()

}

function editTodo(ele){
    // console.log("edit" ,ele.previousSibling.nodevalue ="hello" )

    var editVal = prompt( "Enter value",ele.previousSibling.nodeValue)
    console.log(editVal);
    ele.previousSibling.nodeValue = editVal
}
