let methods = require('./super.js')
console.log(methods);
// 
// const todos = fs.readFileSync ('./todos.json',{encoding :'utf8'});
// // console.log(typeof todos);

//  const todosArray= JSON.parse(todos)
 

// const [,,command,id,name] = process.argv
//  if (command == "add"){
//      const todo={id,
//         name,
//     };   todosArray.push(todo)
//     fs.writeFileSync ('./todos.json',JSON.stringify (todosArray ) ,{encoding :'utf8'})
//  }else if( command=="list"){
//      console.log(JSON.stringify(todosArray,null ,2));
//  }
 
//  else if(command == "edit"){
//      const newToDo = todosArray .map (todo=>{ if(todo.id != id) return todo
//         return { id,
//         name,}

//      })
//      fs.writeFileSync ('./todos.json',JSON.stringify (newToDo) ,{encoding :'utf8'})


//  } else if(command == "delete" ) {const newToDos = todosArray .filter(todo=>todo.id != id)
//  fs.writeFileSync ('./todos.json',JSON.stringify (newToDos) ,{encoding :'utf8'})

 const {program} = require ('commander');

 
program 
 .command( "add")
 .requiredOption('-t, --title <title...> <honorific>', 'title to use before name')
 .action((options ) => {
    console.log( options)
    
   methods.add(options.title)

 })
 




 program 
 .command( "list")
 
 .action(( ) => {
    methods.list()
  })

 program 

 .command( "edit")
 .requiredoption('-t, --title <title> <honorific>', 'entry must have title')
 .requiredoption('-i, --id <honorific>', 'plz enter valid key')
 .action((options) => {methods.edit(options.id,options.title) 
   

 })

 


 
 program 
 .command( "delete")
 
 .action(( ) => {
    method.remove(options.id)
  })

 

program.parse(process.argv)

console.log(process.argv);




