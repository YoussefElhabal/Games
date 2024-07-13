import { UI } from "./UI.module.js";
import { Details } from './details.module.js';

export class Home{
    constructor() {
        document.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener("click", () => {
                this.changeActiveLink(link);

                const category = link.getAttribute("data-category");
                this.getGames(category);
            })
        })

        this.details = document.getElementById("details");
        this.home = document.getElementById("home");

        this.ui = new UI();
        this.getGames("MMORPG");
    }
    async changeActiveLink(link) {
        document.querySelector(".navbar-nav .active").classList.remove("active");
        link.classList.add("active");
    }
    async getGames(category) {
        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c2de04cb90mshe63fc7626bf1356p1688c0jsn141916d91d1c',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const request = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const response = await request.json();
        this.ui.displayGames(response);
        loading.classList.add("d-none");
        document.querySelectorAll(".card").forEach((card) => {
            card.addEventListener("click", () => {
                this.details.classList.remove("d-none");
                this.home.classList.add("d-none");
                new Details(card.dataset.id);
            })
        })
    }
}