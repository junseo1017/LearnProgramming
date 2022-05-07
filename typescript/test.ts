class Square {
    line:number
        getLength(num:number){
        return this.list
        }
        setLength(num:number){    
        this.line = num;
        }
        draw(){
        console.log('*'.repeat(this.line))
        for(let i=1;i<this.line-1;i++){
            console.log('*'+' '.repeat(this.line-2)+'*';)
        }
        console.log('*'.repeat(this.line))
        }
    }