export class UI{
    constructor() {};
    displayGames(gameData){
        let gamesContainer = '';
        for (let i = 0; i < gameData.length; i++) {
            gamesContainer += 
            `<div class="col">
                <div data-id="${gameData[i].id}" class="card h-100 bg-transparent">
                    <figure class="pt-3 px-3 mb-0">
                        <img src="${gameData[i].thumbnail}" class="card-img-top" alt="game">
                    </figure>
                    <div class="card-body">
                        <div class="header text-white d-flex justify-content-between align-items-center">                            
                            <h5 class="card-title">${gameData[i].title}</h5>
                            <span class="p-2 rounded-2">Free</span>
                        </div>
                        <p class="card-text text-center mt-1">${gameData[i].short_description}</p>
                    </div>
                    <div class="card-footer text-white d-flex justify-content-between">
                        <span class="p-1 rounded-2">${gameData[i].genre}</span>
                        <span class="p-1 rounded-2">${gameData[i].platform}</span>
                    </div>
                </div>
            </div>`
        }
        document.getElementById("games").innerHTML = gamesContainer;
    }
    displayDetails(data){
        let detailsContainer = 
        `<div class="col-md-4">
                <img src="${data.thumbnail}" class="w-100" alt="" />
        </div>
        <div class="col-md-8">
            <h3 class="text-white">Title: ${data.title}</h3>
            <p class="text-white">Category: <span class="badge text-bg-info"> ${data.genre}</span></p>
            <p class="text-white">Platform: <span class="badge text-bg-info"> ${data.platform}</span></p>
            <p class="text-white">Status: <span class="badge text-bg-info"> ${data.status}</span></p>
            <p class="text-white small">${data.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
        </div>`;
        document.getElementById("detailsContent").innerHTML = detailsContainer;
    }
}