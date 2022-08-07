// Given a string s, find the length of the longest substring without repeating characters.

// const find=(s,r,i,max,result)=>{
//     console.log(r)
// if(result.has(r.join())) return result.get(r.join())

// if(i<0) return Math.max(r.length,max)
// if(r.indexOf(s[i])>-1) return Math.max(r.length,max)

// r.push(s[i])
// let res=find(s,r,i-1,max,result)
// r=[]
// let res1=i>1?find(s,r,i-1,max,result):0
// result.set(r.join(),Math.max(res,res1))
// return result.get(r.join())
// }

let string = "aabaab!bb";
// let result=new Map()
// console.log(find(string.split(''),[],string.length-1,0,result))

const find = (s) => {
  let stringArr = s.split("");
  let test = "";
  let maxLength = -1;
  if (s.length < 2) {
    return s.length;
  }

  for (let i = 0; i < stringArr.length; i++) {
    let current = stringArr[i];
    if (test.indexOf(current) > -1) {
      test = test.substring(test.indexOf(current) + 1);
    }
    test = test + current;
    maxLength = Math.max(test.length, maxLength);
  }
  return maxLength;
};

console.log(find(string));
