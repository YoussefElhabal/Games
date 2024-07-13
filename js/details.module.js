import { UI } from './UI.module.js';
export class Details{
    constructor(id) {
        document.getElementById("btnClose").addEventListener("click", () => {
            document.getElementById("details").classList.add("d-none");
            document.getElementById("home").classList.remove("d-none");
        })
        this.getDetails(id);
        this.ui = new UI();
    };
    async getDetails(id) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c2de04cb90mshe63fc7626bf1356p1688c0jsn141916d91d1c',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        const request = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        const response = await request.json();
        this.ui.displayDetails(response);
        loading.classList.add("d-none");
    }
}