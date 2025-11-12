class Feature {
    constructor(features) {
        this.mean = features.mean;
        this.errorUpper = features.errorUpper;
        this.errorLower = features.errorLower;
        this.value = features.value;
    }
}
//Below is imported directly from my Khan Academy Project: https://www.khanacademy.org/computer-programming/algorithmtxt/5706360218566656
translate(200,200);
scale(2);
var Pfeatures = [];
var Nfeatures = [];
var resolution = 10;
function feature(x, value){
    this.x = x;
    this.value = value;
    this.draw = function() {
        noStroke();
        if(this.value === -1){
            fill(255,0,0);
            ellipse(this.x,-this.value,2,2);
        }else if(this.value === 1){
            fill(0,0,0);
            ellipse(this.x,-this.value,2,2);
        }
    };
}
function Rectangle(mean, errorUp, errorDown, value){
        for(var i = mean-errorDown; i<=mean+errorUp;i+=(1/resolution)){
            if(value === 1){
                Pfeatures.push(new feature(i,value));
            } else if(value === -1){
                Nfeatures.push(new feature(i,value));
            }
        }
}
function getValue(lowerBound,upperBound){
    var value = 0;
    for(var i = 0; i<Pfeatures.length;i++){
        if(Pfeatures[i].x>=lowerBound && Pfeatures[i].x<=upperBound){
            value++;
        }
    }
    for(var i = 0; i<Nfeatures.length;i++){
        if(Nfeatures[i].x>=lowerBound && Nfeatures[i].x<=upperBound){
            value--;
        }
    }
    return value/resolution;
}
strokeWeight(0.5);
line(-400,0,400,0);
Rectangle(20,3.3,3.1,1);
Rectangle(random(10,30),random(5.0,0.0),random(5.0,0.0),1);
Rectangle(random(10,30),random(5.0,0.0),random(5.0,0.0),1);
Rectangle(random(10,30),random(5.0,0.0),random(5.0,0.0),1);
Rectangle(random(10,30),random(5.0,0.0),random(5.0,0.0),1);
Rectangle(random(10,30),random(5.0,0.0),random(5.0,0.0),1);
Rectangle(random(10,30),random(5.0,0.0),random(5.0,0.0),1);
Rectangle(random(10,30),random(5.0,0.0),random(5.0,0.0),1);
Rectangle(random(10,30),random(5.0,0.0),random(5.0,0.0),1);
Rectangle(random(-10,10),random(5.0,0.0),random(5.0,0.0),-1);
Rectangle(random(-10,10),random(5.0,0.0),random(5.0,0.0),-1);
Rectangle(random(-10,10),random(5.0,0.0),random(5.0,0.0),-1);
Rectangle(random(-10,10),random(5.0,0.0),random(5.0,0.0),-1);
Rectangle(random(-10,10),random(5.0,0.0),random(5.0,0.0),-1);
Rectangle(random(-10,10),random(5.0,0.0),random(5.0,0.0),-1);
Rectangle(random(-10,10),random(5.0,0.0),random(5.0,0.0),-1);
Rectangle(random(-10,10),random(5.0,0.0),random(5.0,0.0),-1);
Rectangle(2,1.3,10.1,-1);
for(var i = 0; i<Pfeatures.length;i++){
    Pfeatures[i].draw();
}
for(var i = 0; i<Nfeatures.length;i++){
    Nfeatures[i].draw();
}
println(getValue(-10,30));
