const combSum=(arr,result,i,target)=>{
  
     if(i>=arr.length){
       
        if(target===0){
           console.log(result)
        }
        return
     }

     if(arr[i]<=target){
        
       result.push(arr[i])
       combSum(arr,result,i,target-arr[i])
       result.pop()
     }
     combSum(arr,result,i+1,target)
}

combSum([1,2,5,3],[],0,5)