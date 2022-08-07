const sub=(arr,result,index)=>{
     if(index>=arr.length){
        console.log(result)
        return
     }

     result.push(arr[index])
     sub(arr,result,index+1)
     result.pop()
     sub(arr,result,index+1)
}

sub([3,1,2],[],0)