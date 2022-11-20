const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, '../storage/public_images');
  },
  filename(req, file, callback) {
    callback(null, req.user._id.toString());
  },
});

const upload = multer({ storage });

module.exports = {
  upload
}
