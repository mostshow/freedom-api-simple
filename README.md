# freedom-api-simple
>freedom-api示例
## 运行步骤
1. 启动接口服务器server
    cd server
    npm install
    npm run start
2. 启动freedom-api-server
    cd freedom-api-server
    npm install 
    npm run start
3. 打开客户端页面
    cd client/src
    点开src/*.html，可以查看效果
    如果全部在一台机器上跑，传统的请求方式，和freedom-api合并后的请求方式没有区别，有条件的话，将两个server部署到同一台服务器，然后客户端界面拷贝到另一台机器上（不在局域网中更好，记得修改页面主机变量），再进一步，把页面拷贝到手机上，用3g/4g网络试试看