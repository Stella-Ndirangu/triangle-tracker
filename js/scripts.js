var triangle = function() {
  var side1 = parseInt(document.getElementById('side1').value);
  var side2 = parseInt(document.getElementById('side2').value);
  var side3 = parseInt(document.getElementById('side3').value);

  var sides = [];
  sides.push(side1,side2,side3);
  var side1 = sides[0];
  var side2 = sides[1];
  var side3 = sides[2];
  
  if (side1 > 0 && side2 > 0 && side3 > 0) {
    if (side1 + side2 >= side3 && side1 + side3 >= side2 && side2 + side3 >= side1) {
      if (side1 === side2 && side2 === side3 && side1 === side3) {
        document.getElementById("display").innerHTML = "This is an Equilateral Triangle";
      } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        document.getElementById("display").innerHTML = "This is an Isosceles Triangle";
      } else {
        document.getElementById("display").innerHTML = "This is an Scalene Triangle";
      }
    } else {
      document.getElementById("display").innerHTML = "This is not a triangle!";
    };
  } else {
    alert("Values of a triangle have to be greater than 0");
  };
};
