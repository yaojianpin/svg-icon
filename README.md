React SVG图标组件

## 安装前
 1. 使用前确保安装了[`svg-sprite-loader`](https://github.com/kisenka/svg-sprite-loader)并在webpack中正确配置。
```javascript
          {
            test: /\.(svg)$/i,
            loader: 'svg-sprite-loader',
            include: [
              paths.appSrc
            ]
          }
```

## 如何安装
> yarn add svg-icon-file

## 如何使用

1. 引入svg图标
```javascript
const IconAdd = require('../assets/add.svg')
or
import IconAdd from "../../assets/add.svg";
```
2. 使用SvgFileIcon
```javascript
import SvgFileIcon from 'svg-icon-file';

// 设置size大小：lg md sm xs xxs
<SvgFileIcon icon={IconAdd} size="lg" />

// 设置图标 + 右侧文字
<SvgFileIcon icon={IconAdd} size="lg">图标文字</SvgFileIcon>

// 设置图标 + 底部文字
<SvgFileIcon icon={IconAdd} direction="column" size="lg">图标文字</SvgFileIcon>

// 禁用样式
<SvgFileIcon icon={IconAdd} disabled={true} />

// 自定义图标样式和文字
<SvgFileIcon icon={IconAdd} iconClassName="iconClass" textClassName="textClass">图标文字</SvgFileIcon>

```





