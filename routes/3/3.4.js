/*console.time方法与console.timeEnd方法*/
console.time("time");
for (var i=0;i<20;i++){
    console.log(i);
}
console.timeEnd("time");