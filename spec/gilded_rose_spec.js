import Shop from "../src/gilded_rose_refactorised/shop.js";
import Item  from "../src/gilded_rose_refactorised/item.js";
import AgedBrie from "../src/gilded_rose_refactorised/agedbrie.js";
import BackstagePasses from "../src/gilded_rose_refactorised/backstagepasses.js";
import Conjured from "../src/gilded_rose_refactorised/conjured.js";
import Sulfuras from "../src/gilded_rose_refactorised/sulfuras.js";

describe("Gilded Rose", function () {
  
  /* ALL ITEMS*/

  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.newDay();
    expect(items[0].name).toEqual("foo");
  });

  it("should return 0, can't be negative number ", () => {
    const gildedRose = new Shop([ new Item("foo", 0, -25) ]);
    const items = gildedRose.newDay();
    expect(items[0].quality).toEqual(0);
  });

  it("should return 1  (sellIn -1) ", () => {
    const gildedRose = new Shop([ new Item("foo", 2, 25) ]);
    const items = gildedRose.newDay();
    expect(items[0].sellIn).toEqual(1);
  });


/* AGEDBRIE ITEMS */

it("should return 26 for AgedBrie item (quality +1) ", () => {
  const gildedRose = new Shop([ new AgedBrie("Aged Brie",2, 25)]);
  const items = gildedRose.newDay();
  expect(items[0].quality).toEqual(26);
});

it("should return 50 for AgedBrie item (max quality = 50) ", () => {
  const gildedRose = new Shop([ new AgedBrie("Aged Brie",2, 70)]);
  const items = gildedRose.newDay();
  expect(items[0].quality).toEqual(50);
});

/* SULFURAS ITEMS */

it("should return 80 for Sulfuras item (quality = 80) ", () => {
  const gildedRose = new Shop([ new Sulfuras("Sulfuras", 2, 90) ]);
  const items = gildedRose.newDay();
  expect(items[0].quality).toEqual(80);
});

/* CONJURED ITEMS */

it("should return 23 for Conjured item (quality -2) ", () => {
  const gildedRose = new Shop([ new Conjured("Conjured", 2, 25) ]);
  const items = gildedRose.newDay();
  expect(items[0].quality).toEqual(23);
});


/* BACKSTAGEPASSES ITEMS */


it("should return 50 for Backstage passes item (max quality = 50) ", () => {
  const gildedRose = new Shop([ new BackstagePasses("Backstage passes", 2, 70) ]);
  const items = gildedRose.newDay();
  expect(items[0].quality).toEqual(50);
});

it("should return 28 for Backstage passes item (if sellIn <= 5 && > 0 --> quality +3) ", () => {
  const gildedRose = new Shop([ new BackstagePasses("Backstage passes", 2, 25) ]);
  const items = gildedRose.newDay();
  expect(items[0].quality).toEqual(28);
});

it("should return 27 for Backstage passes item (if sellIn <= 10 && > 5 --> quality +2) ", () => {
  const gildedRose = new Shop([ new BackstagePasses("Backstage passes", 7, 25) ]);
  const items = gildedRose.newDay();
  expect(items[0].quality).toEqual(27);
});

});