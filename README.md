# 步天 Butian

一个以中国传统星官体系为核心的沉浸式观星网页 Demo。

## 项目结构

```text
butian/
├── index.html
├── src/
│   ├── app.js
│   └── style.css
└── data/
    ├── culture/
    │   ├── lodges.json
    │   ├── yuans.json
    │   ├── asterisms_culture.json
    │   └── stars_culture.json
    └── astronomy/
        └── README.md
```

## 如何上传到 GitHub Pages

把整个文件夹中的内容上传到 GitHub 仓库根目录，然后在：

```text
Settings → Pages → Deploy from a branch → main → /root
```

开启 GitHub Pages。

## 本地预览

因为现在文化数据库拆成了 JSON 文件，直接双击 `index.html` 时，浏览器可能不允许读取本地 JSON。建议在项目根目录运行：

```bash
python3 -m http.server 8000
```

然后打开：

```text
http://localhost:8000
```

## 数据说明

- `data/culture/lodges.json`：二十八宿数据库，包括四象、十二次、分野、传统意象、古籍引文。
- `data/culture/yuans.json`：三垣数据库，包括紫微垣、太微垣、天市垣。
- `data/culture/asterisms_culture.json`：重点星官文化数据库。
- `data/culture/stars_culture.json`：重点恒星文化数据库。

全量星官坐标、连线、亮星、中文星名和西方星名仍然在线加载自公开天文数据源。以后可以把这些文件下载到 `data/astronomy/` 里，再把 `src/app.js` 中的 `DATA_URLS` 改成本地路径。


## v7 更新

- 手机端支持双指缩放：双指拉开放大，双指捏合缩小。
- 当一个星官内没有任何成员星通过当前“星等限制”时，不再显示该星官名称和连线。地平线以下的星星仍然会淡灰显示。
- 全站字体改为宋体优先：`Songti SC / STSong / SimSun`。


## v8 修正

- “不可见星官”的判断改为基于当前 `星等限制`，而不是基于地平线。
- 地平线以下的星星仍然保留淡灰显示。
- 用途：调低星等限制时，可以减少当前视野里的星官密度。


## v9 修正

- 地平线以下的星星、星名、星官连线和星官名，绘制逻辑与地平线上相同。
- 视觉区别只来自地平线以下区域叠加的一层透明淡灰色 mask。
