class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  
    updateQuality() {
        this.quality--;
        if(this.quality < 0){
            this.quality = 0;
        }
    }
  
    updateSellIn() {
      this.sellIn--;
      if (this.sellIn < 0){
        this.sellIn = 0;
      }
    }
  }

  export default Item;