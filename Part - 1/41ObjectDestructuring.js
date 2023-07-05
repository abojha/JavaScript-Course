// Object Destructuring

// const band = {
//   bandName: "Sanam",
//   famousSong: "Kahin Door",
//   year:1968,
//   anotherFamousSong: "Dil Kya Kare"
// };

// Get values from Object into Variables
// const bandName = band.bandName 
// const famousSong = band.famousSong
// console.log(bandName, famousSong) //Sanam Kahin Door

// Short-Cut to Get Values from Object into Variables
// const {bandName, famousSong} = band // variable name must be same as key
// console.log(bandName, famousSong) //Sanam Kahin Door
// const {bandName:var1, famousSong:var2} = band // variable name will be var1 and var2
// console.log(var1, var2) //Sanam Kahin Door

// const { bandName, famousSong, ...restProps } = band; //Rest Object will be store in restProps Object
// console.log(restProps) //{ year: 1968, anotherFamousSong: 'Dil Kya Kare' }