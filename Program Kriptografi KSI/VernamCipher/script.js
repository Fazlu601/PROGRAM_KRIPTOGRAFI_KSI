//For Binary

/*
function vernam(){
  var ip = document.getElementById("input").innerHTML.split("");
  for (var i=0; i<ip.length; i++) {
      ip[i] = Number(ip[i]);
  }
  var key = []; 
  for (var i=0; i<ip.length; i++) {
      key.push(Math.round(Math.random()));
  }
  document.getElementById("key").innerHTML = key.join("");
  var cipher = [];
  for (var i=0; i<ip.length; i++) {
      cipher.push(ip[i] ^ key[i]);
  }
  document.getElementById("output").innerHTML = ""+cipher.join("");
}
vernam();
*/  
function BinToText(input) {
    return parseInt(input,2).toString(10);
} 
//For Text
function vernam(){
  var ip2 = document.getElementById("input").value;
  var ip=[];
  for (var i=0; i<ip2.length; i++) {
      var temp = ip2.charCodeAt(i).toString(2);
    for(var j=0;j<temp.length;j++){
      ip.push(Number(temp[j]));
    }
  }
  var key = []; 
  for (var i=0; i<ip.length; i++) {
      key.push(Math.round(Math.random()));
  }
  document.getElementById("key").innerHTML = key.join("");
  var cipher = [];
  for (var i=0; i<ip.length; i++) {
      cipher.push(ip[i] ^ key[i]);
  }
  cipher = cipher.join("");
  var op = [];
  for(var i=0;i<cipher.length;i=i+7){
    op.push(BinToText(cipher.slice(i,i+7)));
  }
  document.getElementById("output").innerHTML = ""+op.join(" ");
}


const texta = document.querySelectorAll('.boxTex');
const reset = document.querySelector('#reset');

reset.addEventListener('click', (e)=>{
    e.preventDefault();
    
    [].forEach.call(texta, function(textarea) {
        // do whatever
        textarea.value = "";
      });

})

