# WEAPP_GNB_MIDDLE
> 小程序--中学错题归纳本

![二维码](http://img.guinaben.com/WEAPP_GNB_MIDDLE.jpg)

## JS框架
-	[小程序组件化开发框架-WePY](https://tencent.github.io/wepy/document.html#/)

## 组件
-	[有赞微信小程序UI库](https://github.com/youzan/zanui-weapp)
- [ZanUI in WePY](https://github.com/brucx/wepy-zanui-demo)

## 配置
全局安装或更新WePY命令行工具
```
npm install wepy-cli -g
```
在开发目录中生成Demo开发项目
```
wepy new myproject
```
1.7.0之后的版本使用 wepy init standard myproject 初始化项目，使用 wepy list 查看项目模板
切换至项目目录
```
cd myproject
```
安装依赖
```
npm  install
```
开启实时编译
```
wepy build --watch
```

## 文件夹目录
```
├── dist          # 微信调试目录
├── src           # 代码
  ├── common      # 公共资源
  ├── components  # 组件
  ├── pages       # 页面
    ├── init          # 初始化配置
    ├── workbook      # 记错题
    ├── statistics    # 错题本
    ├── my            # 我的
```

## 注意
使用微信开发者工具-->添加项目，项目目录请选择dist目录。

微信开发者工具-->项目-->关闭ES6转ES5。 重要：漏掉此项会运行报错。

微信开发者工具-->项目-->关闭上传代码时样式自动补全。 重要：某些情况下漏掉此项也会运行报错。

微信开发者工具-->项目-->关闭代码压缩上传。 重要：开启后，会导致真机computed, props.sync 等等属性失效。

本地项目根目录运行wepy build --watch，开启实时编译。（注：如果同时在微信开发者工具-->设置-->编辑器中勾选了文件保存时自动编译小程序，将可以实时预览，非常方便。）
