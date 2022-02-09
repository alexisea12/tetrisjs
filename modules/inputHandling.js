
export let handleClick = {
    listen: false,
    click: undefined,
    get clickPos(){
        return this.click
    },
    set clickPos(value){
        this.click = value
    }
}

export let keys = {
    arrowLeft: false,
    arrowRight: false,
    arrowDown: false,
    arrowUp: false
}

export let keysUp = {
    arrowRight: false,
    arrowLeft: false,
    arrowDown : false,
}


document.addEventListener('keydown', e=>{
    switch(e.key){
        case 'ArrowRight':
            keys.arrowRight = true;
            keysUp.arrowRight = false;
            break
        case 'ArrowLeft':
            keys.arrowLeft = true;
            keysUp.arrowLeft = false;
            break
        case 'ArrowDown':
            keys.arrowDown = true;
            keysUp.arrowDown = false;
            break
        case 'ArrowUp':
            keys.arrowUp = true;
            keysUp.arrowUp = false;
            break
    }
})


document.addEventListener('keyup', e=>{

    switch(e.key){
        case 'ArrowRight':
            keysUp.arrowRight = true;
            break
        case 'ArrowLeft':
            keysUp.arrowRight = true;
            break
        case 'ArrowDown':
            keysUp.arrowDown = true;
    }
})