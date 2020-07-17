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


  