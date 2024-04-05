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

const valueEnumBillBookCategory = {
};

resultStr.data?.map((item) => {
    console.log(item)

    valueEnumBillBookCategory[item.bookCategoryId] = {
        text: item.bookCategoryName,
        status: 'Success',
    }
})

/**
 * 基本列
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
        valueType: 'text',
        valueEnum: valueEnumBillBookCategory,
    },
    {
        title: '图片地址',
        dataIndex: 'photoUrl',
        hideInTable: false,
        valueType: 'image',
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        valueType: 'dateTime',
        hideInForm: true,
        sorter: (a, b) => a.createTime - b.createTime,
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
        sorter: (a, b) => a.updateTime - b.updateTime,
    },
    {
        title: '修改人',
        dataIndex: 'updateBy',
        hideInTable: false,
        valueType: 'text',
    }
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
        hideInTable: true,
        hideInForm: true,
        valueType: 'text',
    },
    {
        title: '账本分类',
        dataIndex: 'bookCategoryId',
        hideInTable: false,
        valueType: 'text',
        valueEnum: valueEnumBillBookCategory,
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
        hideInTable: false,
        valueType: 'text',
        valueEnum: valueEnumBillBookCategory,
    },
    {
        title: '图片地址',
        dataIndex: 'photoUrl',
        hideInTable: true,
        valueType: 'image',
    },
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