import express from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser  from  'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routers from './routes';
import routes from "./routes";

const app = express()

//pug을 쓰기 위해 epress 설정을 다듬는다.
//pug는 view engine 중 하나로 사용하기 위해선 views 라는 이름의 파일과 
//res.render 메소드가 필요하다.
app.set('view engine','pug');


//입력값을 분석하는 미들웨어 -- form data
app.use(bodyParser.urlencoded({extended: true }))
//입력값을 분석하는 미들웨어 -- json
app.use(bodyParser.json())
//현재 네트워크 상황을 알려주는 미들웨어
app.use(morgan('dev'))
//네트워크 보안을 강화해 주는 미들웨어
app.use(helmet());
//쿠키를 분석하는 미들웨어
app.use(cookieParser());



app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routers.videos, videoRouter);

export default app;