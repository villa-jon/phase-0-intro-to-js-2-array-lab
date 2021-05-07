// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat() {
        x.push("Ralph")
    // cats.push("Ralph");
}
function destructivelyPrependCat() {
        x.unshift("Bob")
    // cats.unshift("Bob");
}
function destructivelyRemoveFirstCat() {
        x.shift()
    // cats.shift();
}
function destructivelyRemoveLastCat(){
    x.pop()
    // cats.pop();
}
function appendCat(Broom) {
    return [...x, "Broom"]
    // return [...cats, "Broom"];
}
function prependCat(Arnold) {
    ["Arnold", ...x]
    // return ["Arnold", ...cats];
}
function removeLastCat() {
    return x.slice(0, -1)
    // return cats.slice(0,-1);
}
function removeFirstCat() {
   return x.slice(1)
    // return cats.slice(1);
}