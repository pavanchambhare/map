let map = new Map();
map.set("Navin" , "Java");
map.set("Biran" , "Samartgay");
map.set("Marish" , "Lost Mind");
map.set("Chetan" , "22");

for([ k , v]  of map)  {
    console.log(k, " : ", v);
}
let pavan = new Map();
map.set("Date" , "6");
map.set("age" , "23");
map.set("blood groop" , "A+");
map.set("Chetan" , "to old");

for([ k , v]  of map)  {
    console.log(k, " : ", v);
}


let num = [5,7,5,6,1,1]
console.log(num)

// let [a,b,,d] = num;

// console.log(num);


let words = " My name Pavan Baburav chambhare ".split(' ');

let[a,b,c] = words;

console.log(c)