
import { ProColumns } from "@ant-design/pro-components";
import type { DescriptionsProps } from 'antd';
export const SYSTEM_LOGO = "https://avatars.githubusercontent.com/u/103118339?v=4";
export const PAGESIZE = 3;
export const ROLEPAGESIZE = 6;
export const NEWSAVATAR = "https://hzh-1318734603.cos.ap-shanghai.myqcloud.com/%E6%96%B0%E9%97%BB.jpg";

export const RULECOLUMN: ProColumns<RoleEntityAPI.RoleVO>[] = [
    {
        title: 'id',
        dataIndex: 'roleId',
        valueType: 'index',
    },
    {
        title: '角色名称',
        dataIndex: 'roleName',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入角色名称",
            }]
        }
    },
    {
        title: '角色权限字符',
        dataIndex: 'roleKey',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入姓名",
            }]
        }
    },
    {
        title: '角色排序',
        dataIndex: 'roleSort',
        valueType: 'text',
        sorter: (a, b) => a.roleSort - b.roleSort,
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入角色排序",
            }]
        }
    },
    {
        title: '状态',
        dataIndex: 'status',
        valueType: 'text',
        valueEnum: {
            '0': {
                text: '正常',
                status: 'Success',
            },
            '1': {
                text: '禁用',
                status: 'Success',
            },
        },
    },
    {
        title: '数据权限',
        dataIndex: 'dataScope',
        valueType: 'text',
        valueEnum: {
            '0': {
                text: '全部',
                status: 'Success',
            },
            '1': {
                text: '自己',
                status: 'Success',
            },
            '2': {
                text: '自定义',
                status: 'Success',
            },
        },
    },
    {
        title: '删除标志',
        dataIndex: 'delFlag',
        valueType: 'text',
        valueEnum: {
            '0': {
                text: '正常',
                status: 'Success',
            },
            '1': {
                text: '删除',
                status: 'Success',
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
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        valueType: 'dateTime',
        sorter: (a, b) => a.createTime - b.createTime,
    },
    {
        title: '修改人',
        dataIndex: 'updateBy',
        valueType: 'text',
    },
    {
        title: '修改时间',
        dataIndex: 'updateTime',
        valueType: 'dateTime',
        sorter: (a, b) => a.updateTime - b.updateTime,
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


export const UPDATEROLECOLUMN: ProColumns<RoleEntityAPI.UpdateRequestParams>[] = [
    {
        title: 'id',
        dataIndex: 'roleId',
        valueType: 'index',
    },
    {
        title: '角色名称',
        dataIndex: 'roleName',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入角色名称",
            }]
        }
    },
    {
        title: '角色权限字符',
        dataIndex: 'roleKey',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入姓名",
            }]
        }
    },
    // {
    //     title: '角色排序',
    //     dataIndex: 'roleSort',
    //     valueType: 'text',
    //     formItemProps: {
    //         rules: [{
    //             required: true,
    //             message: "请输入角色排序",
    //         }]
    //     }
    // },
    {
        title: '状态',
        dataIndex: 'status',
        valueType: 'text',
        valueEnum: {
            '0': {
                text: '正常',
                status: 'Success',
            },
            '1': {
                text: '禁用',
                status: 'Success',
            },
        },
    },
    {
        title: '数据权限',
        dataIndex: 'dataScope',
        valueType: 'text',
        valueEnum: {
            '0': {
                text: '全部',
                status: 'Success',
            },
            '1': {
                text: '自己',
                status: 'Success',
            },
            '2': {
                text: '自定义',
                status: 'Success',
            },
        },
    },
    // {
    //     title: '删除标志',
    //     dataIndex: 'delFlag',
    //     valueType: 'text',
    //     valueEnum: {
    //         '0': {
    //             text: '正常',
    //             status: 'Success',
    //         },
    //         '1': {
    //             text: '删除',
    //             status: 'Success',
    //         },
    //     },
    // },
    {
        title: '备注',
        dataIndex: 'remark',
        valueType: 'textarea',
    },
    // {
    //     title: '创建人',
    //     dataIndex: 'createBy',
    //     valueType: 'text',
    // },
    // {
    //     title: '创建时间',
    //     dataIndex: 'createTime',
    //     valueType: 'dateTime',
    // },
    // {
    //     title: '修改人',
    //     dataIndex: 'updateBy',
    //     valueType: 'text',
    // },
    // {
    //     title: '修改时间',
    //     dataIndex: 'updateTime',
    //     valueType: 'dateTime',
    // },
]

/**
 * title: '文本',
          key: 'text',
          dataIndex: 'id',
          ellipsis: true,
          copyable: true,
 */
export const ROLESENTITYCOLUMN: ProColumns<RoleEntityAPI.RoleVO>[] = [
    {
        title: 'id',
        dataIndex: 'roleId',
        valueType: 'index',
    },
    {
        title: '角色名称',
        dataIndex: 'roleName',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入角色名称",
            }]
        }
    },
    {
        title: '角色权限字符',
        dataIndex: 'roleKey',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入姓名",
            }]
        }
    },
    {
        title: '角色排序',
        dataIndex: 'roleSort',
        valueType: 'text',
        formItemProps: {
            rules: [{
                required: true,
                message: "请输入角色排序",
            }]
        }
    },
    {
        title: '状态',
        dataIndex: 'status',
        valueType: 'text',
        valueEnum: {
            '0': {
                text: '正常',
                status: 'Success',
            },
            '1': {
                text: '禁用',
                status: 'Success',
            },
        },
    },
    {
        title: '数据权限',
        dataIndex: 'dataScope',
        valueType: 'text',
        valueEnum: {
            '0': {
                text: '全部',
                status: 'Success',
            },
            '1': {
                text: '自己',
                status: 'Success',
            },
            '2': {
                text: '自定义',
                status: 'Success',
            },
        },
    },
    {
        title: '删除标志',
        dataIndex: 'delFlag',
        valueType: 'text',
        valueEnum: {
            '0': {
                text: '正常',
                status: 'Success',
            },
            '1': {
                text: '删除',
                status: 'Success',
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
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        valueType: 'dateTime',
    },
    {
        title: '修改人',
        dataIndex: 'updateBy',
        valueType: 'text',
    },
    {
        title: '修改时间',
        dataIndex: 'updateTime',
        valueType: 'dateTime',
    },
    // {
    //     title: '最后登录时间',
    //     dataIndex: 'loginTime',
    //     hideInTable: false,
    //     valueType: 'date',
    //     fieldProps: {
    //         format: 'YYYY.MM.DD',
    //     },
    // },
]