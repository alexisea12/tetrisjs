'use strict'
import piecesDiagrams from './modules/pieces.js'
import {handleClick, keys, keysUp} from './modules/inputHandling.js'
import Block from './modules/block.js'
import Context from './modules/canvas.js'

async function loadFonts(){
    const font = new FontFace('silkcreen', 'url(./assets/fonts/silkscreen_bold_macroman/slkscrb-webfont.woff)');
    await font.load();
    document.fonts.add(font);
}
loadFonts()


let pieces = ['__I', '__O', '__T', '__S', '__Z', '__J', '__L']


class Tetris{
    constructor(){
        this.context = undefined;
        this.currentBlock = undefined;
        this.blocks = [];
        this.rows = {}
        this.deleteRows = [];
        this.fallSpeed = 500
    }
    
    fall(){
        this.loserChecker()
            this.currentBlock.fall()
            if(this.currentBlock.positions.length > 0){
                
                this.currentBlock.positions.forEach(e=>{
                    this.blocks.push([e[1], this.currentBlock.color])
                })
                let rows = {}
                this.blocks.forEach(e=> rows[e[0].y] ? rows[e[0].y]++: rows[e[0].y] = 1);
                this.rows = rows
                
                Object.entries(this.rows).forEach(e=>{
                    if(e[1] === 10 && !this.deleteRows.includes(e[0])){
                        this.deleteRows.push(e[0])
                    }
                })

                this.rowChecker()
                this.drawBlock(pieces[Math.floor(Math.random() * pieces.length)])
            }
            if(!this.deadScreen){
        setTimeout(()=>{ this.fall()}, this.fallSpeed)
            }
    }
    
    update(){
        if(keys.arrowDown === true && keysUp.arrowDown === false){
            this.fallSpeed = 50
        } else this.fallSpeed = 500
        this.currentBlock.update()
    }

    draw(){
        if(this.blocks.length > 0){
            this.blocks.forEach(e=>{
                this.context.drawSquare(
                    {x: e[0].x, y: e[0].y},
                    {x:this.measure -5, y:this.measure-5}, 
                    3,
                    e[1]
                    )
            })
        }
        this.currentBlock.draw()
        if(this.deadScreen){
            this.deadScreen()
            handleClick.listen = true;
            if(handleClick.click && handleClick.click.x - 5 >= this.x && handleClick.click.x <= this.x + 140 && handleClick.click.y >= this.y && handleClick.click.y <= this.y + 50){
                this.reset = true;
            }
        }
    }

    loserChecker(){
        this.x = this.context.canvas.width/2 - 65;
        this.y = this.context.canvas.height/2 + 20;
        if(this.rows[0]){
            this.deadScreen =()=> {
                this.context.drawText('40px', 'silkcreen', 'GAME OVER', this.context.canvas.width/2, this.context.canvas.height/2, "#1E9745");
                this.context.drawSquareText({x:this.context.canvas.width/2 - 65, y: this.context.canvas.height/2 + 20}, {x:130, y:40}, 2, '#7CE241', '#353535', 'RESET', 20)
            }
        }
        return
    }

    rowChecker(){
        if(this.deleteRows.length > 0){
            let newRows = this.blocks.filter(e=>{
                if(this.deleteRows.every(a=> parseInt(a) !== e[0].y)){
                    return e
                }
            })

            newRows.forEach(e=>{
                if(this.deleteRows.some(a=> parseInt(a) >= e[0].y + this.measure)){
                    this.deleteRows.forEach(row=>{
                        if (Number(row) > e[0].y){
                            e[0].y += this.measure
                        }
                    })
                    //e[0].y += this.measure * this.deleteRows.length
                }
            })

            this.blocks = newRows
            this.deleteRows.forEach(e=>{
                delete this.rows[e]
            })
            this.deleteRows = []
        }
    }
    
    drawBlock(block){
        let color;
        switch(block){
            case '__L':
                color = '#9b2226'
                break
            case '__S':
                color = '#005f73'
                break
            case '__Z':
                color = '#ee9b00'
                break
            case '__J':
                color = '#560bad'
                break
            case '__O':
                color = '#2d6a4f'
                break
            case '__I':
                color = '#4ea8de'
                break
            case '__T':
                color = '#007f5f'
        }
        this.currentBlock = new Block(
            {x: this.measure *2, y:0},
            this.context,
            this.blocks,
            block,
            color
        )
    }
    initialize(context){
        this.context = context
        this.measure = this.context.canvas.width/10
        this.drawBlock('__L')
        setTimeout(()=>this.fall(), 500)
    }
}


class Game{
    constructor(context){
        this.gameWorld = undefined;
        this.context = context
    };


    drawBlock(){
        this.currentBlock = new Block({x:0, y:0}, this.context);
    }

    initialize(context){
        this.context.initialize(document.getElementById('canvas1'), 300, 600)
        this.gameWorld = new Tetris(context);
        this.gameWorld.initialize(this.context)
        this.mainLoop()
    }

    mainLoop(){
        this.context.clear();
        this.gameWorld.update();
        this.gameWorld.draw();
        if(this.gameWorld.reset){
            this.initialize()
            handleClick.listen = false
            handleClick.click = undefined;
        }
        requestAnimationFrame(()=>this.mainLoop())
    }
}

let gameInit = new Game(new Context())
gameInit.initialize();
