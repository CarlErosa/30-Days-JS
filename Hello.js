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