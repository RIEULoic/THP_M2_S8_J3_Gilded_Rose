
class Shop  {
  constructor(items = []) {
    this.items = items;
  }

  newDay() {
    this.items.map(item => {
     item.updateSellIn()
     item.updateQuality();
    })
    
    return this.items;
  }
}



export default Shop;

