import  Item  from "./item.js";

class Conjured extends Item {
  
    constructor(name, sellIn, quality){
      super(name, sellIn, quality);
    }
  
    updateSellIn(){
     this.sellIn--
     if(this.sellIn < 0) {
       this.sellIn = 0;
     }
    }
  
  
    updateQuality() {
      this.quality -= 2;
      if(this.quality < 0){
        this.quality = 0;
    }
    }
  }

export default Conjured;