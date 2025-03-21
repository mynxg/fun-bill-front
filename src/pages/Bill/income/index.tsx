import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
    PageContainer,
    ProDescriptions,
    ProTable,
} from '@ant-design/pro-components';
import { Button, Drawer, Modal, message, Spin } from 'antd';

import React, { useEffect, useRef, useState, useCallback } from 'react';

import CreateModal from "./components/CreateModal";
import UpdateModal from "./components/UpdateModal";
import ReadModal from "./components/ReadModal";

import {
    addByUsingPOST,
    deleteByUsingPOST,
    updateByUsingPOST,
    listBillVOByPageUsingGET,
} from "@/services/bill/billIncomeController";
import { useModel } from "@umijs/max";

import {
    ENTITYCOLUMN,
    BASEENTITYCOLUMN,
    UPDATECOLUMN,
    ADDCOLUMN,
    BASEPAGESIZE
} from "@/constant/bill";


/**
 * 账单收入管理
 * @returns
 */
const BillExpensesManager: React.FC = () => {

    /**
     * @zh-CN 创建弹窗
     */
    const [createModalOpen, handleModalOpen] = useState<boolean>(false);

    const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const actionRef = useRef<ActionType>();
    const [currentRow, setCurrentRow] = useState<BILLENTITYAPI.BillVO>();

    const [readModalOpen, handleReadModalOpen] = useState<boolean>(false);

    //分页
    const [formValue, setFormValue] = useState<BILLENTITYAPI.BillVO[]>([]);
    const [total, setTotal] = useState<number>(0)
    const [isLoading, setIsLoading] = useState(true);

    //获取用户信息
    const getFormInfo = async (pageNum = 1, pageSize = BASEPAGESIZE) => {
        const res = await listBillVOByPageUsingGET({
            pageNum: pageNum,
            pageSize: pageSize,
            // billId: 'billId',
            // userType: 'sys_user',
        })
        setTotal(res?.total || 0)
        // console.log(res?.data);
        setFormValue(res?.data || []);
        setIsLoading(false);
    }

    //点击详情
    const readClickStatus = useCallback((record: BILLENTITYAPI.BillVO) => {
        handleReadModalOpen(true);
        setCurrentRow(record);
    }, [handleReadModalOpen, setCurrentRow]);

    //点击修改
    const updateClickStatus = useCallback((record: BILLENTITYAPI.BillVO) => {
        handleUpdateModalOpen(true);
        setCurrentRow(record);
    }, [handleUpdateModalOpen, setCurrentRow]);


    //点击添加
    const handleAdd = async (fields: BILLENTITYAPI.AddRquestParams) => {
        const hide = message.loading('正在添加');
        try {
            await addByUsingPOST({
                ...fields,
                // userType: 'sys_user',
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
      * @zh-CN 删除账单
      *
      * @param selectedRow
      */
    const handleRemove = async (selectedRow: BILLENTITYAPI.DeleteRequestParams) => {
        const hide = message.loading('正在删除');
        if (!selectedRow) return true;
        try {
            await deleteByUsingPOST({
                billId: selectedRow.billId,
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
        getFormInfo();
    }, []);

    //如果网络请求数据还没拿到，就先 加载中  转圈
    if (isLoading) {
        return <Spin />
    }

    /**
     * @en-US Update node
     * @zh-CN 更新账单
     *
     * @param fields
     */
    const handleUpdate = async (fields: BILLENTITYAPI.UpdateRequestParams) => {
        if (!currentRow) {
            return;
        }
        const hide = message.loading('更新中');
        try {
            await updateByUsingPOST({
                userId: currentRow.billId,
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

    const columns: ProColumns<BILLENTITYAPI.BillVO>[] = [
        ...BASEENTITYCOLUMN,
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
    const updateColumn: ProColumns<BILLENTITYAPI.UpdateRequestParams>[] = [
        ...UPDATECOLUMN,
    ];

    const addColumn: ProColumns<BILLENTITYAPI.AddRquestParams>[] = [
        ...ADDCOLUMN,
    ];

    return (
        <PageContainer>
            <ProTable<BILLENTITYAPI.BillVO, BILLENTITYAPI.PageParams>
                key="main"
                pagination={{
                    total,
                    pageSize: BASEPAGESIZE,
                    onChange: async (pageNum, pageSize) => {
                        await getFormInfo(pageNum, pageSize);
                    },
                }}
                headerTitle={'账单收入信息'}
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
                        <PlusOutlined /> 新建收入账单
                    </Button>,
                ]}
                request={async () => ({
                    data: formValue || {},
                })}
                columns={columns}
                rowSelection={{
                    onChange: () => {
                    },
                }}
            />
            <UpdateModal
                columns={updateColumn}
                onSubmit={async (values: BILLENTITYAPI.UpdateRequestParams) => { handleUpdate(values) }}
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
                {currentRow?.title && (
                    <ProDescriptions<BILLENTITYAPI.BillVO>
                        column={2}
                        title={currentRow?.title}
                        request={async () => ({
                            data: currentRow || {},
                        })}
                        params={{
                            id: currentRow?.title,
                        }}
                        columns={columns as ProDescriptionsItemProps<BILLENTITYAPI.BillVO>[]}
                    />
                )}
            </Drawer>
            <CreateModal columns={addColumn} onCancel={() => { handleModalOpen(false) }}
                onSubmit={async (values: BILLENTITYAPI.UpdateRequestParams) => {
                    await handleAdd(values)
                }} visible={createModalOpen} file={false} />

            <Drawer width={640}
                placement="right"
                closable={false}
                onClose={() => {
                    setCurrentRow(undefined);
                    handleReadModalOpen(false)
                }
                }
                open={readModalOpen}>
                <ReadModal EntityItem={currentRow} EntityColumns={ENTITYCOLUMN} />

            </Drawer>

        </PageContainer>
    );
}

export default BillExpensesManager;






