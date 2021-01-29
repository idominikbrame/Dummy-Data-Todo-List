// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (alert("fetch complete")))
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {
      for(let i = 0; i < arrayOfTodos.length - 180; i++) {
        var ol = document.getElementById("todo-list");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(arrayOfTodos[i].title));
        ol.appendChild(li); 
        if (arrayOfTodos[i].completed == false) {
            ol.appendChild(li).style.color = "red";
        } else if (arrayOfTodos[i].completed == true) {
            ol.appendChild(li).style.color = "green"
        }
      }       
  }