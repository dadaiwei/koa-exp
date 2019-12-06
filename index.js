const Koa = require('koa');
const router = require('./router/index')

const app = new Koa();
app.use(router.routes())

app.listen(3000);
console.log('server is start at port 3000.')