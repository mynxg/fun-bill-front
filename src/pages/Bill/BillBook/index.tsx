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
    addByUsingPOST,
    deleteByUsingPOST,
    updateByUsingPOST,
    listByPageUsingGET,
} from "@/services/billBook/billBookController";
import { useModel } from "@umijs/max";

import { 
    ENTITYCOLUMN, 
    BASEENTITYCOLUMN, 
    UPDATECOLUMN, 
    BASEPAGESIZE 
} from "@/constant/billBook";


/**
 * 账本管理
 * @name BillBookManager
 * @description 账本管理
 * @typedef BillBookManager
 * @returns
 */
const BillBookManager: React.FC = () => {

    /**
  * @en-US Pop-up window of new window
  * @zh-CN 新建窗口的弹窗
  *  */
    const [createModalOpen, handleModalOpen] = useState<boolean>(false);

    const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const actionRef = useRef<ActionType>();
    const [currentRow, setCurrentRow] = useState<BILLBOOKENTITYAPI.BillBookVO>();

    const [readModalOpen, handleReadModalOpen] = useState<boolean>(false);

    //分页
    const [formValue, setFormValue] = useState<BILLBOOKENTITYAPI.BillBookVO[]>([]);
    const [total, setTotal] = useState<number>(0)
    const [isLoading, setIsLoading] = useState(true);

    //获取账本列表信息
    const getFormInfo = async (pageNum = 1, pageSize = BASEPAGESIZE) => {
        const res = await listByPageUsingGET({
            pageNum: pageNum,
            pageSize: pageSize,
            // billId: 'billId',
            // userType: 'sys_user',
        })
        setTotal(res?.total || 0)
        console.log(res?.data);
        setFormValue(res?.data || []);
        setIsLoading(false);
    }

    //点击详情
    const readClickStatus = useCallback((record:BILLBOOKENTITYAPI.BillBookVO) => {
        handleReadModalOpen(true);
        setCurrentRow(record);
      }, [handleReadModalOpen, setCurrentRow]);

      //点击修改
      const updateClickStatus = useCallback((record:BILLBOOKENTITYAPI.BillBookVO) => {
        handleUpdateModalOpen(true);
        setCurrentRow(record);
      }, [handleUpdateModalOpen, setCurrentRow]);


      //点击添加
    const handleAdd = async (fields: BILLBOOKENTITYAPI.AddRquestParams) => {
        const hide = message.loading('正在添加');
        try {
            const reusltStr = await addByUsingPOST({
                ...fields,
                // userType: 'sys_user',
            });
            if (reusltStr.code !== 200) {
                hide();
                message.error(reusltStr.msg || '添加失败');
                return false;
            }

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
     * 
      * @zh-CN 删除账本
      *
      * @param selectedRow
      */
    const handleRemove = async (selectedRow: BILLBOOKENTITYAPI.DeleteRequestParams) => {
        const hide = message.loading('正在删除');
        if (!selectedRow) return true;
        try {
            const resultStr = await deleteByUsingPOST({
                bookId: selectedRow.bookId,
            });
            if (resultStr.code !== 200) {
                hide();
                message.error(resultStr.msg || '删除失败');
                return false;
            }

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
        // console.log("useEffect");
        getFormInfo();
        // console.log("构造函数执行完，formValue状态变化后：", formValue)
    }, []);

    //如果网络请求数据还没拿到，就先 加载中  转圈
    if (isLoading) {
        return <Spin />
    }

    /**
     * @zh-CN 更新账本
     *
     * @param fields
     */
    const handleUpdate = async (fields: BILLBOOKENTITYAPI.UpdateRequestParams) => {
        if (!currentRow) {
            return;
        }
        const hide = message.loading('更新中');
        try {
            const resultStr = await updateByUsingPOST({
                userId: currentRow.bookId,
                ...fields,
            });
            if (resultStr.code !== 200) {
                hide();
                message.success(resultStr.msg || '更新失败');
                return false;
            }
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

    const columns: ProColumns<BILLBOOKENTITYAPI.BillBookVO>[] = [
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
    const updateColumn: ProColumns<BILLBOOKENTITYAPI.UpdateRequestParams>[] = [
        ...UPDATECOLUMN,
    ];

    return (
        <PageContainer>
            <ProTable<BILLBOOKENTITYAPI.BillBookVO, BILLBOOKENTITYAPI.PageParams>
                key="main"
                pagination={{
                    total,
                    pageSize: BASEPAGESIZE,
                    onChange: async (pageNum, pageSize) => {
                        await getFormInfo(pageNum, pageSize);
                    },
                }}
                headerTitle={'账本信息'}
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
                        <PlusOutlined /> 新建账本
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
                onSubmit={async (values: BILLBOOKENTITYAPI.UpdateRequestParams) => { handleUpdate(values) }}
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
                {currentRow?.bookName && (
                    <ProDescriptions<BILLBOOKENTITYAPI.BillBookVO>
                        column={2}
                        title={currentRow?.bookName}
                        request={async () => ({
                            data: currentRow || {},
                        })}
                        params={{
                            id: currentRow?.bookName,
                        }}
                        columns={columns as ProDescriptionsItemProps<BILLBOOKENTITYAPI.BillBookVO>[]}
                    />
                )}
            </Drawer>
            <CreateModal columns={updateColumn} onCancel={() => { handleModalOpen(false) }}
                onSubmit={async (values: BILLBOOKENTITYAPI.UpdateRequestParams) => {
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
                    <ReadModal EntityItem={currentRow} EntityColumns={ENTITYCOLUMN}/>

            </Drawer>

        </PageContainer>
    );
}

export default BillBookManager;






