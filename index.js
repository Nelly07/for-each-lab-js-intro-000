function iterativeLog(array){
  array.forEach((element,index) => {
    console.log(`${index}: ${element}`);
  })
}
function iterate(callback){
  var array=["top","skirt","pants"];
  array.forEach(callback =>{
    return array;
  });
}
