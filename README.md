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
## v7 修改说明

- 手机端支持双指缩放：两指张开放大，两指合拢缩小。
- 星官显示会受“星等限制”控制：若某个星官内所有成员星都暗于当前星等阈值，则隐藏该星官。该规则同样适用于地平线以下的星。
- 全局字体改为宋体优先：Songti SC / STSong / SimSun。
