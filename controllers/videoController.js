//render 메소드는 자동으로 views 라는 폴더에서 입력값과 같은 파일을 찾는다. 


export const home = (req, res) => res.render("home");
export const search = (req, res) => res.render("Search");
export const videos = (req, res) => res.render("Videos");
export const upload = (req, res) => res.render("Upload");
export const videoDetail = (req, res) => res.render("Video Detail");
export const editVideo = (req, res) => res.render("Edit Video");
export const deleteVideo = (req, res) => res.render("Delete Video");