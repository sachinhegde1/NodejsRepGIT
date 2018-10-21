var result = 0;
var i = 0;

do {
  if (i % 2 == 0)
    result = i + result ;
   // console.log("i" + i);
   // console.log("result"+ result);
    i = i + 1;
	
  
  } while (i < 4000000);

console.log(result);
console.log(__filename);

