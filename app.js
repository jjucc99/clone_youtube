import express from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser  from  'cookie-parser';
import bodyParser from 'body-parser';

const app = express()

const handleHome = (req, res) => res.send(`hello from my ass`)

const handleProfile = (req, res) => res.send("you are on my profile");

//입력값을 분석하는 미들웨어 -- form data
app.use(bodyParser.urlencoded({extended: true }))

//입력값을 분석하는 미들웨어 -- json
app.use(bodyParser.json({extended: true }))

//현재 네트워크 상황을 알려주는 미들웨어
app.use(morgan('dev'))

//네트워크 보안을 강화해 주는 미들웨어
app.use(helmet());

app.use(cookieParser());

app.get(`/`, handleHome);

app.get(`/profile`, handleProfile)

export default app;