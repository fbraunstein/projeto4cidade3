let sorteio =[];

while(sorteio.length <6){
    let numero =Math.ceil(Math.random()*60)
    if(numero){
        sorteio.push(numero)
    }
}
console.log(sorteio)
