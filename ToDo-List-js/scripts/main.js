
let TodoList = [];

let firstQuestion = prompt('What would you like to do? Type something to start or "quit" to quit');

while(firstQuestion !== 'quit'){
    firstQuestion = prompt('What would you like to do?');

     while(firstQuestion === 'new'){
        let add = prompt('Enter new todo');
        if(add){
            TodoList.push(add);
            console.log(`${add} added to list`)
        };
        firstQuestion = prompt('What would you like to do?')
    };

    while(firstQuestion === 'list'){
        console.log(`Here your todo list :`);
        for(let i =0 ; i<TodoList.length; i++){
            console.log(` ${i}       : ${TodoList[i]}`);
        };
        firstQuestion = prompt('What would you like to do?');
    };

    while(firstQuestion === 'delete'){
        let del = prompt('Index of todo item to delete?');
        console.log(`Deleted ${TodoList[del]}`);
        TodoList.splice(del,1);
        firstQuestion = prompt('What would you like to do?');
    }

}

while(firstQuestion === 'quit'){
    console.log('OK you quit Todo App');
    break;
}