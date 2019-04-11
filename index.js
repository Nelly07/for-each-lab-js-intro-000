function iterativeLog(array){
  array.forEach((element,index) => {
    console.log(`${index}: ${element}`);
  })
}
function iterate(callback){
  const array=[1,2,3];
  return(array.forEach(callback));
}
