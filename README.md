# 基于vue2.0+vuex+localStorage开发的本地记事本

> 采用vue2.0+vuex+localStorage+sass+vue-cli3.0，实现一个本地存储的移动端记事本。在线预览地址：[DEMO](http://echat.applinzi.com)

## 功能说明

- 用户登录，注册
- 支持事件状态切换
	- 添加事件 -> 进入未完成列表
	- 未完成 -> 已完成(点击完成按钮)
	- 未完成 -> 已取消(点击取消按钮)
	- 已完成 -> 未完成(点击未完成按钮)
	- 已取消 -> 未完成(点击恢复按钮)
- 支持本地化存储
- 支持设置中修改账户姓名和更换主题的功能，并能根据登录账号实现本地储存

## 安装步骤

	git clone https://github.com/crazyjser/echat.git
	cd echat
	npm install
	npm run serve
	
	// 项目启动后F12,手机模式下运行最佳

## 主要难点

### 1.账户注册和登录，并将事件和主题等和账户建立关联关系

解决方法：通过localstorage建立三个数组，分别储存用户信息，事件信息，主题信息，并通过用户id建立关联性，通过vuex实现状态管理。

### 2.待办事件列表

解决方法：利用vuex进行状态管理，把所有事件和状态存储在store对象中，在组件中通过计算属性获得事件，因此就有了实时性。

### 3.主题更换

解决办法：通过sass的混合编写相关样式和vuex的状态管理实时切换主题，并将用户的主题信息储存在本地

## 兼容版本
IE10+支持，chrome/firefox/safari/opera支持，ios safari 8+支持，android browser4.4+支持

## 总结 ##

麻雀虽小，五脏俱全。 希望您看完后批评指正。
