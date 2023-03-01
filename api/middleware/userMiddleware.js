const fs = require("fs");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const sec = "Aarfeen";

exports.data = multer({
  storage: multer.diskStorage({
    destination: async function (req, file, cb) {
      let dir = "./uploadsImages/" + req.id;
      if (!fs.existsSync(dir)) {
        await fs.mkdirSync(dir, { recursive: true }, (err) => {});
      }
      cb(null, dir);
    },

    filename: function (req, file, cb) {
      console.log(file);
      let extenstion = file.originalname.split(".");
      let profile = file.fieldname + "-" + Date.now() + "." + [extenstion[1]];
      req.img = profile;

      cb(null, file.fieldname + "-" + Date.now() + "." + [extenstion[1]]);
    },
  }),
});

exports.auth = (req, res, next) => {
  console.log("goli");
  const authHeader = req.headers.token;
  if (!authHeader) {
    return res.status(401).send("Access denied. No token provided.");
  } else {
    jwt.verify(authHeader, sec, (err, data) => {
      if (data.id) {
        console.log(data.id);
        req.id = data.id;
        next();
      } else {
        res.status(400).json({ err });
      }
    });
  }
};
