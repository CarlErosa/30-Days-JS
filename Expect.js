const expect = (val) =>{
    return{
        toBe: function(other){
            if (val === other){
                return true;
            }
            else{
                throw new Error("Not Equal")
            }
        },
        notToBe: function(other){
            if (val !== other){
                return true;
            }
            else{
                throw new Error("Equal")
            }
        }
        }

    }


    //challenges

// method typos and closing brackets
// case senstive nottoBe == notToBe
// commas