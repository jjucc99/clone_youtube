import express from 'express';
import routes from '../routes';
import {
    postUpload,
    videoDetail,
    getEditVideo,
    postEditVideo,
    deleteVideo,
    getUpload
} from "../controllers/videoController";

import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//Upload video
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;

