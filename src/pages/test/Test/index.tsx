import { PlusOutlined } from '@ant-design/icons';
import type{ ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  PageContainer,
  ProDescriptions,
  ProTable,
} from '@ant-design/pro-components';
import '@umijs/max';
import { Alert, Button, Drawer, Modal, message } from 'antd';
import React, {useEffect, useRef, useState} from 'react';
import CreateModal from "@/components/Modals/CreateModal";
import UpdateModal from "@/components/Modals/UpdateModal";
import {
  addUserUsingPOST,
  deleteUserUsingPOST, listUserVOByPageUsingPOST,
  updateUserUsingPOST,
} from "@/services/test/userController";
import {useModel} from "@umijs/max";
import {history} from "@@/core/history";
// import {addTaskUsingPOST} from "@/services/test/taskController";
import {TASKCOLUMN, USERCOLUMN, USERPAGESIZE} from "@/constant";

const Test: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  const [createTaskModalOpen, handleTaskModalOpen] = useState<boolean>(false);

  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [currentRow, setCurrentRow] = useState<USERTESTAPI.UserVO>();
  //分页
  const [formValue,setFormValue] = useState<USERTESTAPI.UserVO[]>([]);
  const [total,setTotal] = useState<number>(0)
  const { initialState } = useModel('@@initialState');

  const getFormInfo = async (pageNum=1,pageSize=USERPAGESIZE)=>{
    const res = await listUserVOByPageUsingPOST({
    pageNum,
      pageSize,
    //   sortField: 'userId',
    //   userRole: 'children',
    })
    setTotal(res?.total || 0)
    console.log(res?.data);
    setFormValue(res?.data || []);
  }

  const handleAdd = async (fields: USERTESTAPI.UserVO) => {
    const hide = message.loading('正在添加');
    try {
      await addUserUsingPOST({
        ...fields,
        userRole: "children",
      });
      hide();
      await getFormInfo();
      actionRef?.current?.reload()
      message.success('添加成功');
      if(createModalOpen)handleModalOpen(false);
      return true;
    } catch (error: any) {
      hide();
      message.error("添加失败",error?.message);
      return false;
    }
  };

  const handleTaskAdd = async (fields: USERTESTAPI.TaskVO) => {
    const hide = message.loading('正在添加任务');
    if(!currentRow){
      return;
    }
    console.log(currentRow.userId);
    try {
    //   await addTaskUsingPOST({
    //     ...fields,
    //     finishUserId: currentRow.id,
    //     types: 0,
    //     createUserId: initialState?.loginUser?.id,
    //   });
      hide();
      message.success('添加任务成功');
      if(createTaskModalOpen)handleTaskModalOpen(false);
      return true;
    } catch (error: any) {
      hide();
      message.error("添加任务失败",error?.message);
      return false;
    }
  };


  /**
   *  Delete node
   * @zh-CN 删除节点
   *
   * @param selectedRow
   */
  const handleRemove = async (selectedRow: USERTESTAPI.UserVO) => {
    const hide = message.loading('正在删除');
    if (!selectedRow) return true;
    try {
      await deleteUserUsingPOST({
        id: selectedRow.userId,
      });
      hide();
      await getFormInfo();
      actionRef?.current?.reload()
      message.success('删除成功');
      return true;
    } catch (error: any) {
      hide();
      message.error("删除失败",error?.message);
      return false;
    }
  };

useEffect(() => {
    const fetchData = async () => {
        console.log("useEffect");
        await getFormInfo(1, USERPAGESIZE);
    };
    fetchData();
}, []);

  /**
   * @en-US Update node
   * @zh-CN 更新节点
   *
   * @param fields
   */
  const handleUpdate = async (fields: USERTESTAPI.UserVO) => {
    if(!currentRow){
      return;
    }
    const hide = message.loading('更新中');
    try {
      await updateUserUsingPOST({
        id: currentRow.userId,
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
  const columns: ProColumns<USERTESTAPI.UserVO>[] = [
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
            history.push(`/receive/record?childrenId=${record?.id}`)
          }}
        >
          详情
        </Button>,
        <a
          key="modify"
          onClick={() => {
            handleUpdateModalOpen(true);
            setCurrentRow(record);
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
  return (
    <PageContainer>
      <ProTable<USERTESTAPI.UserVO, USERTESTAPI.PageParams>
        key="main"
        pagination={{
          total,
          pageSize: USERPAGESIZE,
          onChange: async (pageNum,pageSize) => {
            await getFormInfo(pageNum,pageSize);
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
          onChange: () => {
          },
        }}
      />
      <UpdateModal
        columns={columns}
        onSubmit={async(values:USERTESTAPI.UserVO)=>{handleUpdate(values)}}
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
          <ProDescriptions<USERTESTAPI.UserVO>
            column={2}
            title={currentRow?.userName}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.userName,
            }}
            columns={columns as ProDescriptionsItemProps<USERTESTAPI.UserVO>[]}
          />
        )}
      </Drawer>
      <CreateModal columns={columns} onCancel={()=>{handleModalOpen(false)}} onSubmit={async (values:USERTESTAPI.UserVO)=>{
        await handleAdd(values)
        }} visible={createModalOpen} file={true}/>
      {/* <CreateModal columns={TASKCOLUMN} onCancel={()=>{handleTaskModalOpen(false)}} onSubmit={async (values:USERTESTAPI.TaskVO)=>{
        await handleTaskAdd(values)
        }} visible={createTaskModalOpen} file={true}/> */}
    
    </PageContainer>
  );
};
export default Test;
