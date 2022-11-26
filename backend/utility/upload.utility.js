const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, callback) {
    console.log(req.body);
    console.log(req.user._id);
    console.log(file);
    callback(null, './storage/public_images');
  },
  filename(req, file, callback) {
    console.log("Im here");
    console.log(req.body);
    callback(null, "batata");
    console.log(file);
  },
});

const upload = multer({ storage });

module.exports = {
  upload
}
