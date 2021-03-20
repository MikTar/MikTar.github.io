
let TodoList = [];

let firstQuestion = prompt('What would you like to do? Type something to start or "quit" to quit');

while(firstQuestion !== 'quit'){
    firstQuestion = prompt('What would you like to do?');

     if(firstQuestion === 'new'){
        let add = prompt('Enter new todo');
        if(add){
            TodoList.push(add);
            console.log(`${add} added to list`)
        };
        
    }

    else if(firstQuestion === 'list'){
        console.log(` *******************`);
        for(let i =0 ; i<TodoList.length; i++){
            console.log(` ${i}       : ${TodoList[i]}`);
        };
        console.log('********************')
       
    } 
    
    else if(firstQuestion === 'delete'){
        let del = prompt('Index of todo item to delete?');
        console.log(`Deleted ${TodoList[del]}`);
        TodoList.splice(del,1);
        
    }

    
}

while(firstQuestion === 'quit'){
    console.log('OK you quit Todo App');
    break;
}