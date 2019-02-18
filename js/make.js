var triangle = function(){
    var s1 = parseInt(document.getElementById('s1').value);
    var s2 = parseInt(document.getElementById('s2').value);
    var s3 = parseInt(document.getElementById('s3').value);

  if(s1==s2 && s2==s3 && s3==s1){
        alert("equilateral");
    }
    else {

    alert("not an equilateral");
  }
}
triangle();
