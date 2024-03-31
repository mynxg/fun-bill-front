
import { ProColumns } from "@ant-design/pro-components";
import type { DescriptionsProps } from 'antd';
export const SYSTEM_LOGO = "https://avatars.githubusercontent.com/u/103118339?v=4";
export const PAGESIZE = 3;
export const BASEPAGESIZE = 6;
export const NEWSAVATAR = "https://hzh-1318734603.cos.ap-shanghai.myqcloud.com/%E6%96%B0%E9%97%BB.jpg";

// billId?: number;
// bookId?: number;
// userId?: number;
// categoryId?: number;
// title?: string;
// amount?: number;
// remark?: string;
// photoUrl?: string;
// billTime?: date;
// delFlag?: string;
// createBy?: string;
// createTime?: date;
// updateBy?: string;
// updateTime?: date;

export const BASEADDCOLUMN: ProColumns<BILLENTITYAPI.BillVO>[] = [
    {
        title: 'id',
        dataIndex: 'billId',
        valueType: 'index',
    },
    {
        title: '账单名称',
        dataIndex: 'title',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入账单名称",
            }]
        }
    },
    {
        title: '金额',
        dataIndex: 'amount',
        valueType: 'money',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入金额",
            }]
        }
    },
    {
        title: '账本id',
        dataIndex: 'bookId',
        hideInTable: true,
        valueType: 'text',
    },
    {
        title: '账本名称',
        dataIndex: 'bookName',
        hideInTable: true,
        valueType: 'text',
    },
    {
        title: '用户id',
        dataIndex: 'userId',
        hideInTable: true,
        valueType: 'text',
    },
    {
        title: '账单分类',
        dataIndex: 'categoryId',
        hideInTable: false,
        valueType: 'text',
    },
    // {
    //     title: '图片地址',
    //     dataIndex: 'photoUrl',
    //     hideInTable: true,
    //     valueType: 'text',
    // },
    {
        title: '账单创建时间',
        dataIndex: 'billTime',
        hideInTable: true,
        valueType: 'dateTime',
    },
    // {
    //     title: '创建时间',
    //     sorter: true,
    //     dataIndex: 'createTime',
    //     valueType: 'dateTime',
    //     hideInForm: true,
    // },
    {
        title: '备注',
        dataIndex: 'remark',
        hideInTable: true,
        valueType: 'textarea',
    },
]

export const UPDATECOLUMN: ProColumns<BILLENTITYAPI.UpdateRequestParams>[] = [
    {
        title: 'id',
        dataIndex: 'billId',
        valueType: 'index',
    },
    {
        title: '账单名称',
        dataIndex: 'title',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入账单名称",
            }]
        }
    },
    {
        title: '金额',
        dataIndex: 'amount',
        valueType: 'money',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入金额",
            }]
        }
    },
    {
        title: '账本分类',
        dataIndex: 'bookId',
        hideInTable: false,
        valueType: 'text',
    },
    // {
    //     title: '用户id',
    //     dataIndex: 'userId',
    //     hideInTable: false,
    //     valueType: 'text',
    // },
    {
        title: '账单分类',
        dataIndex: 'categoryId',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '图片地址',
        dataIndex: 'photoUrl',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '账单创建时间',
        dataIndex: 'billTime',
        hideInTable: true,
        valueType: 'dateTime',

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
export const ENTITYCOLUMN: ProColumns<BILLENTITYAPI.BillVO>[] = [
    {
        title: '账单id',
        dataIndex: 'billId',
        valueType: 'index',
    },
    {
        title: '账单名称',
        dataIndex: 'title',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入账单名称",
            }]
        }
    },
    {
        title: '金额',
        dataIndex: 'amount',
        valueType: 'money',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入金额",
            }]
        }
    },
    {
        title: '账本id',
        dataIndex: 'bookId',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '用户id',
        dataIndex: 'userId',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '分类分类',
        dataIndex: 'categoryId',
        hideInTable: false,
        valueType: 'text',
        valueEnum: {
            // array.forEach(element => {
                
            // });
            1: {
                text: '餐饮',
                status: 'Success',
            },
            2: {
                text: '交通',
                status: 'Success',
            },
            3: {
                text: '购物',
                status: 'Success',
            },
            4: {
                text: '娱乐',
                status: 'Success',
            },
            5: {
                text: '学习',
                status: 'Success',
            },
            6: {
                text: '医疗',
                status: 'Success',
            },
            7: {
                text: '其他',
                status: 'Success',
            },

        }
    },
    {
        title: '图片地址',
        dataIndex: 'photoUrl',
        hideInTable: false,
        valueType: 'text',
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