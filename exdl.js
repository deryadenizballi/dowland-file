const https = require("https");
const fs = require("fs");
const path = require("path");

function dowlandFile(url, callback) {
  const fileName = path.basename(url);
  const req = https.get(url, function (res) {
    const fileStream = fs.createWriteStream("photo.jpeg");
    res.pipe(fileStream);

    fileStream.on("error", function (err) {
      console.log("error writtind");
      console.log(err);
    });

    fileStream.on("finish", function () {
      fileStream.close(callback);
      console.log("done");
    });
  });

  req.on("error", function (err) {
    console.log("error writtind");
    console.log(err);
  });
}

dowlandFile(
  "https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg" , function(){
      console.log("1.photo","dowlanded");
  }
);

dowlandFile(
  "https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg"
);
