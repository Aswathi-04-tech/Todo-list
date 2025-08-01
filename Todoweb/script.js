function login(){
    const username =document.getElementById("usernameInput").value.trim();
    const password =document.getElementById("password").value.trim();
   
    if(username===""|| password===""){
        console.log("please enter both username and password");
    }
    else{
         localStorage.setItem("username",username)
          localStorage.setItem("password",password)
    window.location= "landing.html"

    }
    
}
function logout(){
    localStorage.clear()
    window.location ="login.html"
}

function removeTodo(id) {
  const todoItem = document.getElementById(`todo-${id}`);
  if (todoItem) {
    todoItem.remove();
  }
}
function addTodo() {
      const input = document.getElementById("newTodo");
      const title = input.value.trim();
      if (title === "") {
        alert("Please enter a task!");
        return;
      }

   const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.id = `todo-${nextId}`;
      li.innerHTML = `
        ${title}
        <button class="btn btn-sm" onclick="removeTodo(${nextId})">
          <i class="fas fa-trash-alt" style="color: black; cursor: pointer;"></i>
        </button>
      `;
      todoList.appendChild(li);
      input.value = "";
      nextId++;
    }

     if(localStorage.getItem("username")){
    displayUser.innerHTML = localStorage.getItem("username")

}
