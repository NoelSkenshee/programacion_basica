
/*************************************************************************************************************
 * 
 *   El tiempo sera el smo sin importanr la cantidad de dato que le pasemos   O(1)
 * 
 *************************************************************************************************************/

const database = [1, 2, 3, 4, 5];
const database2 = [[1, 2, 3, 4, 51, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,1, 2, 3,], [1, 2, 3, 4]];
let t1=0;
let t2=0;


var timer1= setInterval(() => {
    t1++
}, 1);

function printer1(data) {
    console.log(data[0]);
}


var timer2= setInterval(() => {
    t1++
}, 1);

function printer2(data) {

    console.log(data[0]);
}


console.log("\n");
printer2(database);
console.log("\n");
printer1(database2)
console.log("\n");


console.log(t1-t2)//==0

clearInterval(timer1)
clearInterval(timer2)
