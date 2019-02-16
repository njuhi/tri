<<<<<<< HEAD
var triangle = function() {
  var base = parseint(document.getElementById('base').value);
  var side = parseint(document.getElementById('side').value);
  var hypotenuse = parseint(document.getElementById('hypotenuse').value);
     if( base == side && side == hypotenuse);
      {
         alert("equilateral");
       }
      else (base==side || side<hypotenuse || hypotenuse>base);
      {
        alert("isoceles");
      }
    };
=======
//******************************
var triangle = function() {
  var base = parseint(document.getElementById('base').value);
  var side = parseint(document.getElementById('side').value);
  var hypotenuse = parseint(document.getElementById('hypotenuse').value);
    if( base == side && base == hypotenuse);
    {
      alert("equilateral");
    }
     else (base==side || side<hypotenuse || hypotenuse>base);
    {
      alert("isoceles");
    }
  };
>>>>>>> triangle-tracker
