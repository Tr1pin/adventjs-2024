function removeSnow(s) {
    let cont = 0;
    s = s.split('');
    
    while(cont < s.length ){      
      if(s[cont+1] === s[cont]){
        s.splice(cont, 2);
        cont = 0;  
      }else{
        cont++;
      }
    }

    s = s.join('');
    return s;
}
  
console.log(removeSnow('aaabccddd')); // 'abd'