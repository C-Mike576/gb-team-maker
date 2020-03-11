class Player {
    constructor(id, name, team, position, card_front, card_back) {
        this.id = id
        this.name = name
        this.team = team
        this.position = position
        this.card_front = card_front
        this.card_back = card_back
        this.fliped = false
        this.element = document.createElement('div')
        this.element.className = "player-info"    

        this.element.addEventListener("click", this.handleFlip.bind(this))

    }

    handleFlip(e){
        this.fliped = !this.fliped
        if (this.fliped) {
            this.card_front.display = "none"
            this.card_back.display = "block"
        } else {
            this.card_front.display = "block"
            this.card_back.display = "none"
        }
    }
    render(){
        this.element.innerHTML = `
        <h3>${this.name}<h3>
        <img src="${this.card_front}" class="player-card-front" style="display:block;"/>
        <img src="${this.card_back}" class="player-card-back" style="display:none;"/>
        </br>
        <button class="veiw-back">View Back of card</button>
        `
        return this.element
    }
}