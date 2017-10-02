
var fs = require("fs");

var BasicCard = function(front, back) {
 this.front = front;
 this.back = back;
 this.save = function() {

 	var data = {
 		front: this.front,
 		back: this.back,
 		type: "basic",

 	};
 	fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(err){
 		if (err) {
 			console.log(err basic);
 		}
 	});
 };
}


// Exports BasicCard constructor, required in ClozeCard.js.
module.exports = BasicCard;