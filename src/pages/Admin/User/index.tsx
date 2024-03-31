import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
    PageContainer,
    ProDescriptions,
    ProTable,
} from '@ant-design/pro-components';
import { Button, Drawer, Modal, message,Spin  } from 'antd';

import React, { useEffect, useRef, useState,useCallback } from 'react';

import CreateModal from "./components/CreateModal";
import UpdateModal from "./components/UpdateModal";
import ReadModal from "./components/ReadModal";

import {
    addUserByUsingPOST,
    deleteUserByUsingPOST,
    updateUserByUsingPOST,
    listUserVOByPageUsingGET,
} from "@/services/user/userController";
import { useModel } from "@umijs/max";

import { USERCOLUMN, UPDATEUSERCOLUMN, USERPAGESIZE,USERENTITYCOLUMN } from "@/constant/user";


/**
 * 用户管理
 * @returns
 */
const UserManager: React.FC = () => {

    /**
  * @en-US Pop-up window of new window
  * @zh-CN 新建窗口的弹窗
  *  */
    const [createModalOpen, handleModalOpen] = useState<boolean>(false);

    const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const actionRef = useRef<ActionType>();
    const [currentRow, setCurrentRow] = useState<UserEntityAPI.UserVO>();

    const [readModalOpen, handleReadModalOpen] = useState<boolean>(false);

    //分页
    const [formValue, setFormValue] = useState<UserEntityAPI.UserVO[]>([]);
    const [total, setTotal] = useState<number>(0)
    const [isLoading, setIsLoading] = useState(true);

    //获取用户信息
    const getFormInfo = async (pageNum = 1, pageSize = USERPAGESIZE) => {
        const res = await listUserVOByPageUsingGET({
            pageNum: pageNum,
            pageSize: pageSize,
            userId: "userId",
            userType: 'sys_user',
        })
        setTotal(res?.total || 0)
        console.log(res?.data);
        setFormValue(res?.data || []);
        setIsLoading(false);
    }

    //点击详情
    const readClickStatus = useCallback((record:UserEntityAPI.UserVO) => {
        handleReadModalOpen(true);
        setCurrentRow(record);
      }, [handleReadModalOpen, setCurrentRow]);

      //点击修改
      const updateClickStatus = useCallback((record:UserEntityAPI.UserVO) => {
        handleUpdateModalOpen(true);
        setCurrentRow(record);
      }, [handleUpdateModalOpen, setCurrentRow]);


      //点击添加
    const handleAdd = async (fields: UserEntityAPI.userAddRquestParams) => {
        const hide = message.loading('正在添加');
        try {
            await addUserByUsingPOST({
                ...fields,
                userType: 'sys_user',
            });
            hide();
            await getFormInfo();
            actionRef?.current?.reload()
            message.success('添加成功');
            if (createModalOpen) handleModalOpen(false);
            return true;
        } catch (error: any) {
            hide();
            message.error("添加失败", error?.message);
            return false;
        }
    };

    /**
      *  Delete node
      * @zh-CN 删除用户
      *
      * @param selectedRow
      */
    const handleRemove = async (selectedRow: UserEntityAPI.DeleteRequestParams) => {
        const hide = message.loading('正在删除');
        if (!selectedRow) return true;
        try {
            await deleteUserByUsingPOST({
                userId: selectedRow.userId,
            });
            hide();
            await getFormInfo();
            actionRef?.current?.reload()
            message.success('删除成功');
            return true;
        } catch (error: any) {
            hide();
            message.error("删除失败", error?.message);
            return false;
        }
    };

    //初始化
    useEffect(() => {
        console.log("useEffect");
        getFormInfo();
        console.log("构造函数执行完，formValue状态变化后：", formValue)
    }, []);

    //如果网络请求数据还没拿到，就先 加载中  转圈
    if (isLoading) {
        return <Spin />
    }

    /**
     * @en-US Update node
     * @zh-CN 更新用户
     *
     * @param fields
     */
    const handleUpdate = async (fields: UserEntityAPI.UserUpdateRequestParams) => {
        if (!currentRow) {
            return;
        }
        const hide = message.loading('更新中');
        try {
            await updateUserByUsingPOST({
                userId: currentRow.userId,
                ...fields,
            });
            hide();
            message.success('更新成功');
            handleUpdateModalOpen(false);
            await getFormInfo();
            actionRef?.current?.reload()
            return true;
        } catch (error) {
            hide();
            message.error('更新失败');
            return false;
        }
    };

    const columns: ProColumns<UserEntityAPI.UserVO>[] = [
        ...USERCOLUMN,
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
                <Button
                    color={"blue"}
                    type={"link"}
                    key="detail"
                    onClick={() => {
                        // handleModalOpen(true);
                        // setCurrentRow(record);
                        readClickStatus(record);
                        // history.push(`/receive/record?childrenId=${record?.id}`)
                    }}
                >
                    详情
                </Button>,
                <a
                    key="modify"
                    onClick={() => {
                        // handleUpdateModalOpen(true);
                        // setCurrentRow(record);
                        updateClickStatus(record);
                    }}
                >
                    修改
                </a>,
                <Button
                    type={"text"}
                    danger={true}
                    key="config"
                    onClick={() => {
                        //提示是否删除
                        Modal.confirm({
                            title: '删除',
                            content: '确定删除吗？',
                            onOk: () => {
                                handleRemove(record)
                            }
                        })
                    }}
                >
                    删除
                </Button>,
            ],
        },
    ];
    //UPDATEUSERCOLUMN
    const updateColumn: ProColumns<UserEntityAPI.UserUpdateRequestParams>[] = [
        ...UPDATEUSERCOLUMN,
    ];

    return (
        <PageContainer>
            <ProTable<UserEntityAPI.UserVO, UserEntityAPI.PageParams>
                key="main"
                pagination={{
                    total,
                    pageSize: USERPAGESIZE,
                    onChange: async (pageNum, pageSize) => {
                        await getFormInfo(pageNum, pageSize);
                    },
                }}
                headerTitle={'用户信息'}
                actionRef={actionRef}
                rowKey="key"
                search={{
                    labelWidth: 120,
                }}
                toolBarRender={() => [
                    <Button
                        type="primary"
                        key="primary"
                        onClick={() => {
                            handleModalOpen(true);
                        }}
                    >
                        <PlusOutlined /> 新建用户
                    </Button>,
                ]}
                request={async () => ({
                    data: formValue || {},
                })}
                columns={columns}
                rowSelection={{
                    onChange: (e) => {
                        console.log("rowSelection")
                        // setSelectedRows(selectedRowKeys);
                        console.log(e);
                    },
                }}
            />
            <UpdateModal
                columns={updateColumn}
                onSubmit={async (values: UserEntityAPI.UserUpdateRequestParams) => { handleUpdate(values) }}
                onCancel={() => {
                    handleUpdateModalOpen(false);
                    if (!showDetail) {
                        setCurrentRow(undefined);
                    }
                }}
                visible={updateModalOpen}
                values={currentRow || {}}
            />

            <Drawer
                key="drawer"
                width={600}
                open={showDetail}
                onClose={() => {
                    setCurrentRow(undefined);
                    setShowDetail(false);
                }}
                closable={false}
            >
                {currentRow?.userName && (
                    <ProDescriptions<UserEntityAPI.UserVO>
                        column={2}
                        title={currentRow?.userName}
                        request={async () => ({
                            data: currentRow || {},
                        })}
                        params={{
                            id: currentRow?.userName,
                        }}
                        columns={columns as ProDescriptionsItemProps<UserEntityAPI.UserVO>[]}
                    />
                )}
            </Drawer>
            <CreateModal columns={updateColumn} onCancel={() => { handleModalOpen(false) }}
                onSubmit={async (values: UserEntityAPI.UserUpdateRequestParams) => {
                    await handleAdd(values)
                }} visible={createModalOpen} file={false} />

            <Drawer width={640}
                placement="right"
                closable={false}
                onClose={ ()=> {
                    setCurrentRow(undefined);
                    handleReadModalOpen(false)}
                }
                open={readModalOpen}>
                    <ReadModal EntityItem={currentRow} EntityColumns={USERENTITYCOLUMN}/>

            </Drawer>

        </PageContainer>
    );
}

export default UserManager;






