
import { useLocation, useIntl, FormattedMessage, Helmet, SelectLang, history, } from '@umijs/max';
import React, { useState } from 'react';
import type { DescriptionsProps } from 'antd';
import { Avatar, Col, Divider, Drawer, List, Row, Tabs, Descriptions,Button } from 'antd';
import {
    ProCard,
    ProFormText,
    LoginForm,
    ProFormCaptcha,
    ProFormCheckbox,
    ProForm,
    ProFormTextArea,
} from '@ant-design/pro-components';
import {
    AlipayCircleOutlined,
    LockOutlined,
    MobileOutlined,
    TaobaoCircleOutlined,
    UserOutlined,
    WeiboCircleOutlined,
    MailOutlined,
    PhoneOutlined,
    YuqueOutlined,
} from '@ant-design/icons';


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

                    submitter={{
                        searchConfig: {
                            submitText: '保存',
                        },
                        render: (props, dom) => [
                            ...dom,
                            // <Button
                            //     key="reset"
                            //     onClick={() => {
                            //         props.reset();
                            //     }}
                            // >
                            //     Reset
                            // </Button>,
                            <Button
                                key="submit"
                                type="primary"
                                onClick={() => {
                                    props.submit();
                                    console.log(props);
                                }}
                            >
                                保存
                            </Button>,
                        ],
                    }}
                    contentStyle={{
                        minWidth: 280,
                        maxWidth: '75vw',
                    }}

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
                                name="name"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined />,
                                }}
                                placeholder={intl.formatMessage({
                                    id: 'pages.usercenter.baseInfo.name',
                                    defaultMessage: '姓名',
                                })}
                                rules={[
                                    {
                                        required: true,
                                        message: (
                                            <FormattedMessage
                                                id="pages.usercenter.baseInfo.name.required"
                                                defaultMessage="请输入姓名!"
                                            />
                                        ),
                                    },
                                ]}
                            />
                            <ProFormText
                                name="email"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <MailOutlined />,
                                }}
                                placeholder={intl.formatMessage({
                                    id: 'pages.usercenter.baseInfo.email',
                                    defaultMessage: '邮箱',
                                })}
                                rules={[
                                    {
                                        required: true,
                                        message: (
                                            <FormattedMessage
                                                id="pages.usercenter.baseInfo.email.required"
                                                defaultMessage="请输入邮箱!"
                                            />
                                        ),
                                    },
                                ]}
                            />
                            <ProFormText
                                name="profile"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined />,
                                }}
                                placeholder={intl.formatMessage({
                                    id: 'pages.usercenter.baseInfo.profile',
                                    defaultMessage: '个人简介',
                                })}
                                rules={[
                                    {
                                        required: true,
                                        message: (
                                            <FormattedMessage
                                                id="pages.usercenter.baseInfo.profile.required"
                                                defaultMessage="请输入个人简介!"
                                            />
                                        ),
                                    },
                                ]}
                            />
                            <ProFormText
                                name="phone"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <PhoneOutlined />,
                                }}
                                placeholder={intl.formatMessage({
                                    id: 'pages.usercenter.baseInfo.phone',
                                    defaultMessage: '手机号',
                                })}
                                rules={[
                                    {
                                        required: true,
                                        message: (
                                            <FormattedMessage
                                                id="pages.usercenter.baseInfo.phone.required"
                                                defaultMessage="请输入手机号!"
                                            />
                                        ),
                                    },
                                ]}
                            />
                            <ProFormTextArea
                                name="note"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <YuqueOutlined />,
                                }}
                                placeholder={intl.formatMessage({
                                    id: 'pages.usercenter.baseInfo.note',
                                    defaultMessage: '备注',
                                })}
                                rules={[
                                    {
                                        required: true,
                                        message: (
                                            <FormattedMessage
                                                id="pages.usercenter.baseInfo.note.required"
                                                defaultMessage="请输入备注!"
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
                                name="password"
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
                                name="newPassword"
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
                                                defaultMessage="请输入新密码！"
                                            />
                                        ),
                                    },
                                ]}
                            />
                            <ProFormText.Password
                                name="newPasswordAgain"
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
                                                defaultMessage="请再次输入新密码"
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