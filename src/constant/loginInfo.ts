import { ProColumns } from "@ant-design/pro-components";
import type { DescriptionsProps } from 'antd';

// 用户分页大小
export const PAGESIZE = 6;

/**
 *      infoId: string,
        userName: string,
        status: string,
        ipAddr: string,
        loginLocation: string,
        browser: string,
        os: string,
        msg: string,
        loginTime: string,
 * @description 登录信息表格列
 * @param {string} title 标题
 */
export const LOGININFOENTITYCOLUMN: ProColumns<LoginInfoEntityAPI.LoginInfoVO>[] = [
    {
      title: 'id',
      key: "text",
      dataIndex: 'infoId',
      valueType: 'index',
      ellipsis: true,
      copyable: true,
    },
    {
      title: '用户名',
      dataIndex: 'userName',
      valueType: 'text',
    },
    {
      title: 'ip地址',
      dataIndex: 'ipAddr',
      valueType: 'text',
    },
    {
      title: '登录位置',
      dataIndex: 'loginLocation',
      hideInTable: false,
      valueType: 'text',
    },
    {
      title: '浏览器类型',
      dataIndex: 'browser',
      hideInTable: false,
      valueType: 'text',
    },
    {
        title: '操作系统',
        dataIndex: 'os',
        hideInTable: false,
        valueType: 'text',
      },
      {
        title: '消息',
        dataIndex: 'msg',
        hideInTable: false,
        valueType: 'text',
      },
    {
      title: '状态',
      dataIndex: 'status',
      hideInTable: false,
      valueType: 'text',
      valueEnum: {
        '0': {
          text: '成功',
          status: 'Success',
        },
        '1': {
          text: '失败',
          status: 'Error',
        },
      },
    },
    {
      title: '最后登录时间',
      dataIndex: 'loginTime',
      hideInTable: false,
      valueType: 'date',
      sorter: (a, b) => new Date(a.loginTime) - new Date(b.loginTime),
      fieldProps: {
        format: 'YYYY.MM.DD HH:mm:ss',
      },
    },
  ]