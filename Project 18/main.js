var travelWishList = ["Japan", "Italy", "Peru", "Iceland", "New Zealand"];
console.log("\nOriginal list:");
console.log(travelWishList);
console.log("\nAlphabetical order (sorted copy):");
var sortedList = travelWishList.slice().sort();
console.log(sortedList);
console.log("\nOriginal list (unchanged):");
console.log(travelWishList);
console.log("\nReverse alphabetical order (sorted copy):");
sortedList.sort().reverse();
console.log(sortedList);
console.log("\nOriginal list (unchanged):");
console.log(travelWishList);
travelWishList.reverse();
console.log("\nReversed list:");
console.log(travelWishList);
travelWishList.reverse();
console.log("\nOriginal order restored:");
console.log(travelWishList);
travelWishList.sort();
console.log("\nSorted list (alphabetical):");
console.log(travelWishList);
travelWishList.sort().reverse();
console.log("\nSorted list (reverse alphabetical):");
console.log(travelWishList);
