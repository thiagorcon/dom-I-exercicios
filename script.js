const frutas = ["laranja", "limão", "uva"]

let listaFrutas = document.getElementsByTagName("li")
     
for (let index = 0; index < frutas.length; index++) {
//     let cestaFrutas = listaFrutas.innerHTML = frutas[index] 
    listaFrutas[index].innerHTML =  frutas[index]

}
console.log(listaFrutas);
 //listaFrutas.innerHTML = frutas[0]
 //listaFrutas.innerHTML = frutas[1]
// listaFrutas.innerHTML = frutas[2]






// exercicio 3
// function adicionar(){
//       let adicao = document.getElementById('fruta-4').innerHTML
//       adicao.value = fruta-4  
// }

