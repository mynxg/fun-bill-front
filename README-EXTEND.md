

## 项目目录
```

|-- types # 类型
|   |-- index.d.ts
|   `-- cache # 缓存
|       |-- mock
|       |   |-- mock.cache.js
|       |   `-- login.mock.cache.js
|       |-- login.cache.json
|       `-- cache.json
|-- tsconfig.json
|-- tests # 测试
|   `-- setupTests.jsx
|-- src
|   |-- utils # 工具
|   |   |-- auth.ts
|   |   `-- DateUtil.ts
|   |-- typings.d.ts # 类型
|   |-- services # 请求
|   |   |-- user
|   |   |   |-- userController.ts
|   |   |   |-- typings.d.ts
|   |   |   |-- queryList.ts
|   |   |   `-- index.ts
|   |   |-- swagger
|   |   |   |-- user.ts
|   |   |   |-- typings.d.ts
|   |   |   |-- store.ts
|   |   |   |-- pet.ts
|   |   |   `-- index.ts
|   |   |-- roles
|   |   |   |-- typings.d.ts
|   |   |   |-- roleController.ts
|   |   |   `-- index.ts
|   |   |-- report
|   |   |   `-- userRank
|   |   |       |-- userRankController.ts
|   |   |       |-- typings.d.ts
|   |   |       `-- index.ts
|   |   |-- logininfo
|   |   |   |-- typings.d.ts
|   |   |   |-- logininfoController.ts
|   |   |   `-- index.ts
|   |   |-- login
|   |   |   |-- typings.d.ts
|   |   |   |-- loginApi.ts
|   |   |   |-- login.ts
|   |   |   `-- index.ts
|   |   |-- config
|   |   |   |-- typings.d.ts
|   |   |   |-- index.ts
|   |   |   `-- configController.ts
|   |   |-- common
|   |   |   `-- typings.d.ts
|   |   |-- billCategory
|   |   |   |-- typings.d.ts
|   |   |   |-- index.ts
|   |   |   `-- billCategoryController.ts
|   |   |-- billBookCategory
|   |   |   |-- typings.d.ts
|   |   |   |-- index.ts
|   |   |   `-- billBookCategoryController.ts
|   |   |-- billBook
|   |   |   |-- typings.d.ts
|   |   |   |-- index.ts
|   |   |   `-- billBookController.ts
|   |   |-- bill # 账单API
|   |   |   |-- typings.d.ts
|   |   |   |-- index.ts
|   |   |   |-- billIncomeController.ts
|   |   |   `-- billExpenseController.ts
|   |   `-- ant-design-pro # ant-design-pro api 不使用这部分
|   |       |-- typings.d.ts
|   |       |-- login.ts
|   |       |-- index.ts
|   |       `-- api.ts
|   |-- service-worker.js # pwa
|   |-- requestErrorConfig.ts
|   |-- pages # 页面
|   |   |-- Welcome.tsx
|   |   |-- User
|   |   |   |-- register
|   |   |   |   |-- index.tsx
|   |   |   |   `-- demo.tsx
|   |   |   `-- Login
|   |   |       |-- login.test.tsx
|   |   |       `-- index.tsx
|   |   |-- TableList
|   |   |   |-- index.tsx
|   |   |   `-- components
|   |   |       `-- UpdateForm.tsx
|   |   |-- Report
|   |   |   `-- UserRank
|   |   |       |-- index.tsx
|   |   |       `-- Components
|   |   |           `-- ReadModal.tsx
|   |   |-- Chart
|   |   |   |-- UserActivity.tsx
|   |   |   |-- RegisterChart.tsx
|   |   |   |-- MyUserChart.tsx
|   |   |   |-- MyChart.tsx
|   |   |   `-- GenderChar.tsx
|   |   |-- Bill # 账单
|   |   |   |-- income
|   |   |   |   |-- index.tsx
|   |   |   |   `-- components
|   |   |   |       |-- UpdateModal.tsx
|   |   |   |       |-- ReadModal.tsx
|   |   |   |       `-- CreateModal.tsx
|   |   |   |-- Expense
|   |   |   |   |-- index.tsx
|   |   |   |   `-- components
|   |   |   |       |-- UpdateModal.tsx
|   |   |   |       |-- ReadModal.tsx
|   |   |   |       `-- CreateModal.tsx
|   |   |   |-- BillCategory
|   |   |   |   |-- index.tsx
|   |   |   |   `-- components
|   |   |   |       |-- UpdateModal.tsx
|   |   |   |       |-- ReadModal.tsx
|   |   |   |       `-- CreateModal.tsx
|   |   |   `-- BillBook
|   |   |       |-- index.tsx
|   |   |       `-- components
|   |   |           |-- UpdateModal.tsx
|   |   |           |-- ReadModal.tsx
|   |   |           `-- CreateModal.tsx
|   |   |-- Admin.tsx
|   |   |-- Admin # 管理员
|   |   |   |-- UserCenter
|   |   |   |   `-- index.tsx
|   |   |   |-- User
|   |   |   |   |-- index.tsx
|   |   |   |   `-- components
|   |   |   |       |-- UpdateModal.tsx
|   |   |   |       |-- ReadModal.tsx
|   |   |   |       `-- CreateModal.tsx
|   |   |   |-- Roles
|   |   |   |   |-- index.tsx
|   |   |   |   `-- components
|   |   |   |       |-- UpdateModal.tsx
|   |   |   |       |-- ReadModal.tsx
|   |   |   |       `-- CreateModal.tsx
|   |   |   |-- Logininfo
|   |   |   |   |-- index.tsx
|   |   |   |   `-- Components
|   |   |   |       `-- ReadModal.tsx
|   |   |   `-- Config # 配置
|   |   |       |-- index.tsx
|   |   |       `-- components
|   |   |           |-- UpdateModal.tsx
|   |   |           |-- ReadModal.tsx
|   |   |           `-- CreateModal.tsx
|   |   `-- 404.tsx # 404页面
|   |-- manifest.json # pwa
|   |-- locales # 国际化
|   |   |-- zh-TW.ts
|   |   |-- zh-TW
|   |   |   |-- settings.ts
|   |   |   |-- settingDrawer.ts
|   |   |   |-- pwa.ts
|   |   |   |-- pages.ts
|   |   |   |-- menu.ts
|   |   |   |-- globalHeader.ts
|   |   |   `-- component.ts
|   |   |-- zh-CN.ts
|   |   |-- zh-CN # 中文
|   |   |   |-- settings.ts
|   |   |   |-- settingDrawer.ts
|   |   |   |-- pwa.ts
|   |   |   |-- pages.ts
|   |   |   |-- menu.ts
|   |   |   |-- globalHeader.ts
|   |   |   `-- component.ts
|   |   `-- en-US # 英文
|   |       |-- settings.ts
|   |       |-- settingDrawer.ts
|   |       |-- pwa.ts
|   |       |-- pages.ts
|   |       |-- menu.ts
|   |       |-- globalHeader.ts
|   |       `-- component.ts
|   |-- global.tsx # 全局
|   |-- global.less # 全局样式
|   |-- constant # 常量
|   |   |-- user.tsx
|   |   |-- role.tsx
|   |   |-- report
|   |   |   `-- userRank.tsx
|   |   |-- loginInfo.ts
|   |   |-- index.tsx
|   |   |-- config.tsx
|   |   |-- chart.ts
|   |   |-- billCategory.ts
|   |   |-- billBook.ts
|   |   `-- bill.ts
|   |-- components # 组件
|   |   |-- index.ts
|   |   |-- UploadFile # 上传文件
|   |   |   `-- index.tsx
|   |   |-- RightContent
|   |   |   |-- index.tsx
|   |   |   `-- AvatarDropdown.tsx
|   |   |-- Modals # 弹窗
|   |   |   |-- UpdateModal.tsx
|   |   |   `-- CreateModal.tsx
|   |   |-- HeaderDropdown # 头部下拉
|   |   |   `-- index.tsx
|   |   `-- Footer # 底部
|   |       `-- index.tsx
|   |-- app.tsx
|   `-- access.ts
|-- public
|   |-- scripts
|   |   `-- loading.js
|   |-- pro_icon.svg
|   |-- logo.svg
|   |-- logo.png
|   |-- icons
|   |   |-- icon-512x512.png
|   |   |-- icon-192x192.png
|   |   `-- icon-128x128.png
|   |-- favicon1.ico
|   |-- favicon.ico
|   `-- CNAME # 自定义域名
|-- package.json
|-- mock # mock数据
|   |-- user.ts
|   |-- route.ts
|   |-- requestRecord.mock.js
|   |-- notices.ts
|   `-- listTableList.ts
|-- jsconfig.json
|-- jest.config.ts
|-- config
|   |-- routes.ts
|   |-- proxy.ts
|   |-- oneapi.json
|   |-- defaultSettings.ts
|   `-- config.ts
|-- README.md
`-- LICENSE
```

## 功能解释

### 1. 服务请求
> 给请求地址加上token
```ts
/**
 * requestInterceptors 接收一个数组，数组的每一项为一个 request 拦截器。等同于 umi-request 的 request.interceptors.request.use() 。
 */
const authHeaderInterceptor = (url: string, options: RequestConfig) => {
  //console.log('authHeaderInterceptor url, options: ', url, options  );
  //console.log('url.indexOf: ',url.indexOf('/login/') +",", url.indexOf('/login/account'));

  // 如果是登录页面，不需要添加token
  if (url.indexOf('/login/account') !== -1 || url.indexOf('/login/logout') !== -1 || url.indexOf('/register') !== -1) {
    return {
      url: `${url}`,
      options: { ...options, interceptors: true },
    };
  } else {
    const token = getToken();
    // console.log('url, token: ', url, token);
    let authHeader = {};
    // 如果token存在，就添加到请求头
    if (token) {
      authHeader = { Authorization: `Bearer ${token}` };
    }

    return {
      url: `${url}`,
      options: { ...options, interceptors: true, headers: authHeader },
    };
  }
};

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
  // baseURL: 'https://xxx.xx.top/',
};
```
