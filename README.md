# React Native Develop SDK

配合[`RNDevServer`](https://github.com/SecretCastle/RNDevServer)使用, 或自己搭建websocket服务器

## Before

*尽量在Mac下跑， windows下的话，暂时没试*


> MacOS需要安装的

* react-native-debugger

![](http://oxzz0e76z.bkt.clouddn.com/100609.png)

安装方法 [https://github.com/jhen0409/react-native-debugger](https://github.com/jhen0409/react-native-debugger)

* Expo

![](http://oxzz0e76z.bkt.clouddn.com/100729.png)

手机上安装Expo，调试React-Native项目

* create-react-native-app

```
yarn add global create-react-native-app
// or 
npm install create-react-native-app -g

$ create-react-native-app projectname
cd project name
npm start
```


> 开始使用

* 启动服务器
* 启动项目

    ```
    $ open "rndebugger://set-debugger-loc?host=localhost&port=8081"
    
    // 8081为默认端口，实际按情况定
    ```
* 打开 `Debug JS Remote`即可在`react-native-debugger`看到log



## 接口说明

遵循阿里智能SDK的api语法

* 获取推送数据

```
SDK.DataBridge.bindPushData(data => {
    // data 
}) 
```
