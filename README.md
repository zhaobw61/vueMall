# vuemall

> A Vue.js project

## 前端路由

- 路由是根据不同的url 地址展示不同的内容和页面。
- route就是对history的封装。
- 设置路由模式:mode:history/hash

### 优点：

- 用户体验好，不需要每次都从服务器全部获取，快速展示给用户

### 缺点：

- 不利于SEO

- 使用浏览器的前进和后退会重新发起请求，没有办法合理的利用缓存。

- 单页面无法记住之前的滚动的位置。

### 路由类型

- 动态路由

- 嵌套路由：路由嵌套路由

- 编程式路由：通过JS来实现页面跳转。

- 命名路由：给路由定义不同的名字，根据名字进行匹配

### 命名视图

- 给不同的router-view定义名字，通过名字进行对应的组件渲染

## AMD CMD CommonJs ES6

### AMD:是requireJS在推广的过程中对模块化定义的规范产出

- 依赖前置，异步

- define require

### CMD:是SeaJS在推广的过程中对模块定义的规范产出

- 依赖就近

- define、require

### commonJS

- module.exports require

- 在后端使用

### ES6

- export import

### MongoDB基本语法

- 创建集合

` 
db.createCollextion("user");
`

- 删除数据库

`
db.dropDatabase();
`

- 删除集合

`
db.collectionName.drop();
`

- 查询数据

`
db.collectionName.find({});
`

- 更新

`
db.collectionName.update({},{$set:{}});
`

- 删除

`
db.collectionName.remove({})
`

- 增加

`
db.collectionName.insert({})
`

### vuex

- 定义：为vue.js开发的状态管理模式

- state:唯一的数据源。

- getters:可以派生出一些新的状态。

- mutation：更改vuex的store中的状态的唯一方法。通过commit提交

- action：提交的是mutation，特点是可以异步。通过dispatch触发

- modules：分割为模块

### webpack

#### 插件

- html-webpack-plugin：生成多个页面

- extract-text-webapck-plugin：抽离文本

- UglifyJsPlugin：合并压缩代码

- CommonsChunkPlugin：抽取公共的模块

- clean-webpack-plugin:删除文件夹

- copy-webpack-plugin：复制文件

#### loader

- css-loader:解析css文件

- sass-loader:解析sass文件

- file-loader:解析图片

- postcss-loader:给css添加前缀




