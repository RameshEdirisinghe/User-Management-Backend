const app = require('./app');
const port = 3001;
const host = '127.0.0.1';
const server = app.listen(port,host, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port);
});