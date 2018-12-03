var triangle = function() {
    var side1 = document.getElementById('side1').value;
    var side2 = document.getElementById('side2').value;
    var side3 = document.getElementById('side3').value;

    if (side1 + side2 >= side3 && side1 + side3 >= side2 && side2 + side3 >= side1) {
      if (side1 === side2 && side2 === side3 && side1 === side3) {
           document.getElementById("display").innerHTML = "This is an Equilateral Triangle";
         } else if (side1 === side2 || side2 === side3 || side1 === side3) {
               document.getElementById("display").innerHTML = "This is an Isosceles triangle";
             } else {
                   document.getElementById("display").innerHTML = "This is an Scalene triangle";
                 }
    } else {
        document.getElementById("display").innerHTML = "This is not a triangle!";
      }
    };
