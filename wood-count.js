//  perchair wood 3cpt, table wood 5cpt, furniture wodd 10cpt. if you need 10 chair , 20table, 30 furniture calculate how much wood you need 

function woodCalculate(chairQuantity, tableQuantity, furnitureQuantity) {
    const chairWood = 3;
    const tableWood = 5;
    const furnitureWood = 10;
    const totalChairWood = chairWood * chairQuantity;
    const totalTableWood = tableWood * tableQuantity;
    const totalFurnitureWood = furnitureWood * furnitureQuantity;
    const totalWood = totalChairWood + totalTableWood + totalFurnitureWood;
    return totalWood;
}

const chair = 20;
const table = 10;
const furniture = 12;
const needTotalWood = woodCalculate(chair, table, furniture);
console.log(needTotalWood)