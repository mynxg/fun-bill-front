
import { ProColumns } from "@ant-design/pro-components";
import type { DescriptionsProps } from 'antd';
export const SYSTEM_LOGO = "https://avatars.githubusercontent.com/u/103118339?v=4";
export const PAGESIZE = 3;
export const BASEPAGESIZE = 6;
export const NEWSAVATAR = "https://hzh-1318734603.cos.ap-shanghai.myqcloud.com/%E6%96%B0%E9%97%BB.jpg";

/**
 * @name BASECOLUMN
 * @description 基础表格列
 * @typedef BASECOLUMN
 * @property {string} title - 标题
 * @property {string} dataIndex - 数据索引
 * @property {string} valueType - 值类型
 * @property {string} formItemProps - 表单项属性
 * @property {string} rules - 规则
 * @property {string} valueEnum - 值枚举
 * @property {string} render - 渲染
 * @property {string} onClick - 点击事件
 * @property {string} key - 键
 * @property {string} ellipsis - 省略
 * @property {string} copyable - 可复制
 * @property {string} hideInTable - 隐藏表格
 * @property {string} fieldProps - 字段属性
 * @property {string} format - 格式
 * @property {string} hideInDescriptions - 隐藏描述
 * @property {string} show - 显示
 * @property {string} hideInDescriptions - 隐藏描述
 * @property {string} hideInTable - 隐藏表格
 * @property {string} hideInForm - 隐藏表单
 * @property {string} hideInSearch - 隐藏搜索
 */
export const BASECOLUMN: ProColumns<ConfigEntityAPI.ConfigVO>[] = [
    {
        title: 'id',
        dataIndex: 'configId',
        valueType: 'index',
    },
    {
        title: '配置名称',
        dataIndex: 'configName',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入配置名称",
            }]
        }
    },
    {
        title: '配置键',
        dataIndex: 'configKey',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入配置键",
            }]
        }
    },
    {
        title: '配置值',
        dataIndex: 'configValue',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入配置值",
            }]
        }
    },
    {
        title: '系统内置',
        dataIndex: 'configType',
        valueType: 'text',
        valueEnum: {
            'Y': {
                text: '是',
                status: 'Success',
            },
            'N': {
                text: '否',
                status: 'Error',
            },
        },
    },
    {
        title: '备注',
        dataIndex: 'remark',
        valueType: 'textarea',
    },
    {
        title: '创建人',
        dataIndex: 'createBy',
        valueType: 'text',
        hideInForm: true,
        hideInTable: true,
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        valueType: 'dateTime',
        hideInForm: true,
        hideInTable: true,
    },
    {
        title: '修改人',
        dataIndex: 'updateBy',
        valueType: 'text',
        hideInForm: true,
        hideInTable: true,
    },
    {
        title: '修改时间',
        dataIndex: 'updateTime',
        valueType: 'dateTime',
        hideInForm: true,
        hideInTable: true,
    },
    // {
    //     title: '操作',
    //     valueType: 'option',
    //     render: (text, record, _, action) => [
    //     <a key="editable" onClick={() => {
    //         action?.startEditable?.(record.roleId);
    //     }}>
    //         编辑
    //     </a>,
    //     ],
    // },
]


export const UPDATECOLUMN: ProColumns<ConfigEntityAPI.UpdateRequestParams>[] = [
    {
        title: 'id',
        dataIndex: 'configId',
        valueType: 'index',
        hideInForm: true,
    },
    {
        title: '配置名称',
        dataIndex: 'configName',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入配置名称",
            }]
        }
    },
    {
        title: '配置键',
        dataIndex: 'configKey',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入配置键",
            }]
        }
    },
    {
        title: '配置值',
        dataIndex: 'configValue',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入配置值",
            }]
        }
    },
    {
        title: '系统内置',
        dataIndex: 'configType',
        valueType: 'text',
        valueEnum: {
            'Y': {
                text: '是',
                status: 'Success',
            },
            'N': {
                text: '否',
                status: 'Error',
            },
        },
    },
    {
        title: '备注',
        dataIndex: 'remark',
        valueType: 'textarea',
    },
    {
        title: '创建人',
        dataIndex: 'createBy',
        valueType: 'text',
        hideInForm: true,
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        valueType: 'dateTime',
        hideInForm: true,
    },
    {
        title: '修改人',
        dataIndex: 'updateBy',
        valueType: 'text',
        hideInForm: true,
    },
    {
        title: '修改时间',
        dataIndex: 'updateTime',
        valueType: 'dateTime',
        hideInForm: true,
    },
]

export const BASEADDCOLUMN: ProColumns<ConfigEntityAPI.ConfigVO>[] = [
    {
        title: 'id',
        dataIndex: 'configId',
        valueType: 'index',
    },
    {
        title: '配置名称',
        dataIndex: 'configName',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入配置名称",
            }]
        }
    },
    {
        title: '配置键',
        dataIndex: 'configKey',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入配置键",
            }]
        }
    },
    {
        title: '配置值',
        dataIndex: 'configValue',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入配置值",
            }]
        }
    },
    {
        title: '系统内置',
        dataIndex: 'configType',
        valueType: 'text',
        valueEnum: {
            'Y': {
                text: '是',
                status: 'Success',
            },
            'N': {
                text: '否',
                status: 'Fail',
            },
        },
    },
    {
        title: '备注',
        dataIndex: 'remark',
        valueType: 'textarea',
    },
    {
        title: '创建人',
        dataIndex: 'createBy',
        valueType: 'text',
        hideInForm: true,
        hideInTable: true,
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        valueType: 'dateTime',
        hideInForm: true,
        hideInTable: true,
    },
    {
        title: '修改人',
        dataIndex: 'updateBy',
        valueType: 'text',
        hideInForm: true,
        hideInTable: true,
    },
    {
        title: '修改时间',
        dataIndex: 'updateTime',
        valueType: 'dateTime',
        hideInForm: true,
        hideInTable: true,
    },
]