import '@umijs/max';
import React, {useEffect, useRef} from 'react';
import {Modal} from "antd";
import {ProColumns, ProTable} from "@ant-design/pro-table/lib";
import {ProFormInstance} from "@ant-design/pro-form";

export type Props = {
  values: RoleEntityAPI.UpdateRequestParams;
  columns: ProColumns<RoleEntityAPI.UpdateRequestParams>[];
  onCancel: () => void;
  onSubmit: (values: RoleEntityAPI.UpdateRequestParams) => Promise<void>;
  visible: boolean;
};
const UpdateModal: React.FC<Props> = (props) => {
  const {columns, visible, onSubmit, onCancel,values} = props;
  const formRef = useRef<ProFormInstance>();
  useEffect(()=>{
    formRef.current?.setFieldsValue(values)
  })
  return (
    <Modal open={visible} onCancel={()=> onCancel?.()} footer={null}>
      <ProTable
        type={"form"}
        columns={columns}
        formRef={formRef}
        onSubmit={async (value: RoleEntityAPI.UpdateRequestParams)=>{
          onSubmit?.(value)
        }}
      />
    </Modal>
  );
};
export default UpdateModal;
