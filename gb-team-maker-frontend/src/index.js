// document

function fetchPlayers() {
    fetch("http://localhost:3000/players")
        .then(function(res) {
            return res.json()
        })
        .then(function(parsedObj) {
            parsedObj.data.forEach(playerToDom);
        })
}

function playerToDom(playerObj) {
    const playerCollection = document.getElementById("player-container")
    let playerElement = document.createElement('div')
    playerElement.className = "player-info"
    playerElement.innerHTML =
        `
        <h3>${playerObj.attributes.name}<h3>
        <img src="${playerObj.attributes.card_front}" class="player-card-front" />
     </br>
        <button class="veiw-back">View Back of card</button>
    `
    playerCollection.appendChild(playerElement)
}



















document.addEventListener("DOMContentLoaded", () => {
    fetchPlayers()
})