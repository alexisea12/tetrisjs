'use strict'
import piecesDiagrams from "./pieces.js";
import {keys, keysUp} from "./inputHandling.js"


class Block{
    constructor(pos, ctx, floor, piece, color){
        this.coordinates = pos
        this.position = 'horizontal';
        this.positions = [];
        this.floor = floor
        this.measure = ctx.canvas.width/10
        this.dy = 0;
        this.dx = 0;
        this.ctx = ctx
        this.axis = {x:this.coordinates.x * 2, y: this.dy}
        this.piece = piece
        this.diagram = []
        this.color = color
    }

    checker(first, second){
        let original = Object.assign({}, this.axis);
        let results = this.offSetChecker(first)
        if(results.y>0){
            this.axis.y -= this.measure * results(first).y
        } else if(results.x!==0){
            this.axis.x += this.measure * results.x
        }
        if(results.x === 0 && results.y === 0){
            this.position = first
        } else {
            this.axis = original
            this.position = second
        }
    }
    
    update(){
        this.diagram = piecesDiagrams(this.coordinates, this.axis, this.measure, this.dy)[this.piece][this.position]
        this.blockPositions = Object.entries(this.diagram)
        
        if(keys.arrowUp === true){
            
            //this.position === 'vertical' ? this.position = 'horizontal' : this.position = 'vertical'

            switch(this.position){
                case 'horizontal':
                    this.checker('vertical', 'horizontal')
                    break
                case 'vertical':
                    this.checker('horizontal2', 'vertical')
                    break
                case 'horizontal2':
                    this.checker('vertical2', 'horizontal2')
                    break
                case 'vertical2':
                    this.checker('horizontal', 'vertical2')
                }
                keys.arrowUp = false
            }
    if(
        keys.arrowLeft === true
        &&
        (!this.blockPositions.some(e=>
        this.floor.some(a=> 
            a[0].y >= e[1].y
            &&
            a[0].y <= e[1].y
            &&
            (
            a[0].x === e[1].x 
            - this.measure
            )
            )
            ||
            e[1].x === 0
        ))
        ){
                this.dx -= this.measure
                this.dy = 0
        keys.arrowLeft = false
    } 
                    
    else if(
        keys.arrowRight === true
        &&
        (!this.blockPositions.some(e=>
        this.floor.some(a=> 
            a[0].y >= e[1].y
            &&
            a[0].y <= e[1].y
            &&
            (
            a[0].x === e[1].x 
            + this.measure
            )
            )
            ||
            e[1].x + this.measure === this.ctx.canvas.width
        ))
        ){
        this.dx += this.measure
        this.dy = 0
        keys.arrowRight = false
    }
    else{
        this.dx = 0
    }
    if((this.blockPositions.some(e=>
        this.floor.some(a=> 
            a[0].y >= e[1].y
            &&
            a[0].y <= e[1].y
            
            &&
            (
            a[0].x >= e[1].x 
            &&
            a[0].x <=e [1].x
            )
            )
        ))){
            this.axis.y -= this.measure
        }
            this.axis.x += this.dx
            
            //this.diagram = this.changePosition()[this.piece][this.position]
            
                    
    }

    draw(){
        this.diagram.forEach((e)=>{
            this.ctx.drawSquare(
                {x: e.x, y: e.y},
                {x:this.measure -5, y:this.measure-5}, 
                3,
                this.color
                )
            })
        }

        
        fall(){
            if(
            !this.blockPositions.some((e)=> e[1].y + this.measure
            >=
            this.ctx.canvas.height) === false
            &&
            this.positions.length < 1
            ){
        this.positions = Object.entries(this.diagram)
    }

    if(this.floor.length > 0){
        if(this.blockPositions.some((e)=>
        this.floor.some(a=> 
            a[0].y <= e[1].y + this.measure 
            &&
            a[0].y >= e[1].y + this.measure
            && 
            a[0].x <= e[1].x
            && 
            a[0].x >= e[1].x
            )
            )){
                this.positions = this.blockPositions
                this.dy = 0
            }
        } 
        this.dy = this.measure
        this.axis.y += this.dy
    }
    
    offSetChecker(pos){
        let result = {x:0 , y:0}
        let firstOffsetBlock = []
        piecesDiagrams(this.coordinates, this.axis, this.measure, this.dy)[this.piece][pos].forEach((e, index)=>{
            if(firstOffsetBlock.length>0){
                firstOffsetBlock.push(e)
            }
            if(
                (
        e.y + this.measure > this.ctx.canvas.height
        ||
        this.floor.some(a=>
            e.y === a[0].y
            &&
            e.x === a[0].x
            )
            )
            ){
                result.y ++
            }
            
            if(e.x + this.measure > this.ctx.canvas.width){
                result.x --
            }
            if(e.x < 0){
                result.x ++
            }
            
            this.floor.forEach(a=>{
                if(
                    e.y === a[0].y
                    )
                    {
                        if(
                            e.x >= a[0].x
                    &&
                    e.x <= a[0].x
                    ){
                        switch(index){
                            case 0:
                                result.x = 1
                            break
                            case 1:
                                result.x = 2
                                break
                            case 2:
                                result.x = -2
                                break
                                case 3:
                                result.x = -1
                                break
                            }
                    firstOffsetBlock.push(e)
                    }
                }
            })
                
        }
            )
            return result
    }
    
}

export default Block