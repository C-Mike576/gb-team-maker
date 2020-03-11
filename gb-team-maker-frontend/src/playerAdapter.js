class PlayerAdapter{
    constructor(baseURL) {
        this.baseURL = baseURL
        this.teamContainer = document.querySelector("#team-container")
    }

    fetchPlayers(){
        fetch(this.baseURL)
        .then(res => res.json())
        .then(playerArry => playerArry.forEach(playerObj => {
            let player = new Player(playerObj)
            console.log(playerObj.name);
            console.log(player);
            this.teamContainer.appendChild(player.render())
        }))
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let adapter = new PlayerAdapter("http://localhost:3000/players")
    adapter.fetchPlayers()
})
