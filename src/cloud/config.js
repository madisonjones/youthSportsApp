import multer from 'multer';
import cloudinary from 'cloudinary';
import fileUploadMiddleware from './fileUploadMiddleware';

/* your servrer init and express code here */

cloudinary.config({
  cloud_name: 'dqqjczqni',
  api_key: '318571898948274',
  api_secret: 'CwHMePzvFlQtnPaZUUP9o9TNt3c',
});

/**
  * Multer config for file upload
*/

const storage = multer.memoryStorage();
const upload = multer({ storage });
app.post('/files', upload.single('file'), fileUploadMiddleware);