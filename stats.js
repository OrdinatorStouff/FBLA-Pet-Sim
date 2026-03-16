const HUNGER_BAR = 100;
const CLEANESS_BAR = 100;
const HAPPY_BAR = 100;

function main() {

    // variable to name the dog and keep it const
    let amountOfMoney = readInt("How much money do you have? 1-10 only. ");

    for (let i = 0; i <= amountOfMoney;) {
        let listOfItems = readInt("Choose an Item: \n 1. Puppy Paradise. 2. Cosmic Kitten. 3. Carrot Food. 4. Meat Food. 5. Tennis Ball. 6. rope.");

        if (listOfItems == 1) {
            i -= 1;
            let soapBuff= 20;
        } else if (listOfitems == 2) {
            i -= 3;
            soapBuff = 40;
        } else if (listOfitems == 3) {
            i -=2;
            let foodBuff = 10;
        } else if (listOfitems == 4) {
            i -=4;
            foodBuff=30;
        }else if (listOfitems == 5) {
            i -=1;
            let toyBuff = 20;
        }else if (listOfitems == 6) {
            i-=5;
            toyBuff = 50;
        }
    }
    
    
    
    let soap = readString("Select a soap: \n Puppy Paradise or Cosmic Kitten?");



    if (soap.toUpperCase = "PUPPY PARADISE") {
        let soapBarBuff = 10;
    } else if (soap.toUpperCase = "COSMIC KITTEN") {
        soapBarBuff = 30;
    } else if (soap.toUpperCase != "1234567456") {
        console.log("Please select again that is not a soap");
    }

    for (let i = 0; i <= CLEANESS_BAR; i = i + soapBarBuff) {

    }
    // If the bars reach 50 so message that says the dog is hungry, sad, and dirty
    // if the bars reach 0 say the dog is starving, depressed, and filthy
}

main();