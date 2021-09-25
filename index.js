// const express = require('express');
import express,{Router} from 'express'; //if latest version of node js is installed i.e. 14.17.0*
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
//post api ki body ko parse karne k lie

import route from './route/routes.js'

const app = express(); //initialize

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));//it will make sure space ya kuch extra characters na jaye
app.use(cors());
app.use('/',route);

const PORT = 3000;
const URL = 'mongodb+srv://user:codeforinterview@crud.z7vbu.mongodb.net/MERN1HOUR?retryWrites=true&w=majority'; //url to connect with my mongodb

//useNewUrlParser- current url is depricated so mongodb should use new url, useUnifiedTopology- ye mongodb ko ye batata hai ki jo new server discovery hai and jo monitoring engine hai uska use karna hai. useFindAndModify- bydefault use karta so ye use nahi karna
//note- useFindAnyModify is not supported if you are using mongoose version 6+ so remove it.
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port :- ${PORT}`);
    });
}).catch(e => {
    console.log('Error: ', e.message);
});

