function Encrypt() {
    plaintext = document.getElementById("p").value.toLowerCase().replace(/[^a-z]/g, "");  
    if(plaintext.length < 1){ alert("please enter some plaintext"); return; }    
    var key = document.getElementById("key").value.toLowerCase().replace(/[^a-z]/g, "");  
    var pc = document.getElementById("pc").value.toLowerCase().replace(/[^a-z]/g, "");
    if(pc=="") pc = "x";    
    while(plaintext.length % key.length != 0) plaintext += pc.charAt(0);    
    var colLength = plaintext.length / key.length;
    var chars = "abcdefghijklmnopqrstuvwxyz"; 
    ciphertext = ""; k=0;
    for(i=0; i < key.length; i++){
        while(k<26){
            t = key.indexOf(chars.charAt(k));
            arrkw = key.split(""); arrkw[t] = "_"; key = arrkw.join("");
            if(t >= 0) break;
            else k++;
        }
        for(j=0; j < colLength; j++) ciphertext += plaintext.charAt(j*key.length + t);
    }
    document.getElementById("c").value = ciphertext;
}

function Decrypt(f) {
    ciphertext = document.getElementById("c").value.toLowerCase().replace(/[^a-z]/g, "");  
    if(ciphertext.length < 1){ alert("please enter some ciphertext (letters only)"); return; }    
    keyword = document.getElementById("key").value.toLowerCase().replace(/[^a-z]/g, ""); 
    klen = keyword.length;
    if(klen <= 1){ alert("keyword should be at least 2 characters long"); return; }
    if(ciphertext.length % klen != 0){ alert("ciphertext has not been padded, the result may be incorrect (incorrect keyword?)."); }
    // first we put the text into columns based on keyword length
    var cols = new Array(klen);
    var colLength = ciphertext.length / klen;
    for(i=0; i < klen; i++) cols[i] = ciphertext.substr(i*colLength,colLength);
    // now we rearrange the columns so that they are in their unscrambled state
    var newcols = new Array(klen);
    chars="abcdefghijklmnopqrstuvwxyz"; j=0;i=0;
    while(j<klen){
        t=keyword.indexOf(chars.charAt(i));        
        if(t >= 0){
            newcols[t] = cols[j++];
            arrkw = keyword.split(""); arrkw[t] = "_"; keyword = arrkw.join("");
        }else i++;         
    }    
    // now read off the columns row-wise
    plaintext = "";
    for(i=0; i < colLength; i++){
        for(j=0; j < klen; j++) plaintext += newcols[j].charAt(i);
    }            
    document.getElementById("p").value = plaintext;    
}