import  Item  from "./item.js";

class AgedBrie extends Item {

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
    this.quality += 1;
    if(this.quality > 50) {
      this.quality = 50;
    }
  }

}

export default AgedBrie;