//render 메소드는 자동으로 views 라는 폴더에서 입력값과 같은 파일을 찾는다. 

export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");
export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render('userDetail');
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");