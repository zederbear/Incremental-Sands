let buyMaxButton = document.getElementById("buy-max-button")

buyMaxButton.onclick = function() {
    if (buyMaxButton.classList != "max-button-clicked") {
        buyMaxButton.classList.add("max-button-clicked");
        buyMaxButton.classList.remove("button")
        player.buyMax = true;
    } else {
        buyMaxButton.classList.remove("max-button-clicked");
        buyMaxButton.classList.add("button")
        player.buyMax = false;
    }
}