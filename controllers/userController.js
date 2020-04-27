//render 메소드는 자동으로 views 라는 폴더에서 입력값과 같은 파일을 찾는다. 

export const join = (req, res) => res.render("Join");
export const login = (req, res) => res.render("Login");
export const logout = (req, res) => res.render("Logout");
export const users = (req, res) => res.render("Users");
export const userDetail = (req, res) => res.render("User Detail");
export const editProfile = (req, res) => res.render("Edit Profile");
export const changePassword = (req, res) => res.render("Change Password");