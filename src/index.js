module.exports = function zeros(expr) {
  var factorial = expr;    // "99!*99!!*100!*100!!"
  var result = BigInt(1);
  var k = BigInt(0);
  for(let i = 0; i < factorial.length; i++){
    var nmbr;
    if(factorial.length <= 2){
      nmbr = +factorial[i];
      i = i + 1;
    } else if(factorial[i] !== "!" && factorial[1] !== "!" && factorial[2] !== "!") {
      let strng = factorial[i] + factorial[i+1] + factorial[i+2];
      nmbr = +strng;
      i = i + 3;
    } else if(factorial[i] !== "!" && factorial[i+1] !== "!") {
      let strng = factorial[i] + factorial[i+1];
      nmbr = +strng;
      i = i + 2;
    } else if(factorial[i] !== "!") {
      nmbr = +factorial[i];
      i = i + 1;
    }
    let nmbrBigInt = BigInt(nmbr);
    if(factorial[i] && factorial[i+1] == "!"){
      if((nmbr % 2) == 0){
        for(let k = nmbrBigInt; k >= 2; k=k-2n){
          result = k * result;
        }
      } else {
        for(let k = nmbrBigInt; k >= 1; k=k-2n){
          result = k * result;
        }
      }
      i=i+2;
    } else {
      if((nmbr % 10) == 0){
        for(k = nmbrBigInt; k >= 2; k=k-1n){
          result = k * result;
        }
      } else {
        for(k = nmbrBigInt; k >= 3; k=k-1n){
          result = k * result;
        }
      }
      i=i+1;
    }
  }
  let count = 0;
  resultString = result.toString();
  for(i = 0; i < resultString.length; i++){
    if(resultString[i] == "0"){
      count++;
    } else {
      count = 0;
    }

  }
  return count;
}
