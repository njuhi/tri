var triangle = function(){
    var s1 = parseInt(document.getElementById('s1').value);
    var s2 = parseInt(document.getElementById('s2').value);
    var s3 = parseInt(document.getElementById('s3').value);

  if(s1==s2 && s2==s3 && s3==s1){
        alert("equilateral");
    }
    else if (s1===s2 && s2!=s3) {
    alert("isoceles")

  }else if(s2==s3 && s2!=s1)  {
    alert("isoceles")
  }
  else if (s3==s1 && s1==s2) {
    alert("isoceles")
  }else if (s1!==s2 && s1!==s3 && s2!==s3) {
    alert("scalene")
  }

}
triangle();
