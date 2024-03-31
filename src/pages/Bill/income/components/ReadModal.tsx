import React, { useState } from 'react';
import type { DescriptionsProps } from 'antd';
import {ProColumns} from "@ant-design/pro-components";
import {ProDescriptions} from "@ant-design/pro-descriptions";
import { Avatar, Col, Divider, Drawer, List, Row,Descriptions} from 'antd';
import { ENTITYCOLUMN } from '@/constant/bill';

export type Props = {
    EntityItem: BILLENTITYAPI.BillVO;
    EntityColumns: ProColumns<BILLENTITYAPI.BillVO>[];
    visible: boolean;
  };


/**
 * 用户详情组件
 * @param props  用户详情组件
 * @returns     
 */
const ReadModal: React.FC<Props> = (props) => {
    const {EntityItem,EntityColumns} = props;
    //描述组件：用于展示用户信息
    let items: DescriptionsProps['items'] = [];
//     if(userEntityItem){
//     items = [
//         {
//           key: '1',
//           label: 'UserName',
//           children: userEntityItem.userName,
//         },
//         {
//           key: '2',
//           label: '手机号码',
//           children:  userEntityItem.photoNumber,
//         },
//         {
//             key: '2',
//             label: '性别',
//             children:  userEntityItem.sex,
//           },
//           {
//             key: '2',
//             label: 'nickName',
//             children:  userEntityItem.nickName,
//           },
//     ];
// }

//描述列表组件
  return (
    <>
      <ProDescriptions dataSource={EntityItem} columns={EntityColumns}/>
    </>
  );
};

export default ReadModal;