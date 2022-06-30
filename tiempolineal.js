
/*************************************************************************************************************
 * 
 *   El vaor del tiempo es proporcional al la cantidad de datos    O(DATOS) Lienal
 * 
 *************************************************************************************************************/

const database = [1, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4, 2, 3, 4];
const database2 = [...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database,...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database, ...database];

let t1 = 0;
let t2 = 0;








function printer1(data) {
    var timer1 = setInterval(() => {
        t1 += 1;
        console.log("-------");
    }, 0.1);
    data.forEach(info => {

    });

   
   // clearInterval(timer1)
    console.log("TIEMPO1 : " + t1)


}



function printer2(data) {
    var timer2 = setInterval(() => {
        t2 += 1;
    }, 1000);
    data.forEach(info => {
    });
 
    clearInterval(timer2)
    console.log("TIEMPO2 : " + t2)


}


console.log("\n");
printer1(database2)
printer2(database);

console.log("\n");
/// t2=t1(40)


