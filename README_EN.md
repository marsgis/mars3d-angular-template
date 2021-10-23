<p align="center">
<img src="https://mars3d.cn/logo.png" width="300px" />
</p>

<p align="center">Mars 3D development template based on Angular template</p>

<p align="center">
<a target="_black" href="https://github.com/marsgis/mars3d">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/marsgis/mars3d?style=flat&logo=github">
</a>
<a target="_black" href="https://www.npmjs.com/package/mars3d">
<img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars3d?style=flat&logo=npm">
</a>
<a target="_black" href="https://www.npmjs.com/package/mars3d">
<img alt="Npm version" src="https://img.shields.io/npm/v/mars3d.svg?style=flat&logo=npm&label=version"/>
</a>
</p>

[**English**](./README_EN.md) |[**中文**](./README.md) 

   🌎 Mars3D platform, the simplest application project template under the `Angular technology stack`.
   


 

## Run command
 
### Install dependencies before first run
 `npm install` or `cnpm install`
 
### http run project
 `npm run serve`  post run access：`http://localhost:3003/`  

### Package and compile project
 run `npm run build` to build the project。 

### reference resources
 https://github.com/Developer-Plexscape/cesium-angular-example

## Operation effect 
 [online Demo](http://mars3d.cn/project/vue-template/)  

 ![image](http://mars3d.cn/project/vue-template/screenshot.jpg)
 

## How to integrate into your existing project
1. ### Install mars3d dependency package
```bash
npm install mars3d   //or  cnpm install mars3d   or  yarn add mars3d
```

2. ### Copy file
 > Scene profile：`public\config\config.json`
  

3. ### Configure angular.json 
  Refer to `angular.json` to modify the configuration of your own project, mainly from the relevant codes of `mars3d-cesium`

4. ### Create earth
 Refer to the `src\app\app.component.ts` file to introduce map components and structures to create the earth.


 

## What is Mars3D 
>  `Mars3D platform` is [Mars technology](http://marsgis.cn/) a 3D client development platform based on WebGL technology, which is based on [Cesium](https://cesium.com/cesiumjs/) optimization and B / S architecture design,The lightweight and efficient GIS development platform supporting multi industry expansion can run efficiently in the browser without installation and plug-ins, and can quickly access and use a variety of GIS data and three-dimensional models, present the visualization of three-dimensional space, and complete the flexible application of the platform in different industries.

 > Mars3d platform can be used to build 3D GIS applications without plug-ins, across operating systems and across browsers. The platform uses WebGL for hardware accelerated graphics, and realizes real dynamic big data 3D visualization across platforms and browsers. The Mars3D product can quickly realize beautiful and smooth 3D map presentation and spatial analysis on browsers and mobile terminals.

### Related websites 
- Mars3D official website：[http://mars3d.cn](http://mars3d.cn)  

- Mars3D GitHub navigation list：[https://github.com/marsgis/mars3d](https://github.com/marsgis/mars3d)




