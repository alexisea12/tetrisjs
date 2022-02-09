import {handleClick} from './inputHandling.js'

class Context{
    constructor(){
        this.canvas = undefined
        this.ctx = undefined
    }
    initialize(canvas, width, height){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.addEventListener('click', e=>{
    if(handleClick.listen === true){
        handleClick.click = {x: e.layerX, y:e.layerY}
    }
    })
    }

    clear(){
        this.ctx.clearRect(0, 0 , this.canvas.width, this.canvas.height);
    }

    drawSquare(coordinates, measures, lineWidth, color){
        this.ctx.beginPath();
        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = color;
        this.ctx.rect(coordinates.x, coordinates.y, measures.x, measures.y);
        this.ctx.stroke()
    }

    drawSquareText(coordinates, measures, lineWidth, color, color2, text, size){
        this.ctx.beginPath();
        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = color;
        this.ctx.rect(coordinates.x, coordinates.y, measures.x, measures.y);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(coordinates.x, coordinates.y, measures.x, measures.y)
        this.ctx.fillStyle = color2
        this.ctx.font = `${size}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(text, coordinates.x + measures.x/2, coordinates.y + measures.y/2 + 5);
        this.ctx.stroke();
    }

    drawText(size, font, text, measureX, measureY, color){
        this.ctx.font = `${size} ${font}`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(text, measureX, measureY);
    }

}

export default Context;