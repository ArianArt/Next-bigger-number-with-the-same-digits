function nextBigger(n){
  //your code here
  let stringN = n.toString();
  let sortedStringN = stringN.split('').sort(function(a, b){return a - b}).join('')
  if(sortedStringN.length == 1)
    return -1;
  if(stringN.split('').sort((a, b) => {return b - a}).join('') == stringN)
    return -1;
  
  while(true)
  {
    n++;
    stringN = n.toString();
    if(stringN.split('').sort((a, b) => {return a - b}).join('') == sortedStringN)
      {
        return Number(stringN);
      }
  }
}
