
// Petición asíncrona de promesas
(async function(){

    let resultado = await new Promise((resolve, reject) => {
        setTimeout(resolve, 400, 5);
    });

    let resultado_2 = await new Promise((resolve, reject) => {
        setTimeout(resolve, 400, 10);
    });

    console.log(resultado + resultado_2)

})();


// Objener los repositorios de gitgub
async function showGitHubInfo(){
    let response = await fetch('https://api.github.com/users/jorgealbertogomezgomez77/repos');
    let repos = await response.json();

    console.log(repos);
};

//showGitHubInfo();

(async function () {
    try{
        let promesa = await Promise.reject("Error");
        let promesa_2 = await Promise.reject("Error_2");
    }
    catch (err) {
        console.log(err);
    }
})();