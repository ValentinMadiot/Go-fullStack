//*--------------------------------------------------------------------------------
//*------------------------------------ MULTER ------------------------------------
//*--------------------------------------------------------------------------------

//* APPEL/IMPORT MULTER
const multer = require('multer')

//* TYPES D'IMAGES ACCEPTE
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpeg',
  'image/png': 'jng'
}

//* STOCKAGE DE L'IMAGE 
const storage = multer.diskStorage ({
  destination: (req, file, callback) => {
    callback(null, 'images')
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_')
    const extension = MIME_TYPES[file.mimetype]
    callback(null, name + Date.now() + '.' + extension)
  }
})

//* EXPORT DE L'IMAGE STOCKE
module.exports = multer({ storage }).single('image')