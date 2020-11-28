let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW
tacoCatInc.currentInventory = function() {
  let inventoryValue = 0;

  for(ingredients in this) {
    if(ingredients === 'cash') continue;

    let ingredientObj = this[ingredients];

    for(choices in ingredientObj) {
      let choiceObj = ingredientObj[choices];

      inventoryValue += choiceObj.cost * choiceObj.quantity;
    }
  }

  return inventoryValue;
}

tacoCatInc.sale = function(order) {
  let cost = 0;
  
  for(ingredients in order) {
    cost += this[ingredients][order[ingredients]].cost;
    this[ingredients][order[ingredients]].quantity--;
  }

  this.cash += cost;

  return cost;
}