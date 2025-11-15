class Feature {
    constructor(x, value) {
        this.x = x;
        this.value = value;
    }
    draw() {
        noStroke();
        if(this.value === -1){
            fill(255,0,0);
            ellipse(this.x,-this.value,2,2);
        }else if(this.value === 1){
            fill(0,0,0);
            ellipse(this.x,-this.value,2,2);
        }
    }
}
class AI {
    constructor(resolution,Pfeatures=[],Nfeatures=[]){
        this.Pfeatures = Pfeatures;
        this.Nfeatures = Nfeatures;
        this.resolution = 10;
    }
    pushRectangle(mean, errorDown, errorUp, value){
        for(let i = mean-errorDown; i<=mean+errorUp;i+=(1/resolution)){
            if(value === 1){
                Pfeatures.push(new feature(i,value));
            } else if(value === -1){
                Nfeatures.push(new feature(i,value));
            }
        }
    }
    getValue(lowerBound,upperBound){
        let value = 0;
        for(let i = 0; i<Pfeatures.length;i++){
            if(Pfeatures[i].x>=lowerBound && Pfeatures[i].x<=upperBound){
                value++;
            }
        }
        for(let i = 0; i<Nfeatures.length;i++){
            if(Nfeatures[i].x>=lowerBound && Nfeatures[i].x<=upperBound){
                value--;
            }
        }
        return value/resolution;
    }
    drawAll(){
        for(let i = 0; i<Pfeatures.length;i++){
            Pfeatures[i].draw();
        }
        for(let i = 0; i<Nfeatures.length;i++){
            Nfeatures[i].draw();
        }
    }
}