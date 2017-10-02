// require fs
var fs = require("fs");

var ClozeCard = function (text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.clozeDeleted = this.text.replace(this.cloze, '_____');
    this.save = function() {
        var data = {
            text: this.text,
            cloze: this.cloze,
            clozeDeleted: this.clozeDeleted,
            type: "cloze"
        };

        fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(err) {
            if (err) {
                console.log(err cloze);
            }
        });
    };
}

module.exports = ClozeCard;