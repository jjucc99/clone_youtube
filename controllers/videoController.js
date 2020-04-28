//render 메소드는 자동으로 views 라는 폴더에서 입력값과 같은 파일을 찾는다. 


export const home = (req, res) => res.render("home");
export const search = (req, res) => res.render("search");
export const videos = (req, res) => res.render("videos");
export const upload = (req, res) => res.render("upload");
export const videoDetail = (req, res) => res.render("videoDetail");
export const editVideo = (req, res) => res.render("editVideo");
export const deleteVideo = (req, res) => res.render("deleteVideo");