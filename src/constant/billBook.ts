import { ProColumns } from "@ant-design/pro-components";
import type { DescriptionsProps } from 'antd';
export const SYSTEM_LOGO = "https://avatars.githubusercontent.com/u/103118339?v=4";
export const PAGESIZE = 3;
export const BASEPAGESIZE = 6;
export const NEWSAVATAR = "https://hzh-1318734603.cos.ap-shanghai.myqcloud.com/%E6%96%B0%E9%97%BB.jpg";


/**
 * 账本
 * @name BILLBOOKCATEGORYAPI
 * @description 账本分类  列表头部展示、预览、编辑、删除表单展示字段
 * @typedef BILLBOOKCATEGORYAPI
 */
export const BASEADDCOLUMN: ProColumns<BILLBOOKENTITYAPI.BillBookVO>[] = [
    {
        title: 'id',
        dataIndex: 'id',
        valueType: 'index',
    },
    {
        title: '账本名称',
        dataIndex: 'bookName',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '备注',
        dataIndex: 'remark',
        hideInTable: false,
        valueType: 'textarea',
    },
    {
        title: '用户id',
        dataIndex: 'userId',
        hideInTable: true,
        valueType: 'text',
    },
    {
        title: '账本分类',
        dataIndex: 'bookCategoryId',
        hideInTable: true,
        valueType: 'text',
    },
    {
        title: '图片地址',
        dataIndex: 'photoUrl',
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
        title: '创建人',
        dataIndex: 'createBy',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '修改时间',
        dataIndex: 'updateTime',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '修改人',
        dataIndex: 'updateBy',
        hideInTable: false,
        valueType: 'text',
    },
]

export const UPDATECOLUMN: ProColumns<BILLBOOKENTITYAPI.UpdateRequestParams>[] = [
    {
        title: 'id',
        dataIndex: 'bookId',
        valueType: 'index',
    },
    {
        title: '账本名称',
        dataIndex: 'bookName',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '用户id',
        dataIndex: 'userId',
        // hideInTable: true,
        hideInForm: true,
        valueType: 'text',
    },
    {
        title: '账本分类',
        dataIndex: 'bookCategoryId',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '图片地址',
        dataIndex: 'photoUrl',
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

/**
 * title: '文本',
key: 'text',
dataIndex: 'id',
ellipsis: true,
copyable: true,
*/
export const ENTITYCOLUMN: ProColumns<BILLBOOKENTITYAPI.BillBookVO>[] = [
    {
        title: 'id',
        dataIndex: 'bookId',
        valueType: 'index',
    },
    {
        title: '账本名称',
        dataIndex: 'bookName',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '用户id',
        dataIndex: 'userId',
        hideInTable: true,
        valueType: 'text',
    },
    {
        title: '账本分类',
        dataIndex: 'bookCategoryId',
        hideInTable: true,
        valueType: 'text',
    },
    {
        title: '图片地址',
        dataIndex: 'photoUrl',
        hideInTable: true,
        valueType: 'text',
    },
    {
        title: '创建时间',
        dataIndex: 'billTime',
        hideInTable: true,
        valueType: 'dateTime',
    },
    {
        title: '创建人',
        dataIndex: 'createBy',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '修改时间',
        dataIndex: 'updateTime',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '修改人',
        dataIndex: 'updateBy',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '备注',
        dataIndex: 'remark',
        hideInTable: false,
        valueType: 'textarea',
    },
]