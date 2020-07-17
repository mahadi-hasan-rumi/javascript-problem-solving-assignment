function feetToMile(feet){
    const mile = feet / 5280;
    return mile;
}
const result = feetToMile(500000);
console.log(result);


function woodCalculator(chair, table, bed){
    const chairMeasurment = chair * 1;
    const tableMeasurment = table * 3 * 3 * 3;
    const bedMeasurment = bed * 5 * 5 * 5;
    const totalMeasurment = chairMeasurment + tableMeasurment + bedMeasurment;
    return totalMeasurment;
}
const total = woodCalculator(2, 3, 4)
console.log(total);


function brickCalculator(floor){
    if(floor <= 10){
        var feet1 = floor * 15;
        var brick = feet1 * 1000;
    }
    else if(floor <= 20){
        var feet2 = floor * 12;
        var brick = feet2 * 1000;
    }
    else if(floor > 20){
        var feet3 = floor * 10;
        var brick = feet3 * 1000;
    }
    return brick;

}
 



  function tinyFriend(name){
      let shortest = name[0];
      for (let i = 0; i <name.length; i++) {
          let currentName = name[i];
          if(currentName > shortest){
            shortest = currentName;
          }
      }
      return shortest;
  }

  const shortestOne = tinyFriend(['rumi', 'jamal', 'jubair'])
  console.log(shortestOne)


  