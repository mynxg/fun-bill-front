import { ProColumns } from "@ant-design/pro-components";
import type { DescriptionsProps } from 'antd';
export const SYSTEM_LOGO = "https://avatars.githubusercontent.com/u/103118339?v=4";
export const PAGESIZE = 3;
export const BASEPAGESIZE = 6;
export const NEWSAVATAR = "https://hzh-1318734603.cos.ap-shanghai.myqcloud.com/%E6%96%B0%E9%97%BB.jpg";


export const BASEADDCOLUMN: ProColumns<BILLCATEGORYENTITYAPI.BillCategoryVO>[] = [
    {
        title: 'id',
        dataIndex: 'categoryId',
        valueType: 'index',
    },
    {
        title: '账单分类名称',
        dataIndex: 'categoryName',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入账单名称",
            }]
        }
    },
    
    // {
    //     title: '账单分类',
    //     dataIndex: 'categoryId',
    //     hideInTable: false,
    //     valueType: 'text',
    // },

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

export const UPDATECOLUMN: ProColumns<BILLCATEGORYENTITYAPI.UpdateRequestParams>[] = [
    {
        title: 'id',
        dataIndex: 'categoryId',
        valueType: 'index',
    },
    {
        title: '账单分类名称',
        dataIndex: 'categoryName',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入账单名称",
            }]
        }
    },
    
    // {
    //     title: '账单分类',
    //     dataIndex: 'categoryId',
    //     hideInTable: false,
    //     valueType: 'text',
    // },

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

/**
 * title: '文本',
key: 'text',
dataIndex: 'id',
ellipsis: true,
copyable: true,
*/
export const ENTITYCOLUMN: ProColumns<BILLCATEGORYENTITYAPI.BillCategoryVO>[] = [
    {
        title: 'id',
        dataIndex: 'categoryId',
        valueType: 'index',
    },
    {
        title: '账单分类名称',
        dataIndex: 'categoryName',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入账单名称",
            }]
        }
    },
    
    // {
    //     title: '账单分类',
    //     dataIndex: 'categoryId',
    //     hideInTable: false,
    //     valueType: 'text',
    // },

    {
        title: '备注',
        dataIndex: 'remark',
        hideInTable: true,
        valueType: 'textarea',
    },
    {
        title: '账单创建时间',
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