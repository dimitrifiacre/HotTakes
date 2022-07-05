// On importe le package
const multer = require("multer");

// On définit les extensions des images par rapport aux mimetypes des images
const MimeTypes = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

// On définit la destination et le nom de l'image
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const extension = MimeTypes[file.mimetype];
    const name = file.originalname
      .split("." + extension)
      .join("-")
      .split(" ")
      .join("_");

    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage }).single("image");
