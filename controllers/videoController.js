//render 메소드는 자동으로 views 라는 폴더에서 입력값과 같은 파일을 찾는다. 
import { videos } from '../db'
import routes from "../routes";

export const home = (req, res) => 
    res.render("home",{pageTitle: 'home', videos});

export const search = (req, res) => {
    const {query: { term : searchingBy}} = req;
    res.render("search",{pageTitle: 'search', searchingBy, videos})}
    
export const getUpload = (req, res) => 
    res.render("upload",{pageTitle: 'upload'});


export const postUpload = (req, res) => {
    const { body : { file, title, description } } = req;
    res.redirect(routes.videoDetail(1235));
    // to do upload and save video
}

    export const videoDetail = (req, res) => 
res.render("videoDetail",{pageTitle: 'videoDetail'});

export const editVideo = (req, res) => 
    res.render("editVideo",{pageTitle: 'editVideo'});

export const deleteVideo = (req, res) => 
    res.render("deleteVideo",{pageTitle: 'deletVideo'});
    