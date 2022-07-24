const Koa = require('koa');			   // 导入koa包
const serve = require('koa-static');   // 导入koa-static包
// const serve = require('./static')
const path=require('path');            // 导入path包 用于拼接路径
const app = new Koa();				   // 创建koa实例对象
const port = 9000;
// app.use(serve(path.join(__dirname),  // 开放的文件夹 __dirname为当前运行文件的目录  目前看来 只能开放文件夹 无法开放单独一个文件
// 	{
//   		index:true,       // 默认为true  访问的文件为index.html  可以修改为别的文件名或者false
//   		hidden:false,      // 是否同意传输隐藏文件
//   		defer:true,		   // 如果为true，则在返回next()之后进行服务，从而允许后续中间件先进行响应
// 	}
// ))
app.use(serve('./'), {
    index: true
})
app.listen(port , () => {
    console.log(`server is running on http://localhost:9000 \n`)
});