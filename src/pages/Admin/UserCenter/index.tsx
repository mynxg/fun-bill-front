
import { useLocation, useIntl, FormattedMessage, Helmet, SelectLang, history, } from '@umijs/max';
import React, { useState, useRef, useEffect } from 'react';
import type { DescriptionsProps } from 'antd';
import { Avatar, Col, Divider, Drawer, List, Row, Tabs, Descriptions, Button, message } from 'antd';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
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

import { updateProfileByUsingPOST, updateUserPasswordByUsingPOST } from '@/services/user/userController';
import user from 'mock/user';

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

    const actionRef = useRef<ActionType>();
    //tab切换框的状态
    const [type, setType] = useState<string>('account');
    const intl = useIntl();

    //修改个人信息
    const handleUpdateProfile = async (fields: UserEntityAPI.UserUpdateRequestParams) => {

        const hide = message.loading('正在修改');
        try {
            const msgResult = await updateProfileByUsingPOST({
                ...fields,
            });

            if (msgResult?.code === 200) {
                
                const defaultLoginSuccessMessage = intl.formatMessage({
                    id: '修改成功',
                    defaultMessage: '修改成功',
                });
                actionRef?.current?.reload()
                  //页面重新加载
                  window.location.reload();
                message.success('修改成功');
                return true;
            }else {
                hide();
                message.error(msgResult.msg);
                return false;
            }
    
          
        } catch (error: any) {
            hide();
            message.error("修改失败", error?.message);
            return false;
        }
    };

    //修改个人密码
    const handleUpdatePassword = async (fields: UserEntityAPI.UpdatePasswordRequestParams) => {
        const hide = message.loading('正在修改');
        try {
            if (fields.newPassword !== fields.newPasswordAgain) {
                message.error('两次密码不一致');
                return false;
            }

            const msgResult = await updateUserPasswordByUsingPOST({
                oldPassword: fields.oldPassword,
                newPassword: fields.newPassword,
                newPasswordAgain: fields.newPasswordAgain,
            });

            if (msgResult.code === 200) {
                message.success('密码修改成功');
                actionRef?.current?.reload();
                hide();
                message.success('密码修改成功');
                //页面重新加载
                window.location.reload();
                return true;
            } else {
                hide();
                message.error(msgResult.msg);
                return false;
            }

        } catch (error: any) {
            hide();
            message.error("修改失败", error?.message);
            return false;
        }
    };



    return (
        <ProCard split="vertical">
            <ProCard title="个人信息" colSpan="30%" style={{ backgroundColor: '#fff', borderRadius: '15px', margin: '10px' }}>
                <Descriptions items={items} column={1} />

            </ProCard>
            <ProCard title="基本信息" headerBordered>
                <LoginForm
                    syncToInitialValues 
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
                                    //props.submit();
                                    if (type === 'updatePassword') {
                                        handleUpdatePassword(props.form?.getFieldsValue());
                                        return;
                                    }
                                    console.log(props.form?.getFieldsValue());
                                    handleUpdateProfile(props.form?.getFieldsValue());
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
                        nickName: userData?.nickName,
                        email: userData?.email,
                        phoneNumber: userData?.phoneNumber,
                        remark: userData?.remark,
                        autoLogin: false,
                    }}
                    onFinish={async (values) => {
                        // await handleSubmit(values as LOGINAPI.RegisterParams);
                        console.log("submit",values);
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
                                name="nickName"
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
                            {/* <ProFormText
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
                            /> */}
                            <ProFormText
                                name="phoneNumber"
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
                                name="remark"
                                fieldProps={{
                                    size: 'large',
                                    // prefix: <YuqueOutlined />,
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
                            <ProFormText.Password
                                name="oldPassword"
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