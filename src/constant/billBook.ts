import { ProColumns } from "@ant-design/pro-components";
import type { DescriptionsProps } from 'antd';
import { Image } from 'antd';

export const SYSTEM_LOGO = "https://avatars.githubusercontent.com/u/103118339?v=4";
export const PAGESIZE = 3;
export const BASEPAGESIZE = 6;
export const NEWSAVATAR = "https://hzh-1318734603.cos.ap-shanghai.myqcloud.com/%E6%96%B0%E9%97%BB.jpg";


import { listByPageUsingGET } from "@/services/billBookCategory/billBookCategoryController";

//获取账本分类列表
const resultStr = await listByPageUsingGET({
    pageNum: 1,
    pageSize: 10,
});

//账本分类枚举
const valueEnumBillBookCategory = {
};

//遍历账本分类列表
resultStr.data?.map((item) => {

    valueEnumBillBookCategory[item.bookCategoryId] = {
        id: item.bookCategoryId,
        text: item.bookCategoryName,
        status: 'Success',
    }
})

/**
 * 列表展示 基本列
 */
export const BASEENTITYCOLUMN: ProColumns<BILLBOOKENTITYAPI.BillBookVO>[] = [
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
        hideInTable: false,
        valueType: 'select',
        valueEnum: valueEnumBillBookCategory,
        defaultFilteredValue: ['1'],
    },
    // {
    //     title: '图片地址',
    //     dataIndex: 'photoUrl',
    //     hideInTable: true,
    //     hideInForm: true,
    //     hideInSearch: true,
    //     valueType: 'image',
    // },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        valueType: 'dateTime',
        hideInSearch: true,
        hideInForm: true,
        sorter: (a, b) => a.createTime - b.createTime,
    },
    {
        title: '创建人',
        dataIndex: 'createBy',
        hideInTable: false,
        hideInSearch: true,
        valueType: 'text',
    },
    {
        title: '修改时间',
        dataIndex: 'updateTime',
        hideInTable: false,
        hideInSearch: true,
        valueType: 'text',
        sorter: (a, b) => a.updateTime - b.updateTime,
    },
    {
        title: '修改人',
        dataIndex: 'updateBy',
        hideInTable: false,
        hideInSearch: true,
        valueType: 'text',
    }
]

/**
 * 修改基本列
 */
export const UPDATECOLUMN: ProColumns<BILLBOOKENTITYAPI.UpdateRequestParams>[] = [
    {
        title: 'id',
        dataIndex: 'bookId',
        valueType: 'index',
    },
    {
        title: '账本id',
        dataIndex: 'bookId',
        valueType: 'digit',
        hideInForm: false,
        fieldProps: {
            disabled: true,
            //加粗
            style: { fontWeight: 'bold' }
        }
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
        hideInForm: true,
        valueType: 'text',
    },
    {
        title: '账本分类',
        dataIndex: 'bookCategoryId',
        hideInTable: false,
        valueType: 'select',
        valueEnum: valueEnumBillBookCategory,
    },
    // {
    //     title: '图片地址',
    //     dataIndex: 'photoUrl',
    //     hideInTable: true,
    //     hideInForm: true,
    //     valueType: 'text',
    // },
    {
        title: '备注',
        dataIndex: 'remark',
        hideInTable: true,
        valueType: 'textarea',
    },
]

/**
 * 添加基本列
 */
export const ADDCOLUMN: ProColumns<BILLBOOKENTITYAPI.UpdateRequestParams>[] = [
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
        hideInForm: true,
        valueType: 'text',
    },
    {
        title: '账本分类',
        dataIndex: 'bookCategoryId',
        hideInTable: false,
        valueType: 'select',
        valueEnum: valueEnumBillBookCategory,
    },
    // {
    //     title: '图片地址',
    //     dataIndex: 'photoUrl',
    //     hideInTable: true,
    //     hideInForm: true,
    //     valueType: 'text',
    // },
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
        hideInTable: false,
        valueType: 'select',
        valueEnum: valueEnumBillBookCategory,
    },
    // {
    //     title: '图片地址',
    //     dataIndex: 'photoUrl',
    //     hideInTable: true,
    //     hideInForm: true,
    //     valueType: 'image',
    // },
    {
        title: '创建时间',
        dataIndex: 'createTime',
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