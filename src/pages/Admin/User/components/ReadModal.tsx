import React, { useState } from 'react';
import type { DescriptionsProps } from 'antd';
import { Avatar, Col, Divider, Drawer, List, Row,Descriptions} from 'antd';

export type Props = {
    userEntityItem: UserEntityAPI.UserVO;
    visible: boolean;
  };

const ReadModal: React.FC<Props> = (props) => {
    const {userEntityItem,visible,} = props;
    //描述组件：用于展示用户信息
    let items: DescriptionsProps['items'] = [];
    if(userEntityItem){
    items = [
        {
          key: '1',
          label: 'UserName',
          children: userEntityItem.userName,
        },
        {
          key: '2',
          label: 'Telephone',
          children:  userEntityItem.photoNumber,
        },
    ];
}

  return (
    <>
         <Descriptions title="User Info" layout="vertical" items={items} />
    </>
  );
};

export default ReadModal;