var re = new RegExp('號$');
// {address:{$regex:/\d+號/}}
let gg = "新北市新莊區新莊路107號".replace(/\d+號/g, "");

console.log(gg);