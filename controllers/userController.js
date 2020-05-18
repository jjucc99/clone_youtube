//render 메소드는 자동으로 views 라는 폴더에서 입력값과 같은 파일을 찾는다. 
import User from '../models/User'
import routes from "../routes";
import passport from 'passport';

export const getJoin = (req, res) => {
    res.render("join", {pageTitle: 'getJoin'});
}

export const postJoin = async (req, res, next) => {
    const {
        body : {name, email, password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle:'postJoin'});
    } else{
        try {
            const user = await User({
                name,
                email
            });
            await User.register(user, password);
            next()
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
        //to Do: register User
        //to Do: log User in
    }
}

export const getLogin = (req, res) =>
    res.render("login",{pageTitle: 'login'});

export const postLogin = passport.authenticate('local',{
    failureRedirect: routes.login,
    successRedirect: routes.home
})



export const logout = (req, res) => {
    //로그아웃 처리
    res.redirect(routes.home)
}

export const users = (req, res) => 
    res.render("users", {pageTitle: 'users'});

export const userDetail = (req, res) => 
    res.render('userDetail',{pageTitle: 'userDetail'});

export const editProfile = (req, res) => 
    res.render("editProfile", {pageTitle: 'editProfile'});

export const changePassword = (req, res) => 
res.render("changePassword", {pageTitle: 'changePassword'});