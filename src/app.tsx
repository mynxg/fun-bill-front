import { AvatarDropdown, AvatarName, Footer } from '@/components';
// import { currentUser as queryCurrentUser } from '@/services/ant-design-pro/api';
import { currentUser as queryCurrentUser } from '@/services/login/loginApi';
import { getToken } from '@/utils/auth';
import type { RequestConfig } from '@@/plugin-request/request';
import { LinkOutlined } from '@ant-design/icons';
import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RunTimeLayoutConfig } from '@umijs/max';
import { Link, history } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: LOGINAPI.CurrentUser;
  loading?: boolean;
  fetchUserInfo?: () => Promise<LOGINAPI.CurrentUser | undefined>;
}> {
  const fetchUserInfo = async () => {
    try {
      const msg = await queryCurrentUser({
        skipErrorHandler: true,
      });
      return msg.data;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行
  const { location } = history;
  if (location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  return {
    // 如果是登录页面，不执行
    fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    // 帮助文档
    // actionsRender: () => [<Question key="doc" />, <SelectLang key="SelectLang" />],
    // 顶部右侧的渲染
    avatarProps: {
      // src: initialState?.currentUser?.user?.avatar,
      src: "./logo.png",
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown menu={true}>{avatarChildren}</AvatarDropdown>;
      },
    },
    //水印
    waterMarkProps: {
      content: initialState?.currentUser?.user?.userName,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    bgLayoutImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

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
  baseURL: 'https://fun-bill.lxip.top/',
};
