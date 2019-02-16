//******************************
var triangle = function() {
  var base = parsefloat(document.getElementById('base').value);
  var side = parsefloat(document.getElementById('side').value);
  var hypotenuse = parsefloat(document.getElementById('hypotenuse').value);
  if
  ( base == side && base == hypotenuse);
    {
      alert("equilateral");
    }
    else (base==side || side<hypotenuse || hypotenuse>base);
    {
      alert("not equilateral");
    }
  }
