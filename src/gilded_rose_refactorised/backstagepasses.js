import  Item  from "./item.js";

class BackstagePasses extends Item {

    constructor(name, sellIn, quality) {
      super(name, sellIn, quality);
    }
  
    updateSellIn(){
      this.sellIn--
      if(this.sellIn < 0) {
        this.sellIn = 0;
      }
    }
  
    updateQuality(){
      if(this.sellIn <= 10 && this.sellIn > 5){
        this.quality += 2;
      } else if(this.sellIn <= 5 && this.sellIn > 0) {
        this.quality += 3;
      } else if(this.sellIn <= 0){
        this.quality = 0;
      } else {
        this.quality ++;
      }
  
      if(this.quality >50) {
        this.quality = 50;
      }
  
  }
  
  }

export default BackstagePasses;