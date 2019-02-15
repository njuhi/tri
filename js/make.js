//******************************
var triangle = function() {
  var base = parseInt(document.getElementById('base').value);
  var side = parseInt(document.getElementById('side').value);
  var hypotenuse = parseInt(document.getElementById('hypotenuse').value);
  if
  ( base == side && base == hypotenuse);
    {
      alert("equilateral");
    }
    else if (base<side || side>hypotenuse || hypotenuse<side);
    {
      alert("not equilateral");
    }
  }
