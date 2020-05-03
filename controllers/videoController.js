//render 메소드는 자동으로 views 라는 폴더에서 입력값과 같은 파일을 찾는다. 
import { videos } from '../db'

export const home = (req, res) => 
    res.render("home",{pageTitle: 'home', videos});

export const search = (req, res) => {
    const {query: { term : searchingBy}} = req;
    res.render("search",{pageTitle: 'search', searchingBy, videos})}
    
export const upload = (req, res) => 
    res.render("upload",{pageTitle: 'upload'});

    export const videoDetail = (req, res) => 
res.render("videoDetail",{pageTitle: 'videoDetail'});

export const editVideo = (req, res) => 
    res.render("editVideo",{pageTitle: 'editVideo'});

export const deleteVideo = (req, res) => 
    res.render("deleteVideo",{pageTitle: 'deletVideo'});
    