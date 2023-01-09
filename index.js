// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    let blocks = Math.abs(number - 42);

    return blocks;
}

function distanceFromHqInFeet(number) {
    return (distanceFromHqInBlocks(number)) * 264
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }


function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let distance = Math.abs(start - destination) * 264;
    return distance
  }

  function calculatesFarePrice(start, destination) {
    const calcFeet = distanceTravelledInFeet(start, destination);
    let price
    if (calcFeet <= 400) {
        price = 0;
    }
        else if (calcFeet > 400 && calcFeet < 2000) {
            price = (calcFeet - 400) * 0.02
        }
        else if (calcFeet > 2000 && calcFeet < 2500) {
            price = 25
        }
        else if (calcFeet > 2500) {return "cannot travel that far"};

    return price;

     
  }

