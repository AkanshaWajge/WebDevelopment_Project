var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");


while (input != "quit"){
    if (input === "list"){
        console.log(todos);
    } else if (input === "new"){
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        //add to todo array
        todos.push(newTodo);
    }
    //ask again for new input
    var input = prompt("What would you like to do?");

}
console.log("OK YOU QUIT THE APP");
