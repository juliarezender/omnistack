const multer = require('multer');
const path = require('path');

module.exports = {
    //  vai salvar o arquivo no diretorio abaixo
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'), // faz com que para passar o caminho de um arquivo, não se use barras e sim virgulas
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
        
            cb(null, `${name}-${Date.now()}${ext}`);
        },

    }),
};