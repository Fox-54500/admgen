Github url： https://github.com/Fox-54500/admgen

#1、How to use
#####please use it in your admin project：
    
    $ npm i -g admgen
    
#####then:
    
    $ zhgen generate(or g) modules <your module> <your key>
    
    e.g. $ zhgen g modules RetailOrder retail_order 
    
#####it will generate route file，base controller and view，create dialog controller and view

#####then you just need to go app.js mount your route, that's all

#2、Other
#####besides generate a module，you can generate a base controller separately:
    $ zhgen generate basectrl <your module> <your key>
    
| name | function |
|-------|------|
|module|generate module
| route|generate route File seperately
| basectrl|generate base ctrl File seperately
| createctrl|generate create ctrl File seperately
| view|generate view File seperately
| createview|generate create view File seperately

#3、Attention
#####if the module exists which you will generate，new code will overwrite the module.
     
***

#1、怎么使用
#####请在你的admin项目中使用
    $ npm i -g admgen
    
#####然后：
     $ zhgen generate(或者 g) modules <你的模块> <你的模块标识>
        
     例如: $ zhgen g modules RetailOrder retail_order
     
#####然后它将会帮你生成路由文件,基础的视图文件与控制器文件,新增弹窗的控制器与视图

#####然后你只需要到当前项目的app.js 中去挂载你的路由就行了, 就这些了。

#2、其他
#####除了直接生成模块，你还可以单独生成一个模块里面的某个文件:
    $ zhgen generate basectrl <your module> <your key>
    
| 名称 | 功能 |
|-------|------|
|module|生成 模块
| route|单独生成 路由文件文件
| basectrl|单独生成 基础控制器文件
| createctrl|单独生成 新增弹窗控制器文件
| view|单独生成 基础视图文件
| createview|单独生成 新增弹窗视图文件

#3、注意
#####如果你即将生成的模块已经存在了，那么它将会覆盖你原来的代码（我会在下个版本改进这个问题）
