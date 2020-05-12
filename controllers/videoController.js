//render 메소드는 자동으로 views 라는 폴더에서 입력값과 같은 파일을 찾는다. 
import routes from "../routes";
import Video from '../models/Video';

export const home = async (req, res) =>{
    try {
        const videos = await Video.find({})
        res.render("home",{pageTitle: 'home', videos});
    } catch (error) {
        console.log(error)
        res.render("home",{pageTitle: 'home', videos : []});
    }
} 

export const search = (req, res) => {
    const {query: { term : searchingBy}} = req;
    res.render("search",{pageTitle: 'search', searchingBy, Videos})}
    
//uploadd의 페이지를 렌더링 하는 get 함수
export const getUpload = (req, res) => 
    res.render("upload",{pageTitle: 'upload'});

//get : upload 페이지가 정보를 전달할 때 받는 post 함수
export const postUpload = async (req, res) => {
    const {
    body: { title, description },
    file: { path }
    } = req;
    // To Do: Upload and save video
    const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
    });
    res.redirect(routes.videoDetail(newVideo.id));
    console.log(newVideo)
};

    export const videoDetail = (req, res) => 
res.render("videoDetail",{pageTitle: 'videoDetail'});

export const editVideo = (req, res) => 
    res.render("editVideo",{pageTitle: 'editVideo'});

export const deleteVideo = (req, res) => 
    res.render("deleteVideo",{pageTitle: 'deletVideo'});
    