const express = require('express');
const moment = require('moment');
const request = require('request');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

const DATA_VOLUME_BASE = '/data';

const currDate = moment().local().format('YYYY-MM-DD');
const logFilePath = '/logs/';
const logFile = 'log_' + currDate + '.txt';

app.use(bodyParser.json({limit: '10mb'}));

const PORT = process.env.PORT || 8012;

app.get('/', (req, res) => {
    let ts = moment().local().format('YYYY-MM-DD h:mm a');
    console.log("Got hit "+moment().local().format('YYYY-MM-DD h:mm a'));
    requestToExternalNetwork(req, res, ts);
});

app.get('/ping', (req, res) => {
    const c1 = req.query.c1;
    const p1 = req.query.p1;
    const c2 = req.query.c2;
    const p2 = req.query.p2;
    console.log('req.query = '+JSON.stringify(req.query));
    console.log("ping hit "+moment().local().format('YYYY-MM-DD h:mm a'));
    setTimeout(() => {requestToInternalNetwork(c1, p1, c2, p2, res);}, 1000);
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT : ${PORT}`);
});




async function requestToExternalNetwork(req, res, ts){
    const url = 'https://official-joke-api.appspot.com/random_joke';
    const list = 'https://official-joke-api.appspot.com/random_ten';
    request(url, (error, response, body) => {
        console.log('error = '+JSON.stringify(error));
        console.log('response = '+JSON.stringify(response));
        console.log('body = '+JSON.stringify(body));
        if(typeof body === 'string'){
            body = JSON.parse(body);
        }
        const message = body.setup + " => " + body.punchline;
        // let path = DATA_VOLUME_BASE + logFilePath;
        let path = __dirname + '/..'+DATA_VOLUME_BASE + logFilePath;
        console.log('path = '+path);

        fs.promises.mkdir(path, { recursive: true }).catch(console.error).then(()=>{
            fs.appendFile(path+logFile, ts+' :::: '+message+'\n', (error) => {
                if(error){
                    console.log('file write error = '+JSON.stringify(error));
                }
                res.json({
                    message : message+" "+moment().local().format('YYYY-MM-DD h:mm a'),
                });
            });
        });

    });
}

async function requestToInternalNetwork(c1, p1, c2, p2, res){
    const url = `${c2}:${p2}/ping?c1=${c2}&c2=${c1}&p1=${p2}&p2=${p1}`;
    console.log('url = '+JSON.stringify(url));
    request(url, (error, response, body) => {
        console.log('error = '+JSON.stringify(error));
        console.log('response = '+JSON.stringify(response));
        console.log('body = '+JSON.stringify(body));
        res.json({
            message : "Response from c1 "+moment().local().format('YYYY-MM-DD h:mm a'),
        });
    });
}