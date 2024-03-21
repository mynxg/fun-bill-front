import React, { useState } from 'react';
import type { DescriptionsProps } from 'antd';
import {ProColumns} from "@ant-design/pro-components";
import {ProDescriptions} from "@ant-design/pro-descriptions";
import { Avatar, Col, Divider, Drawer, List, Row,Descriptions} from 'antd';


export type Props = {
    EntityItem: LoginInfoEntityAPI.LoginInfoVO;
    EntityColumns: ProColumns<LoginInfoEntityAPI.LoginInfoVO>[];
    visible: boolean;
  };


/**
 * 用户详情组件
 * @param props  用户详情组件
 * @returns     
 */
const ReadModal: React.FC<Props> = (props) => {
    const {EntityItem,EntityColumns} = props;

//描述列表组件
  return (
    <>
      <ProDescriptions dataSource={EntityItem} columns={EntityColumns}/>
    </>
  );
};

export default ReadModal;