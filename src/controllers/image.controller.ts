import path from 'path';
import {Post, JsonController, UploadedFile} from 'routing-controllers';

import {ImageService} from '../services/image.service';
import {Service} from 'typedi';

// const fileUploadOptions = {
//     storage: multer.diskStorage({
//         destination: (req: any, file: any, cb: any) => {
//             cb(null, path.join(__dirname, '../../public/upload/images'));
//         },
//         filename: (req: any, file: any, cb: any) => {
//             cb(null, file.originalname);
//         },
//     }),
//     limits: {
//         fieldNameSize: 255,
//         fileSize: 1024 * 1024 * 5,
//     },
// };

@JsonController()
@Service()
export class ImageController {
    private imageService: ImageService;

    constructor() {
        this.imageService = new ImageService();
    }

    // @Post('/image')
    // saveFile(@UploadedFile('file', {options: fileUploadOptions}) file: any) {
    //     console.log(file);
    // }
}
