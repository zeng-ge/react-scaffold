# react scaffold
react脚手架工程

## 安装
yarn install

yarn start  启动
yarn build  打包

cd swagger && yarn start      开启swagger mock

由于swagger ui 3.x之前不支持在swagger.yaml里面通过$ref来引用文件
因此无法通过swagger project edit来生成api文档

## 按feature来组织目录
- containers存入页面,它与redux打交通
- components只显示数据
- selectors专门处理数据,把原始数据组装成所需的结构
- routers定义路由
- actions定义redux及action