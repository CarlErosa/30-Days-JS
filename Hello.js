function createHelloWorld(){
   return function(){
        return "Hello World";
   }
}


// alternative syntax

const createHelloWorld = () => {
    return function() {
        return "Hello World";
    }
}


//challenges did not know the syntax for creating a function that returns another function in js