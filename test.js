// const fs = require('fs');

// const commandFiles = fs.readdirSync('./komi').filter(file => file.endsWith('.png'));

// var item = Math.floor(Math.random()*commandFiles.length);

// var randomimage = `./komi/${commandFiles[item]}`

// console.log(randomimage.split("./komi/")[1])
// //console.log(randomimage.substring(randomimage.indexOf('/')+6))

// var lastThreeImages = [];
// function assignRandomImage(){
//     var commandFiles = fs.readdirSync('./komi').filter(file => file.endsWith('.png'));
//     var item = Math.floor(Math.random()*commandFiles.length);
//     var randomimage = `./komi/${commandFiles[item]}`
// 	lastThreeImages.push(randomImage)
// 	if (lastThreeImages.indexOf(randomImage) > -1) {
//         if(lastThreeImages.length == 10){
//             lastThreeImages = []
//         }
//         return randomimage
//     } else {
//         assignRandomImage()
//     }
// }



// var lastThreeImages = [];
// function assignRandomImage(){
//     var commandFiles = fs.readdirSync('./komi').filter(file => file.endsWith('.png'));
//     var item = Math.floor(Math.random()*commandFiles.length);
//     var randomimage = `./komi/${commandFiles[item]}`
// 	lastThreeImages.push(randomimage)
// 	if(lastThreeImages.length > 10){
// 		lastThreeImages = [];
// 	}
// 	for (let i = 0; i < lastThreeImages.length; i++) {
//         if(lastThreeImages[i] == randomimage){
// 			commandFiles = fs.readdirSync('./komi').filter(file => file.endsWith('.png'));
// 			item = Math.floor(Math.random()*commandFiles.length);
// 			randomimage = `./komi/${commandFiles[item]}`
// 		}
//     }
// 	console.log(randomimage)
// 	console.log(lastThreeImages)
//     return randomimage
// }

farts = ["fart1", "fart2", "fart3"]

if (farts.indexOf("fart2") == -1) {
    console.log("not in there")

} else {
    console.log("in there")
}