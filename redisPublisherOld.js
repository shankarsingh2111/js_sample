const socketRedis = require('redis').createClient();

socketRedis.on("connect", function(err) {
  socketRedis.connected = true;
  console.log(':::::::::: SOCKET REDIS CONNECTED ::::::::::');
});

socketRedis.on("error", function(err) {
  socketRedis.connected = false;
  console.log(':::::::::: SOCKET REDIS ERRORED ::::::::::', 'Error', err);
});


const article = {
  id: '123456',
  name: 'Using Redis Pub/Sub with Node.js',
  blog: 'Logrocket Blog',
};


for(let i = 0; i < 10; i++){
  setTimeout(()=>{
      socketRedis.publish('REQUEST', JSON.stringify(article), (error, response) => {

        if (error) {
          console.log(':::::::::: SOCKET REDIS ERROR ::::::::::', 'Error', error);
        }
      
        if (response) {
          console.log(':::::::::: SOCKET REDIS RESPONSE ::::::::::', 'Response', response);
        }
      
      });
    }, 1000 * i);  
}