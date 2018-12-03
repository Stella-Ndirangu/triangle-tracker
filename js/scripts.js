var triangle = function() {
  var side1 = parseInt(document.getElementById('side1').value);
  var side2 = parseInt(document.getElementById('side2').value);
  var side3 = parseInt(document.getElementById('side3').value);

  if (side1 > 0 && side2 > 0 && side3 > 0){
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
