function createmulti (factor){
  return function (number){
    number * factor
  }
}

//function 
function createvalid(minlenght){
  return function(input){
    return input.lenght >= minlenght;
  }
}


