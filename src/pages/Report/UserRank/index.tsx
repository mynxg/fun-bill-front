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
    listByPageUsingGET,
} from "@/services/report/userRank/userRankController";
import { useModel } from "@umijs/max";

// 列表 表格列，分页大小
import { BASEENTITYCOLUMN ,READNTITYCOLUMN,BASEPAGESIZE } from "@/constant/report/userRank";

/**
 * 用户排行管理
 * @returns
 */
const UserRankManager: React.FC = () => {

    const actionRef = useRef<ActionType>();
    const [currentRow, setCurrentRow] = useState<UserRankEntityAPI.UserRankVO>();

    const [readModalOpen, handleReadModalOpen] = useState<boolean>(false);

    //分页
    const [formValue, setFormValue] = useState<UserRankEntityAPI.UserRankVO[]>([]);
    const [total, setTotal] = useState<number>(0)
    const [isLoading, setIsLoading] = useState(true);

    //获取用户信息
    const getFormInfo = async (pageNum = 1, pageSize = BASEPAGESIZE) => {
        console.log("test:");
        const res = await listByPageUsingGET({
            pageNum: pageNum,
            pageSize: pageSize,
            // userId:param.userId,
            // userName:param.userName,
            // nickName:param.nickName,
            // loginTime:param.loginTime,
        })
        setTotal(res?.total || 0)
        console.log(res?.data);
        setFormValue(res?.data || []);
        setIsLoading(false);
    }

    //点击详情
    const readClickStatus = useCallback((record:UserRankEntityAPI.UserRankVO) => {
        handleReadModalOpen(true);
        setCurrentRow(record);
      }, [handleReadModalOpen, setCurrentRow]);

    //   //点击修改
    //   const updateClickStatus = useCallback((record:UserRankEntityAPI.UserRankVO) => {
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

    const columns: ProColumns<UserRankEntityAPI.UserRankVO>[] = [
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
            <ProTable<UserRankEntityAPI.UserRankVO, UserRankEntityAPI.PageParams>
                key="main"
                pagination={{
                    total,
                    pageSize: BASEPAGESIZE,
                    onChange: async (pageNum, pageSize) => {
                        await getFormInfo(pageNum, pageSize);
                    },
                }}
                headerTitle={'用户总体情况'}
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
                    //     <PlusOutlined /> 新建
                    // </Button>,
                    //查询

                ]}
                request={(params,sort,filter)=>{
                    console.log(params,sort,filter);
                    getFormInfo(params.current,params.pageSize);
                    return Promise.resolve({
                        data:formValue,
                        success:true,
                        total:total,
                    })
                }}
                // dataSource={formValue}
                columns={columns}
                rowSelection={{
                    onChange: () => {
                        // console.log('onChange');
                    },
                }}
                // searchFormRender={}
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
                    <ReadModal EntityItem={currentRow} EntityColumns={READNTITYCOLUMN}/>

            </Drawer>

        </PageContainer>
    );
}

export default UserRankManager;






