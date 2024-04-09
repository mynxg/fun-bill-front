import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
    PageContainer,
    ProDescriptions,
    ProTable,
} from '@ant-design/pro-components';
import { Button, Drawer, Modal, message,Spin  } from 'antd';

import React, { useEffect, useRef, useState,useCallback } from 'react';

// import CreateModal from "./components/CreateModal";
// import UpdateModal from "./components/UpdateModal";
import ReadModal from "./Components/ReadModal";

import {
    listLoginInfoVOByPageUsingGET,
} from "@/services/logininfo/logininfoController";
import { useModel } from "@umijs/max";

// 登录日志列表 表格列，分页大小
import { LOGININFOENTITYCOLUMN , PAGESIZE } from "@/constant/loginInfo";

/**
 * 登录日志管理
 * @returns
 */
const LoginInfoManager: React.FC = () => {

    /**
  * @en-US Pop-up window of new window
  * @zh-CN 新建窗口的弹窗
  *  */
    // const [createModalOpen, handleModalOpen] = useState<boolean>(false);

    // const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
    // const [showDetail, setShowDetail] = useState<boolean>(false);
    const actionRef = useRef<ActionType>();
    const [currentRow, setCurrentRow] = useState<LoginInfoEntityAPI.LoginInfoVO>();

    const [readModalOpen, handleReadModalOpen] = useState<boolean>(false);

    //分页
    const [formValue, setFormValue] = useState<LoginInfoEntityAPI.LoginInfoVO[]>([]);
    const [total, setTotal] = useState<number>(0)
    const [isLoading, setIsLoading] = useState(true);

    //获取用户信息
    const getFormInfo = async (pageNum = 1, pageSize = PAGESIZE) => {
        const res = await listLoginInfoVOByPageUsingGET({
            pageNum: pageNum,
            pageSize: pageSize,
            // infoId: 'infoId',
            // userType: 'sys_user',
        })
        setTotal(res?.total || 0)
        console.log(res?.data);
        setFormValue(res?.data || []);
        setIsLoading(false);
    }

    //点击详情
    const readClickStatus = useCallback((record:LoginInfoEntityAPI.LoginInfoVO) => {
        handleReadModalOpen(true);
        setCurrentRow(record);
      }, [handleReadModalOpen, setCurrentRow]);

    //   //点击修改
    //   const updateClickStatus = useCallback((record:LoginInfoEntityAPI.LoginInfoVO) => {
    //     handleUpdateModalOpen(true);
    //     setCurrentRow(record);
    //   }, [handleUpdateModalOpen, setCurrentRow]);



    //初始化
    useEffect(() => {
        getFormInfo();
    }, []);

    //如果网络请求数据还没拿到，就先 加载中  转圈
    if (isLoading) {
        return <Spin />
    }

    //表格列

    const columns: ProColumns<LoginInfoEntityAPI.LoginInfoVO>[] = [
        ...LOGININFOENTITYCOLUMN,
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
                        readClickStatus(record);
                    }}
                >
                    详情
                </Button>,
                // <a
                //     key="modify"
                //     onClick={() => {
                //         // handleUpdateModalOpen(true);
                //         // setCurrentRow(record);
                //         updateClickStatus(record);
                //     }}
                // >
                //     修改
                // </a>,
                // <Button
                //     type={"text"}
                //     danger={true}
                //     key="config"
                //     onClick={() => {
                //         //提示是否删除
                //         Modal.confirm({
                //             title: '删除',
                //             content: '确定删除吗？',
                //             onOk: () => {
                //                 handleRemove(record)
                //             }
                //         })
                //     }}
                // >
                //     删除
                // </Button>,
            ],
        },
    ];

    return (
        <PageContainer>
            <ProTable<LoginInfoEntityAPI.LoginInfoVO, LoginInfoEntityAPI.PageParams>
                key="main"
                pagination={{
                    total,
                    pageSize: PAGESIZE,
                    onChange: async (pageNum, pageSize) => {
                        await getFormInfo(pageNum, pageSize);
                    },
                }}
                headerTitle={'登录日志信息'}
                actionRef={actionRef}
                rowKey="key"
                search={{
                    labelWidth: 120,
                }}
                toolBarRender={() => [
                    // <Button
                    //     type="primary"
                    //     key="primary"
                    //     onClick={() => {
                    //         handleModalOpen(true);
                    //     }}
                    // >
                    //     <PlusOutlined /> 新建用户
                    // </Button>,
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

                {/* 详情弹窗 */}
            <Drawer width={640}
                placement="right"
                closable={false}
                onClose={ ()=> {
                    setCurrentRow(undefined);
                    handleReadModalOpen(false)}
                }
                open={readModalOpen}>
                    <ReadModal EntityItem={currentRow} EntityColumns={LOGININFOENTITYCOLUMN}/>

            </Drawer>

        </PageContainer>
    );
}

export default LoginInfoManager;






