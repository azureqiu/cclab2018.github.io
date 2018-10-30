
function monkey(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    
    this.eat = function(pos){
        var d = dist(this.x,this.y, pos.x, pos.y) //dist() is from P5.
        if (d < 1){
            this.total++;
            return true;
        }else{
            return false;
        }
        
    }
    
    this.update = function(){
        if (this.total === this.tail.length){
         for (var i = 0; i < this.tail.length; i++){
            this.tail[i] = this.tail[i+1];    
         }
            
        }
        
        this.tail[this.total-1] = createVector(this.x,this.y);
        
         this.x = this.x + this.xspeed*scl;
         this.y = this.y + this.yspeed*scl;
        
        this.x = constrain(this.x,0,width-scl);
        this.y = constrain(this.y,0,height-scl);
        
    }

    this.show = function(){
        fill(255);
       
        
        for (var i = 0; i < this.total; i++){
            rect(this.tail[i],this.tail[i], scl-1,scl-1);
       }
         rect(this.x,this.y, scl-1,scl-1);
        
    }
    
    this.dir = function(newspeedx, newspeedy){ // so this line of code build a function which change the speed of cube.
        this.xspeed = newspeedx;
        this.yspeed = newspeedy;
    }
    

}