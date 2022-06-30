/*********************************************************************************************************************************************
 * 
 *  El tiempo de ejecucion es exponencial   = O(datos al cuadrado)
 * 
 * 
 * ******************************************************************************************************************************************/


const database = [];
for (let index = 0; index < process.argv[3]; index++) {
    database.push(index)
}

var part1 = database.slice(0, Math.round(database.length / 2))
console.log(part1);

var part12 = database.slice(part1.length, database.length)
console.log(part12);



function FastfFoud(item) {
    var last = part1.length;
    var last2 = part12.length;

    for (let index = 0; index < part1.length; index++) {
        const element = part1[index];
        let posLast=last - 1;
        const element2 = part1[posLast];
        var ready=false;
        if (element2 == item) {  //Jose
            console.log(element2);
            console.log("Jose encontro el numero " + item+" en la posicion "+ posLast);
            return
        }

        if (element == item) {  //Ana
            console.log(element);
            console.log("Ana encontro el numero " + item+" en la posicion "+ index);
            return
        }
        last--;

         for (let index2 = 0; index2 < part12.length; index2++) {
            const element = part12[index2];
            let posLast=last2 - 1;
            const element2 = part1[posLast];
    
            if (element2 == item) {  //Juana
                console.log(element2);
                console.log("Juan encontro el numero " + item+" en la posicion "+ posLast);
                 ready=true;
                return
            }
    
            if (element == item) {  //Juan
                console.log(element);
                console.log("Juan encontro el numero " + item+" en la posicion "+ index2);
                ready=true;
                return
            }
            last2--;
         }
         if(ready)break;
    }
}


FastfFoud(process.argv[2])