# stylelint-config-standard

🔧 一个开箱即用的 stylelint 配置。

## 支持文件

- [x] CSS/SCSS 文件
- [x] HTML 文件
- [x] Vue 单文件组件

## 使用

1.安装依赖：

```sh
pnpm add -D @longwoo/stylelint-config-standard

# or
npm install -save-dev @longwoo/stylelint-config-standard

# or
yarn add -D @longwoo/stylelint-config-standard
```

2.在项目根目录创建 `.stylelintrc` 文件，添加 `extends` 配置项。

```json
{
  "extends": "@longwoo/stylelint-config-standard"
}
```

3.打开 `package.json`，在 `scripts` 配置项中添加 `lint:style` 脚本，执行 `npm run lint:style` 即可。

```json
{
  "scripts": {
    "lint:style": "stylelint '**/*.{css,scss,vue,html}'",
    "lint:style:fix": "stylelint '**/*.{css,scss,vue,html}' --fix"
  }
}
```
