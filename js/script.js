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
    console.log("clicked Add item: " + selectedItem.value);
    if (selectedItem.value.length == 0) {
        alert("Can't add an empty item!!");
    }
    else {
        let element = document.querySelector('.todos-content');

        // Create new div item
        const divItem = document.createElement('div');
        divItem.className = 'todo-item';


        // Create todo text new item
        const divTxt = document.createElement('div');
        divTxt.className = 'todo-text';
        divTxt.innerHTML = '<h3>' + selectedItem.value + '</h3>'

        divItem.appendChild(divTxt);

        // Create todo check for the new item
        const divCheck = document.createElement('div');
        divCheck.className = 'todo-check';
        divCheck.innerHTML = '<input type="checkbox">'

        divItem.appendChild(divCheck);

        // Create todo delete item
        const divDlt = document.createElement('div');
        divDlt.className = 'todo-delete';
        divDlt.innerHTML = '<h3>Delete</h3>'

        divItem.appendChild(divDlt);

        // Add to the  document the new item
        element.appendChild(divItem);
    }
}
//4. Creer une div newTodo et des div pour le texte a afficher et le checkbox ainsi que le texte Delete
//cela en utilisant document.createElement(“div”)

//pour div ou document.createElement(“input”) pour le input(checkbox est un input de type checkbox)

//5. Affecter des classes a ces elements avec les noms todo - item, todo - text, todo - check et todo - delete (modifié)

//6. inserer les div dans leur parent newTodo en utilisant appendChild(par exemple: newTodo.appendChild(newTodoText))

//7. inserer newTodo dans todosContent

//8. Ajouter un evenement pour delete afin de supprimer une task

//9. ecrire la fonction deleteTodo qui supprime une task a partir de son index(les tasks seront dans un tableau avec index)


// Remarques: utiliser les fonctions de DOM suivantes:

// document.querySelector

// document.createElement

// setAttribute(“type”, “checkbox”)

// appendChild
//.className

//.textContent

// document.querySelectorAll

// .addEventListener