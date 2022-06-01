import  Item  from "./item.js";

class Sulfuras extends Item {

    constructor(name, sellIn, quality) {
      super(name, sellIn, quality);
    }
  
    updateSellIn() {
      this.sellIn--;
      if(this.sellIn < 0) {
        this.sellIn = 0;
      }
    }
  
    updateQuality() {
      this.quality = 80;
    }
  
  }

  export default Sulfuras;