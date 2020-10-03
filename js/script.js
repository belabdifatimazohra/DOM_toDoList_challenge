// 1- En utilisant querySelector mettre dans une variable la classe du bouton Add et de l’input
let addBtn = document.querySelector('#btnAdd');
console.log(addBtn);
let selectedItem = document.querySelector('#addToDo');
console.log(selectedItem);

// Contorle the number of item to generate there id and can delete with specification id
var nbItem = 0;

// List of item , check if the the item already exist not add it
var listItem = [];

//2. En utilisant addEventListener ajouter un evenement au bouton add ayant en parametres la fonction addNewTodo(modifié)
addBtn.addEventListener("click", addNewTodo);
//3. Ecrire la fonction addNewTodo qui commence par selectionner la classe todo - input
function addNewTodo() {
    //console.log("clicked Add item: " + selectedItem.value);
    if (selectedItem.value.length == 0) {
        alert("Can't add an empty task!!");
    }
    if (listItem.includes(selectedItem.value.toLowerCase())) {
        alert("Task already exist");
    }
    else {
        listItem.push(selectedItem.value.toLowerCase());
        let todosContent = document.querySelector('.todos-content');
        nbItem += 1;

        // Create new div item
        const divItem = document.createElement('div');
        divItem.className = 'todo-item';
        divItem.id = "item" + nbItem;
        //console.log("item number " + divItem.id);


        // Create todo text new item
        const divTxt = document.createElement('div');
        divTxt.className = 'todo-text';
        divTxt.id = "itemTxt" + nbItem;
        divTxt.innerHTML = '<h3>' + selectedItem.value + '</h3>'

        divItem.appendChild(divTxt);

        // Create todo check for the new item
        const divCheck = document.createElement('div');
        divCheck.className = 'todo-check';
        divCheck.id = "itemCheck" + nbItem;
        divCheck.innerHTML = '<input type="checkbox">'

        divItem.appendChild(divCheck);

        // Create todo delete item
        const divDlt = document.createElement('div');
        divDlt.className = 'todo-delete';
        divDlt.id = "itemDlt" + nbItem;
        divDlt.innerHTML = '<h3>Delete</h3>'
        divDlt.addEventListener("click", deleteTodo)

        divItem.appendChild(divDlt);

        // Add to the  document the new item
        todosContent.appendChild(divItem);
    }
}

// 8. Ajouter un evenement pour delete afin de supprimer une task
function deleteTodo() {
    

    
}