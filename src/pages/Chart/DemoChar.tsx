import React from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';
import {genderData} from '@/constant/chart';



const DemoChar: React.FC = () => {
  const config = {
    data: genderData,
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} />;
};
export default DemoChar;

