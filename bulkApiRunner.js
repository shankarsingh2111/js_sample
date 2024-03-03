const request = require('request');
const Promise = require('bluebird');

function sendRequestToAnyServer(method, url, body, callback){
    var dupBody = body;
    var options = {
        url     : url,
        method  : method || 'POST',
        body    : body,
        json    : true,
        rejectUnauthorized : false,
        timeout : 5000,
        gzip    : true,
        headers : {
            'Content-Type': 'application/json; charset=utf-8'
        }
    };

    if(body.qs){
        options.qs = body.qs;
        delete body.qs;
    }

    if(body.method){
        options.method = body.method;
        delete body.method;
    }

    if(body.set_timeout_explicit){
        options.timeout = body.set_timeout_explicit;
        delete body.set_timeout_explicit;
    }

    if(body.header_explicit){
        options.headers = body.header_explicit;
        delete options.body.header_explicit;
    }
    console.log("inside sendRequestToAnyServer");

    request(options, function(error, response, body){
        if(error || (response.statusCode != '200' && response.statusCode != '201')){
            if(dupBody.logging_enabled){
                console.error({error: error}, {BODY : body});
            }

            callback(new Error('Failure from url : ' +  url), null);
        }
        else{
            console.log({BODY : body});

            callback(null, body);
        }
    });
}


const url = 'http://localhost:8012/'

async function runInParallel(){
    Promise.coroutine(function* (){
        let total = 10;
        let batch = 2;
        
        let count = 0;
        while(count < total){
            let funcs = [];
            for(let i = 0; i<batch; i++){
                funcs.push(getPromise);
            }
            console.log("funcs.length = ", funcs.length);
            yield Promise.map(funcs, func => {
                console.log("inside map ");
                return func();
            }, { concurrency: batch });
    
            count += batch;
        }
        
    })();
}

const getPromise = () => {
    console.log("inside getPromise");
    return Promise.promisify(sendRequestToAnyServer)('GET', url, {});
}

runInParallel();