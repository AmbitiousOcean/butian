# Astronomy Data

目前全量星官坐标、星官连线、亮星星表、中文星名、西方星名仍然从在线公开数据源加载。

对应 URL 在 `src/app.js` 顶部的 `DATA_URLS` 里。

如果以后想做完全离线版，可以下载这些文件放到本文件夹，然后把 `DATA_URLS` 改成类似：

```js
stars: "data/astronomy/stars.6.min.geojson"
```
