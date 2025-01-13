function createFrame(names) {
    let result = "";

    let lengths = names.map(name => name.length+4);
    let maxLength = Math.max(...lengths); 
    
    let asterisks = "";
    for (let i = 0; i < maxLength; i++) {
        asterisks+="*";
    }

    let lineName = "";
    for (let i in names) {

        if(names[i].length+4 === maxLength){
            lineName += ("* "+ names[i] +" *\n");   

        }else{
            let spacesNum = maxLength - names[i].length;
            let spaces = "";
            for (let i = 0; i < spacesNum-3; i++) {
                spaces += " ";
            }
            lineName += ("* "+ names[i] +spaces+"*\n");
            
        }
          
    }
    
    result = (asterisks+"\n"+lineName+asterisks);

    return result;
     
}

createFrame(['a', 'bb', 'ccc']);
