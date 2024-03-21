
import {ProColumns} from "@ant-design/pro-components";
import type { DescriptionsProps } from 'antd';
export const SYSTEM_LOGO = "https://avatars.githubusercontent.com/u/103118339?v=4";
export const PAGESIZE = 3;
export const USERPAGESIZE = 6;
export const NEWSAVATAR = "https://hzh-1318734603.cos.ap-shanghai.myqcloud.com/%E6%96%B0%E9%97%BB.jpg";

export const USERCOLUMN : ProColumns<UserEntityAPI.UserVO>[] = [
    {
      title: 'id',
      dataIndex: 'userId',
      valueType: 'index',
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      valueType: 'text',
      formItemProps: {
        rules: [{
          required: true,
          message: "请输入用户名",
        }]
      }
    },
    // {
    //   title: '密码（8位以上不包含特殊字符）',
    //   hideInTable:true,
    //   hideInSearch:true,
    //   dataIndex: 'password',
    //   valueType: 'text',
    //   formItemProps: {
    //     rules: [{
    //       required: true,
    //       message: "请输入密码",
    //     },{
    //       type: "string",
    //       min: 8,
    //       message: "密码小于8位",
    //     },
    //       {
    //         pattern: /^[a-zA-Z0-9]+$/,
    //         message: "不允许包含特殊字符",
    //       }]
    //   }
    // },
    {
      title: '昵称',
      dataIndex: 'nickName',
      valueType: 'text',
      formItemProps: {
        rules: [{
          required: true,
          message: "请输入姓名",
        }]
      }
    },
    {
      title: '用户类型',
      dataIndex: 'userType',
      valueType: 'text',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      hideInTable: false,
      valueType: 'text',
    },
    {
      title: '角色',
      dataIndex: 'userRole',
      hideInForm: true,
      valueEnum: {
        'admin': {
          text: '管理员',
          status: 'Success',
        },
        'children': {
          text: '用户',
          status: 'Success',
        },
      },
    },
    {
      title: '手机号码',
      dataIndex: 'phoneNumber',
      hideInTable: true,
      valueType: 'text',
    },
    {
      title: '最后登录ip',
      dataIndex: 'loginIp',
      hideInTable: true,
      valueType: 'text',
    },
    {
      title: '最后登录时间',
      dataIndex: 'loginTime',
      hideInTable: true,
      valueType: 'text',
    },
    {
      title: '创建时间',
      sorter: true,
      dataIndex: 'createTime',
      valueType: 'dateTime',
      hideInForm: true,
    },
    {
      title: '备注',
      dataIndex: 'remark',
      hideInTable: true,
      valueType: 'textarea',
    },
  ]


  export const UPDATEUSERCOLUMN : ProColumns<UserEntityAPI.UserUpdateRequestParams>[] = [
    {
      title: 'id',
      dataIndex: 'userId',
      valueType: 'index',
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      valueType: 'text',
      formItemProps: {
        rules: [{
          required: true,
          message: "请输入用户名",
        }]
      }
    },
    {
      title: '昵称',
      dataIndex: 'nickName',
      valueType: 'text',
      formItemProps: {
        rules: [{
          required: true,
          message: "请输入姓名",
        }]
      }
    },
    {
      title: '性别',
      dataIndex: 'sex',
      hideInTable: false,
      valueType: 'text',
    },
    // {
    //   title: '角色',
    //   dataIndex: 'userRole',
    //   hideInForm: true,
    //   valueEnum: {
    //     'admin': {
    //       text: '管理员',
    //       status: 'Success',
    //     },
    //     'children': {
    //       text: '用户',
    //       status: 'Success',
    //     },
    //   },
    // },
    {
      title: '手机号码',
      dataIndex: 'phoneNumber',
      hideInTable: true,
      valueType: 'text',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      hideInTable: true,
      valueType: 'text',
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInTable: true,
      valueType: 'text',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      hideInTable: true,
      valueType: 'textarea',
    },
  ]