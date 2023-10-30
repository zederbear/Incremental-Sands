var app = new Vue({
    el: "#app",
    data: {
      player: player
    },
    methods: {
      buyMarketingGenerator(i) {
        let g = this.player.marketing[i]
        if (g.cost > this.player.money) return
        this.player.money -= g.cost
        this.player.marketing[i].cost *= 1 + (i+1)*0.25
        this.player.marketing[i].amount += 1
        this.player.marketing[i].bought += 1
      },
      format(amount) {
        return format(amount)
      },
      gameLoop() {
        gameLoop(this)
      }
    },
    mounted() {
      setInterval(this.gameLoop, 50)
    }
  })
