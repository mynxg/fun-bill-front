import '@umijs/max';
import React from 'react';
import {Form,Modal} from "antd";
import {ProColumns, ProTable} from "@ant-design/pro-table/lib";
import MyUploadFile from "@/components/UploadFile";
export type Props = {
  columns: ProColumns<UserEntityAPI.UserUpdateRequestParams>[];
  onCancel: () => void;
  onSubmit: (values: UserEntityAPI.UserUpdateRequestParams) => Promise<void>;
  visible: boolean;
  file?: boolean;
};
const CreateModal: React.FC<Props> = (props) => {
  const {columns, visible, onSubmit, onCancel, file} = props;

  return (
    <Modal open={visible} onCancel={()=> onCancel?.()} footer={null}>
      {/* <div style={{ marginLeft: "20px", marginRight: "10px"}}>
        {file ? (
          <Form requiredMark={true}>
            上传附件:&nbsp;&nbsp;&nbsp;&nbsp;<MyUploadFile />
          </Form>
        ) : null}
      </div> */}
      <br/>
      <ProTable
        type={"form"}
        columns={columns}
        onSubmit={async (value: UserEntityAPI.UserUpdateRequestParams) => {
          onSubmit?.(value);
        }}
      />
    </Modal>
  );
};
export default CreateModal;
