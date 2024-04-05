/**
 * @name umi 的路由配置
 * @description 只支持 path,component,routes,redirect,wrappers,name,icon 的配置
 * @param path  path 只支持两种占位符配置，第一种是动态参数 :id 的形式，第二种是 * 通配符，通配符只能出现路由字符串的最后。
 * @param component 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，如果是相对路径，会从 src/pages 开始找起。
 * @param routes 配置子路由，通常在需要为多个路径增加 layout 组件时使用。
 * @param redirect 配置路由跳转
 * @param wrappers 配置路由组件的包装组件，通过包装组件可以为当前的路由组件组合进更多的功能。 比如，可以用于路由级别的权限校验
 * @param name 配置路由的标题，默认读取国际化文件 menu.ts 中 menu.xxxx 的值，如配置 name 为 login，则读取 menu.ts 中 menu.login 的取值作为标题
 * @param icon 配置路由的图标，取值参考 https://ant.design/components/icon-cn， 注意去除风格后缀和大小写，如想要配置图标为 <StepBackwardOutlined /> 则取值应为 stepBackward 或 StepBackward，如想要配置图标为 <UserOutlined /> 则取值应为 user 或者 User
 * @doc https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'register',
        path: '/user/register',
        component: './User/register',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   routes: [
  //     {
  //       path: '/admin',
  //       redirect: '/admin/sub-page',
  //     },
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       component: './Admin',
  //     },
  //   ],
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './User/UserManager',
  // },
  {
    path: '/usercenter',
    name: 'user', // 用户中心
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/usercenter',
        redirect: '/usercenter/user',
      },
      {
        path: '/usercenter/user',
        name: 'list', // 用户列表
        component: './Admin/User',
      },
      {
        path: '/usercenter/role',
        name: 'role', // 角色列表
        component: './Admin/Roles',
      },
      {
        path: '/usercenter/config',
        name: 'config', // 配置列表
        component: './Admin/Config',
      },
      // {
      //   path: '/usercenter/menu',
      //   name: 'menu', // 菜单列表
      //   component: './Admin/Menu',
      // },
      // {
      //   path: '/usercenter/dept',
      //   name: 'dept', // 部门列表
      //   component: './Admin/Dept',
      // },
      // {
      //   path: '/usercenter/post',
      //   name: 'post', // 岗位列表
      //   component: './Admin/Post',
      // },
      // {
      //   path: '/usercenter/dict',
      //   name: 'dict', // 字典列表
      //   component: './Admin/Dict',
      // },
      // {
      //   path: '/usercenter/notice',
      //   name: 'notice', // 通知列表
      //   component: './Admin/Notice',
      // },

    ],
  },
  {
    path: '/bill',
    name: 'bill', // 账单管理
    icon: 'crown',
    // access: 'canAdmin',
    routes: [
      {
        path: '/bill/book',
        name: 'book.list', // 账本列表
        component: './Bill/BillBook',
      },
      {
        path: '/bill/category',
        name: 'category.list', // 分类列表
        component: './Bill/BillCategory',
      },
      {
        path: '/bill',
        redirect: '/bill/expenses',
      },
      {
        path: '/bill/expenses',
        name: 'expenses.list', // 账单支出管理
        component: './Bill/Expense',
      },
      {
        path: '/bill/income',
        name: 'income.list', // 账单收入管理
        component: './Bill/income',
      },
    ],
  },
  {
    path: '/monitor',
    name: 'logininfo', // 日志中心
    icon: 'crown',
    // access: 'canAdmin',
    routes: [
      {
        path: '/monitor',
        redirect: '/monitor/logininfo',
      },
      {
        path: '/monitor/logininfo',
        name: 'list', // 日志列表
        component: './Admin/Logininfo',
      },
    ],
    // menu: false,
  },
  {
    path: '/report',
    name: 'report', // 报表中心
    icon: 'crown',
    // access: 'canAdmin',
    routes: [
      {
        path: '/report',
        redirect: '/report/userRank',
      },
      {
        path: '/report/userRank',
        name: 'userRank', // 用户排行
        component: './Report/UserRank',
      },
      // {
      //   path: '/report/billRank',
      //   name: 'billRank', // 账单排行
      //   component: './Report/BillRank',
      // },
    ],
  },
  {
    path: '/account/center',
    name: '个人中心',
    icon: 'smile',
    component: './Admin/UserCenter',
    menu: false,
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
