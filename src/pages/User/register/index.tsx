import { Footer } from '@/components';
import { getFakeCaptcha } from '@/services/login/login';
import { register } from '@/services/login/loginApi';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components';
import { FormattedMessage, Helmet, SelectLang, history, useIntl, useModel } from '@umijs/max';
import { Alert, Tabs, message,Form } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import Settings from '../../../../config/defaultSettings';

// import { setToken } from '@/utils/auth';

const useStyles = createStyles(({ token }) => {
  return {
    action: {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    },
    lang: {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    },
  };
});

const ActionIcons = () => {
  const { styles } = useStyles();

  return (
    <>
      {/* <AlipayCircleOutlined key="AlipayCircleOutlined" className={styles.action} /> */}
      {/* <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={styles.action} />
      <WeiboCircleOutlined key="WeiboCircleOutlined" className={styles.action} /> */}
    </>
  );
};

const Lang = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.lang} data-lang>
      {SelectLang && <SelectLang />}
    </div>
  );
};

const RegisterMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Register: React.FC = () => {
  const [userRegisterState, setUserRegisterState] = useState<LOGINAPI.RegisterResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  const { styles } = useStyles();
  const intl = useIntl();

//   const fetchUserInfo = async () => {
//     const userInfo = await initialState?.fetchUserInfo?.();
//     if (userInfo) {
//       flushSync(() => {
//         setInitialState((s) => ({
//           ...s,
//           currentUser: userInfo,
//         }));
//       });
//     }
//   };

  const handleSubmit = async (values: LOGINAPI.RegisterParams) => {
    try {
      // 登录
      const msgResult = await register({ ...values, type });

      const code = msgResult.code + '';
      if (code === '200') {
        const defaultRegisterSuccessMessage = intl.formatMessage({
          id: 'pages.register.success',
          defaultMessage: '注册成功！',
        });
        message.success(defaultRegisterSuccessMessage);

        // console.log('token=' + msgResult);

        // 获取用户信息
        // 如果重定向到了登录页，成功后会默认重定向到首页
        const urlParams = new URL(window.location.href).searchParams;
        //解释：history.push  是react-router-dom提供的一个方法，用于跳转到指定的路由
        history.push(urlParams.get('redirect') || '/user/login');
        return;
      } else if (code === '500') {
        const defaultRegisterFailureMessage = intl.formatMessage({
          id: msgResult.msg + '',
          defaultMessage: '注册失败，请重试！',
        });
        message.error(defaultRegisterFailureMessage);
      }
      console.log(msgResult);
      // 如果失败去设置用户错误信息
      setUserRegisterState(msgResult);
    } catch (error) {
      const defaultRegisterFailureMessage = intl.formatMessage({
        id: 'pages.register.failure',
        defaultMessage: '注册失败，请重试！',
      });
      console.log(error);
      message.error(defaultRegisterFailureMessage);
    }
  };
  const { code, msg } = userRegisterState;

  return (
    <div className={styles.container}>
      <Helmet>
        <title>
          {intl.formatMessage({
            id: 'menu.register',
            defaultMessage: '注册页',
          })}
          - {Settings.title}
        </title>
      </Helmet>
      <Lang />
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
        //   logo={<img alt="logo" src="/logo.svg" />}
          title="注册"
          subTitle={intl.formatMessage({ id: 'pages.register.registerAccount'})}
          initialValues={{
            autoLogin: false,
            name: 'Ant Design',
          }}
          actions={[
            // <FormattedMessage
            //   key="loginWith"
            //   id="pages.login.loginWith"
            //   defaultMessage="其他登录方式"
            // />,
            // <ActionIcons key="icons" />,
          ]}
          onFinish={async (values) => {
            await handleSubmit(values as LOGINAPI.RegisterParams);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
            //   {
            //     key: 'account',
            //     label: intl.formatMessage({
            //       id: 'pages.login.accountLogin.tab',
            //       defaultMessage: '账户密码登录',
            //     }),
            //   },
              // {
              //   key: 'mobile',
              //   label: intl.formatMessage({
              //     id: 'pages.login.phoneLogin.tab',
              //     defaultMessage: '手机号登录',
              //   }),
              // },
            ]}
          />

        {code === '500'  && (
            <RegisterMessage
                content={intl.formatMessage({
                    id: msg+"",
                    defaultMessage: '账户或密码错误(admin/ant.design)',
                })}
            />
        )}
          {type === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={intl.formatMessage({
                  id: '请输入用户名',
                  defaultMessage: '请输入用户名! ',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.username.required"
                        defaultMessage="请输入用户名!"
                      />
                    ),
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={intl.formatMessage({
                  id: '请输入密码',
                  defaultMessage: '请输入密码！',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.password.required"
                        defaultMessage="请输入密码！"
                      />
                    ),
                  },
                ]}
              />
            </>
          )}

          <div
            style={{
              marginBottom: 24,
            }}
          >
            {/* <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMePassword" defaultMessage="记住我" />
            </ProFormCheckbox> */}
            <a
              style={{
                float: 'right',
              }}
              onClick={() => {
                history.push('/user/login');
              }}
            >
              <FormattedMessage id="返回登录" defaultMessage="返回登录" />
            </a>
            
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
