/*
let nom ="ines";
console.log(nom);
*/

/*
let age=prompt("T'as quel âge ??");
if (age>=14){
	alert("Bienvenue à JIT !!");
}else{
	alert("Reviens dans quelques années");
}
*/

let mdp="";
let compte=0;
while(mdp!="azert!" && compte<3){
	mdp=prompt("Quel est votre mot de passe ?");
	compte=compte+1;
}
if(compte>=3 && mdp!="azert!"){
	alert("Trop de tentatives !! Tire toi");
}else{
console.log("Mot de passe correct !");
}
































// On stock le prénom
//let prenom = "Ines"

// On récupère le titre
//let monTitre = document.getElementById("titre-principal");
//monTitre.innerText = "LE CAFE GHIBLI DE "+ prenom;