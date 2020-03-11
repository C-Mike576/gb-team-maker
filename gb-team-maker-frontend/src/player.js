class Player {
    constructor(id, name, team, position, card_front, card_back) {
        this.id = id
        this.name = name
        this.team = team
        this.position = position
        this.card_front = card_front
        this.card_back = card_back
        this.element = document.createElement('div')
        this.element.className = "player-info"
        this.element.id = this.id

    }
}