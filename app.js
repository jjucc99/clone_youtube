import express from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser  from  'cookie-parser';
import bodyParser from 'body-parser';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express()

//pug을 쓰기 위해 epress 설정을 다듬는다.
//pug는 view engine 중 하나로 사용하기 위해선 views 라는 이름의 파일과 
//res.render 메소드가 필요하다.
app.set('view engine','pug');


//네트워크 보안을 강화해 주는 미들웨어
app.use(helmet());
//입력값을 분석하는 미들웨어 -- form data
app.use(bodyParser.urlencoded({extended: true }))
//입력값을 분석하는 미들웨어 -- json
app.use(bodyParser.json())
//현재 네트워크 상황을 알려주는 미들웨어
app.use(morgan('dev'))
//쿠키를 분석하는 미들웨어
app.use(cookieParser());
// static === front end 작업을 노드 js와 연결하는 파일
app.use('/static', express.static('static'))

//만약 누군가 Video에 접근 했을 때 저장소에서 파일을 보내주는
//미들웨어
app.use('/uploads', express.static('uploads'))

//grobal value을 local value로 접근하게 해주는 변수
app.use(localsMiddleware);




app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;