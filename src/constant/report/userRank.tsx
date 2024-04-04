import { ProColumns } from "@ant-design/pro-components";
import type { DescriptionsProps } from 'antd';

// 分页大小
export const PAGESIZE = 6;
// 分页大小
export const BASEPAGESIZE = 6;

/**
 * @description 排行信息表格列
 * @param {string} title 标题
 */
export const BASEENTITYCOLUMN: ProColumns<UserRankEntityAPI.UserRankVO>[] = [
    {
        title: 'id',
        key: "text",
        dataIndex: 'userId',
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
        title: '昵称',
        dataIndex: 'nickName',
        valueType: 'text',
    },
    {
        title: '总金额',
        dataIndex: 'billAmount',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '总账单条数',
        dataIndex: 'billCount',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '总收入',
        dataIndex: 'totalIncome',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '总支出',
        dataIndex: 'totalExpense',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '支出次数',
        dataIndex: 'expenseCount',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '登录次数',
        dataIndex: 'loginCount',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '最后登录时间',
        dataIndex: 'loginTime',
        hideInTable: false,
        valueType: 'dateTime',
        sorter: true,
        fieldProps: {
            format: 'YYYY.MM.DD HH:mm:ss',
        },
        //增加一个时间排序，排序的字段是loginTime，排序的方式是升序，降序
        // sorter: {
        //     compare: (a, b) => a.loginTime - b.loginTime,
        //     multiple: 3,
        // },
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        valueType: 'date',
        hideInTable: true,
        hideInForm: true,
        hideInSearch: true,
        fieldProps: {
            format: 'YYYY.MM.DD HH:mm:ss',
        },
    },
    {
        title: '更新时间',
        dataIndex: 'upateTime',
        valueType: 'date',
        hideInTable: true,
        hideInForm: true,
        hideInSearch: true,
        fieldProps: {
            format: 'YYYY.MM.DD HH:mm:ss',
        },
    },
]

export const READNTITYCOLUMN: ProColumns<UserRankEntityAPI.UserRankVO>[] = [
    // {
    //     title: 'id',
    //     key: "text",
    //     dataIndex: 'userId',
    //     valueType: 'index',
    //     ellipsis: true,
    //     copyable: true,
    // },
    {
        title: '用户id',
        key: "text",
        dataIndex: 'userId',
        valueType: 'text',
    },
    {
        title: '用户名',
        dataIndex: 'userName',
        valueType: 'text',
    },
    {
        title: '昵称',
        dataIndex: 'nickName',
        valueType: 'text',
    },
    {
        title: '总金额',
        dataIndex: 'billAmount',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '总账单条数',
        dataIndex: 'billCount',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '总收入',
        dataIndex: 'totalIncome',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '总支出',
        dataIndex: 'totalExpense',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '支出次数',
        dataIndex: 'expenseCount',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '登录次数',
        dataIndex: 'loginCount',
        hideInTable: false,
        valueType: 'text',
    },
    {
        title: '最后登录时间',
        dataIndex: 'loginTime',
        hideInTable: false,
        valueType: 'dateTime',
        fieldProps: {
            format: 'YYYY.MM.DD HH:mm:ss',
        },
    },
    // {
    //     title: '创建时间',
    //     dataIndex: 'createTime',
    //     valueType: 'date',
    //     hideInTable: true,
    //     hideInForm: true,
    //     hideInSearch: true,
    //     fieldProps: {
    //         format: 'YYYY.MM.DD HH:mm:ss',
    //     },
    // },
    // {
    //     title: '更新时间',
    //     dataIndex: 'upaateTime',
    //     valueType: 'date',
    //     hideInTable: true,
    //     hideInForm: true,
    //     hideInSearch: true,
    //     fieldProps: {
    //         format: 'YYYY.MM.DD HH:mm:ss',
    //     },
    // },
]