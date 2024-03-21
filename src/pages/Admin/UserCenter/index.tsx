
import { useLocation, useIntl, FormattedMessage, Helmet, SelectLang, history, } from '@umijs/max';
import React, { useState } from 'react';
import { Avatar, Col, Divider, Drawer, List, Row, Tabs, Descriptions, } from 'antd';
import {
    ProCard,
    ProFormText,
    LoginForm,
    ProFormCaptcha,
    ProFormCheckbox,
    ProForm,
} from '@ant-design/pro-components';
import {
    AlipayCircleOutlined,
    LockOutlined,
    MobileOutlined,
    TaobaoCircleOutlined,
    UserOutlined,
    WeiboCircleOutlined,
} from '@ant-design/icons';
import type { DescriptionsProps } from 'antd';

interface DescriptionItemProps {
    title: string;
    content: React.ReactNode;
}

const DescriptionItem = ({ title, content }: DescriptionItemProps) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);

const CenterPage: React.FC = () => {

    const location = useLocation();
    const userData = (location.state as { userData?: UserEntityAPI.UserVO })?.userData;

    // console.log(location);
    // console.log(userData);

    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: '用户名：',
            children: userData?.userName || '-',
        },
        {
            key: '2',
            label: '昵称：',
            children: userData?.nickName || '-',
        },
        {
            key: '3',
            label: '性别：',
            children: userData?.sex == '0' ? '男' : '女' || '-',
        },
        {
            key: '4',
            label: '手机号：',
            children: userData?.phoneNumber || '-',
        },
        {
            key: '5',
            label: '邮箱：',
            children: userData?.email || '-',
        },
        {
            key: '6',
            label: '创建时间：',
            children: userData?.createTime?.toString() || '-',
        },

    ];

    const [type, setType] = useState<string>('account');
    const intl = useIntl();

    return (
        <ProCard split="vertical">
            <ProCard title="个人信息" colSpan="30%">
                <Descriptions items={items} column={1} />

            </ProCard>
            <ProCard title="基本信息" headerBordered>
                <LoginForm
                    className='register-form'
                    submitter={{
                        searchConfig: {
                            submitText: '保存',
                            
                        },

                    }}
                    contentStyle={{
                        minWidth: 280,
                        maxWidth: '75vw',
                    }}
                    //   logo={<img alt="logo" src="/logo.svg" />}

                    // title="用户注册"
                    //   subTitle={intl.formatMessage({ id: 'pages.register.registerAccount'})}
                    initialValues={{
                        autoLogin: false,
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
                        // await handleSubmit(values as LOGINAPI.RegisterParams);
                    }}
                >
                    <Tabs
                        activeKey={type}
                        onChange={setType}
                        centered
                        items={[
                            {
                                key: 'account',
                                label: intl.formatMessage({
                                    id: 'pages.usercenter.baseInfo.tab',
                                    defaultMessage: '基本资料',
                                }),
                            },
                            {
                                key: 'updatePassword',
                                label: intl.formatMessage({
                                    id: 'pages.usercenter.security.updatePassword',
                                    defaultMessage: '修改密码',
                                }),
                            },
                        ]}
                    />

                    {type === 'account' && (
                        <>
                            <ProFormText
                                name="username"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined />,
                                }}
                                placeholder={intl.formatMessage({
                                    id: 'pages.login.username.placeholder',
                                    defaultMessage: '用户名: admin or user',
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
                                    id: 'pages.login.password.placeholder',
                                    defaultMessage: '密码: ant.design',
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

                    {type === 'updatePassword' && (
                        <>
                            <ProFormText
                                name="username"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined />,
                                }}
                                placeholder={intl.formatMessage({
                                    id: 'pages.usercenter.security.oldPassword',
                                    defaultMessage: '请输入旧密码! ',
                                })}
                                rules={[
                                    {
                                        required: true,
                                        message: (
                                            <FormattedMessage
                                                id="pages.usercenter.security.oldPassword.required"
                                                defaultMessage="请输入旧密码！!"
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
                                    id: 'pages.usercenter.security.newPasswordMessage',
                                    defaultMessage: '请输入新密码！',
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
                            <ProFormText.Password
                                name="passwordAgain"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined />,
                                }}
                                placeholder={intl.formatMessage({
                                    id: 'pages.usercenter.security.confirmNewPassword',
                                    defaultMessage: '请再次输入新密码',
                                })}
                                rules={[
                                    {
                                        required: true,
                                        message: (
                                            <FormattedMessage
                                                id="pages.login.password.required"
                                                defaultMessage="请再次输入密码"
                                            />
                                        ),
                                    },
                                ]}
                            />


                        </>
                    )}
                </LoginForm>
            </ProCard>
        </ProCard >
    );
};
export default CenterPage;