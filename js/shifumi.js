let M = {};


M.getRandomChoice = function(){
    let choices = ['pierre', 'feuille', 'ciseaux'];
    let randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}




let V = {};

V.init = function(){
    document.getElementById('shifumi-result').textContent = 'Choisissez !';
}


let C = {}


C.init = function(){
    V.init()
    

    // Ajout d'un écouteur d'évenement aux choix du joueur
    let shifumiOptions = document.getElementById('shifumi-options');
    shifumiOptions.addEventListener('click', C.handler_clickOnOption);

}


C.handler_clickOnOption = function(ev){
    // Vérifiez si l'élément cliqué est un bouton
    if (ev.target.tagName === 'BUTTON') {
        // Récupérez l'ID de l'élément cliqué
        let player = ev.target.id;
        // Retournez l'ID
        console.log(player)

        computer = M.getRandomChoice();
        document.getElementById('computer-choice').textContent = computer;

        console.log(computer)

        if (player === computer) {
            console.log("égalité")
            result = 'Égalité !';
        } 
        else if ((player === 'pierre' && computer === 'ciseaux') || (player === 'feuille' && computer === 'pierre') || (player === 'ciseaux' && computer === 'feuille')) {
            console.log("gagné")
            result = 'Vous avez gagné !';
        } 
        else {
            console.log("perdu")
            result = 'Vous avez perdu !';
        }

    }
    document.getElementById('shifumi-result').textContent = result;
};



C.init();


