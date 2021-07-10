# Mars3D最简项目模版 - Angular版
    Mars3D平台，在`Angular技术栈下`的最简的应用项目模版。
   

 > 其他技术栈，请参考： [https://github.com/marsgis/mars3d](https://github.com/marsgis/mars3d)
 

## 运行命令
 
### 首次运行前安装依赖
 `npm install` 或 `cnpm install`
 
### http运行项目
 `npm run serve`  运行后访问：`http://localhost:3003/`  

### 打包编译项目
 运行`npm run build`来构建项目。 

### 参考
 https://github.com/Developer-Plexscape/cesium-angular-example

## 运行效果 
 [在线Demo](http://mars3d.cn/project/vue-template/)  

 ![image](http://mars3d.cn/project/vue-template/screenshot.jpg)
 

## 如何集成到自己已有的项目中
1. ### 安装mars3d依赖包
```bash
npm install mars3d   //或  cnpm install mars3d   或  yarn add mars3d
```

2. ### 拷贝文件
 > 场景配置文件：`public\config\config.json`
  

3. ### 配置angular.json 
  参考`angular.json`修改自己项目的配置，主要看`mars3d-cesium`相关代码

4. ### 创建地球 
 参考 `src\app\app.component.ts`文件引入Map组件和构造创建地球 


 

## Mars3D 是什么 
>  `Mars3D平台` 是[火星科技](http://marsgis.cn/)研发的一款基于 WebGL 技术实现的三维客户端开发平台，基于[Cesium](https://cesium.com/cesiumjs/)优化提升与B/S架构设计，支持多行业扩展的轻量级高效能GIS开发平台，能够免安装、无插件地在浏览器中高效运行，并可快速接入与使用多种GIS数据和三维模型，呈现三维空间的可视化，完成平台在不同行业的灵活应用。

 > Mars3D平台可用于构建无插件、跨操作系统、 跨浏览器的三维 GIS 应用程序。平台使用 WebGL 来进行硬件加速图形化，跨平台、跨浏览器来实现真正的动态大数据三维可视化。通过 Mars3D产品可快速实现浏览器和移动端上美观、流畅的三维地图呈现与空间分析。

### 相关网站 
- Mars3D官网：[http://mars3d.cn](http://mars3d.cn)  

- GitHub导航列表：[https://github.com/marsgis/mars3d](https://github.com/marsgis/mars3d)


## 版权说明
1. 任何`个人或组织`可以在遵守Mars3D相关要求下`免费无限制`使用。
2. 如有`个性化需求`或`商业应用`，请联系[火星科技](http://mars3d.cn)购买。
