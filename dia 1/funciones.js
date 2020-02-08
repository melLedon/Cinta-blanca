function largest(num = [5,7,8,10,98,4]){
    let max=num[0];
    for(let i = 0; i < num.length; i++){
        if(max > num[i+1]){
            max=num[i];
        }
        else{
            max=num[i+1]
        }
 } 
 }