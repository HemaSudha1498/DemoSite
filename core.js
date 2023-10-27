function changeKey(_id) {

    let item = document.getElementById(_id)

    if (item.src.includes("up-sign")) {
        item.src = "./assets/arrow-down-sign-to-navigate (1) 1.svg"
    } else {
        item.src = "./assets/arrow-up-sign-to-navigate (1) 1.svg"
    }
}