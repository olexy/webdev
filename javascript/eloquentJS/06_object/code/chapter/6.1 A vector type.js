function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.minus = function(other) {
  return new Vector(this.x - other.x, this.y - other.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});

// ************************* MY ANNSWER ****************************

function Vector(x, y){
  this.x = x;
  this.y = y;
}

var newVector = new Vector(2,3);
var anVector = new Vector(4,5)

Vector.prototype.plus = function(v){
  return this.x + v.x
}

Vector.prototype.minus = function(v){
  return this.y - v.y
}

//Define GETTER with defineProperty (for constructor)
Object.defineProperty(Vector.prototype, "vLength", {
  get: function(){
    return this.x + this.y;
  },
  
  set: function(x,y){
    this.x = x;
    this.y = y;
  }
})

console.log(newVector.plus(anVector) +", " + newVector.minus(anVector))

var thirdVector = new Vector(-2, 5)

console.log(thirdVector.vLength)