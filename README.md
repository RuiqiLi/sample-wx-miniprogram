# 项目说明

本项目是 [《微信小程序开发从入门到实战(微课视频版)》](http://product.dangdang.com/28543966.html) 一书第二章的样例代码。

本项目保留了微信开发者工具自动生成的样例代码，并在此基础上添加了新的示例内容。

---

## 使用说明

### 如何查看 tabBar 的显示效果

书中 2.2.6 节介绍了如何配置 tabBar，这部分内容在本项目中也有示例。如果希望查看 tabBar 的效果，需要调整 `app.json` 文件 `pages` 数组中的页面顺序，将 `pages/index/index` 页面放在第一位。即将

```
"pages": [
  "pages/wxml/introduce",
  "pages/wxml/flex",
  "pages/index/index",
  "pages/logs/logs"
]
```

改为

```
"pages": [
  "pages/index/index",
  "pages/wxml/introduce",
  "pages/wxml/flex",
  "pages/logs/logs"
]
```

保存后即可在模拟器中看到 tabBar 的展示效果。

---

### 第 2.3 节的代码在哪里？

这部分代码主要在 `pages/wxml/introduce` 页面中，其中介绍 WXML 部分的代码位于 `pages/wxml/introduce.wxml` 文件中，介绍 WXSS 部分的代码在 `pages/wxml/introduce.wxss` 文件中。

另外由于 **容器组件view与弹性布局** 这部分的内容较多，因此这部分代码单独放在了 `pages/wxml/flex` 页面中，相关文件主要是 `pages/wxml/flex.wxml` 和 `pages/wxml/flex.wxss`，观察这部分代码的显示效果时需要调整 `app.json` 文件 `pages` 数组中的页面顺序，将 `pages/wxml/flex` 页面放在第一位。

---

### 第 2.4 节的代码在哪里？

介绍 JS 基础的代码位于 `utils/js_introduce.js` 文件中。

介绍 App 注册部分的代码位于 `app.js` 文件中。

书中 2.4.4 ~ 2.4.7 小节部分的代码比较简单，没有特别编写样例。书中这部分内容在 `pages/index/index` 页面的代码中有所体现，可以作为参考，学习这个页面中的代码。如果实在弄不清楚这部分内容，也可以暂时跳过，书后面的内容对这部分有更加详细的介绍。
