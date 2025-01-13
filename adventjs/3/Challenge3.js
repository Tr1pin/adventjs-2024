const inventory = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ]

function organizeInventory(inventory) {
    const result = {};

    inventory.forEach(item => {
        const { category, name, quantity } = item;//Desestructuración
        
        
        if (!result[category]) {
            result[category] = {};
        }


        //result[category][name] = (result[category][name] || 0) + quantity;
        if(result[category][name]){

            result[category][name] += quantity;
        }else{
            result[category][name] = quantity;
        }
         
    });

    
    return result;
}

