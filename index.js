let nomeHeroi = "KingSlayer"
let nivelXp = 1000
let nivel = ""

if (nivelXp<=1000){
    nivel = "Ferro"
}else if(nivelXp>=1001 && nivelXp<=2000){
    nivel = "Bronze"
}else if(nivelXp>=2001 && nivelXp<=5000){
    nivel = "Prata"
}else if(nivelXp>=5001 && nivelXp<=7000){
    nivel = "Ouro"
}else if(nivelXp>=7001 && nivelXp<=8000){
    nivel = "Platina"
}else if(nivelXp>=8001 && nivelXp<=9000){
    nivel = "Ascendente"
}else if(nivelXp>=9001 && nivelXp<=10000){
    nivel = "Imortal"
}else{
    nivel = "Radiante"
}
console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel)