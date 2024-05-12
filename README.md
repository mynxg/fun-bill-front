# fun-bill-front

毕设前端 后台 
> 这 dev-col-design 分支后续不会增加新功能，只会修复bug

## 技术栈
前端		
Node.js	18.16.1
node版本管理	nvm
框架	Ant Design Pro	6
组件库	procomponents	5
ant-design	5.12.5
fetch
路由	Router	6

## 项目结构

```
|-- fun-bill-front
|   |-- public # 静态资源
|   |   |-- favicon.ico # 图标
|   |-- config # 配置文件
|   |-- src # 源码
|   |   |-- .umi # umi配置
|   |   |-- components # 组件
|   |   |-- constant # 常量
|   |   |-- locales # 国际化
|   |   |-- pages # 页面
|   |   |-- services # 请求
|   |   |-- utils # 工具
|   |   |-- access.ts # 权限
|   |   |-- app.tsx # 入口
|   |   |-- global.less # 全局样式
|   |   |-- global.tsx # 全局
|   |   |-- manifest.json # pwa
|   |   |-- requestErrorConfig.ts # 请求错误配置
|   |   |-- serviceWorker.ts # pwa
|   |   `-- types.d.ts # 类型
|   |-- tests # 测试
|   |-- types # 类型
|   |-- .editorconfig # 编辑器配置
|   |-- .env # 环境变量
|   |-- .eslintrc # eslint配置
|   |-- .gitignore # git忽略
|   |-- .prettierignore # prettier忽略
|   |-- .prettierrc # prettier配置
|   |-- jest.config.js # jest配置
|   |-- jsconfig.json # js配置
|   |-- LICENSE # 许可证
|   |-- package.json # 包管理   
|   |-- README.md # 说明

```

## 项目启动

安装依赖

```
npm i
```

开发环境

```
npm run dev

# 或者 可以使用本地配置的开发地址（后端接口地址）
npm run start:develop
```
注意：

本地开发调试时，先注释 /src/app.tsx下
```tsx
/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request: RequestConfig = {
  ...errorConfig,
  // 新增自动添加AccessToken的请求前拦截器
  // requestInterceptors: [demoResponseInterceptors],
  // 新增自动添加AccessToken的请求前拦截器
  requestInterceptors: [authHeaderInterceptor],
  //  baseURL: 'https://fun-bill.lxip.top/',
};
```


生产环境

```
npm run build
# 或者 包括本地配置的生产地址也一同打包
npm run build:prod
```


## 项目部署

```
npm run build
```

将dist目录下的文件部署到服务器即可

## 项目文档

[README-扩展](README-EXTEND.md)

[项目详细文档](https://imnxg.notion.site/4866fe26cb0b4d859e7683749a4b8253?pvs=4)


## 项目地址

[地址]()

## 项目截图

[后台效果图](https://imnxg.notion.site/221a49ee490e4ad88fc9d14f07c517e8?pvs=4)

[前台效果图](https://imnxg.notion.site/608052b6f3e54c9da02751203eaa4ee5?pvs=4)

## 项目功能
- [√] 用户管理
- [√] 角色管理
- [√] 参数配置管理
- [√] 账本管理
- [√] 账本分类
- [√] 账单分类
- [√] 账单收入
- [√] 账单支出
- [√] 个人中心：用户排行、图表
- [√] 登录日志
- [√] 用户数据统计：收入、支出、结余、最后登录时间等

未完成功能

- [x] 菜单管理
- [x] 操作日志
- [x] 通知管理
- [x] Redis监控
- [x] 导入导出
- [x] 排行榜Redis优化


