
function printNumbers(from, to){
    for(let i = from; i <= to; i++){
        setTimeout(() => console.log(i), i * 1000);
    }
}

printNumbers(1, 10)