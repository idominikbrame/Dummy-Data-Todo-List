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
    .then( (json) => arrayOfTodos = json);
  }

  const logTodos = () => {
    console.log(arrayOfTodos);
  }
  const currentlyStored = [];

  const populateTodos = () => {
    reset()
    let inputNumber = document.getElementById("idnumber").value;
      for(let i = 0; i < arrayOfTodos.length; i++) {
        if(arrayOfTodos[i].userId == inputNumber) {
          currentlyStored.push(arrayOfTodos[i])
          let ol = document.getElementById("todo-list");
          let li = document.createElement("li");
          li.appendChild(document.createTextNode(arrayOfTodos[i].title));
          ol.appendChild(li);
        } 
      }       
  }
  console.log(currentlyStored)


  const showInputValue = () => {
    let inputNumber = document.getElementById("idnumber").value;
    console.log(inputNumber);
  }

  const reset = () => {
    document.getElementById("todo-list").textContent = '';
  }

  const completed = () => {
    reset()
   for (let i = 0; i < currentlyStored.length; i++) {
     if (currentlyStored[i].completed == true) {
      let ol = document.getElementById("todo-list");
          let li = document.createElement("li");
          li.appendChild(document.createTextNode(arrayOfTodos[i].title));
          ol.appendChild(li);
     }
   }
  }

  const notCompleted = () => {
    reset()
     for (let i = 0; i < currentlyStored.length; i++) {
      if (currentlyStored[i].completed == false) {
        let ol = document.getElementById("todo-list");
          let li = document.createElement("li");
          li.appendChild(document.createTextNode(arrayOfTodos[i].title));
          ol.appendChild(li);
     }
   }
  }