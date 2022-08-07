var reverse = function(x) {
    let neg=x>0?false:true
    let temp=Math.abs(x)
    let res=0
    
   while(temp!==0){
        res=(res*10)+(temp%10)
        temp=Math.floor(temp/10)
       
    }
    
    res= neg?res*-1:res
    if(res<(-1*2**31) || res>((2**31)+1)){
        return 0
    }
    return res
};

console.log(reverse(36469))