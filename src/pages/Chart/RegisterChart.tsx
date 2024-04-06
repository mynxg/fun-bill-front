import { DualAxes } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    listByQueryActiveCountUsingGET,
    queryGenderCountUsingGET,
    listByQueryRegisterCounttUsingGET,
    listByQueryBillCountAndAmountUsingGET,
} from '@/services/report/userRank/userRankController';


export const userActivityData: { time: Date; 当天注册量: number }[] = [];

const userRegisterResultStr = await listByQueryRegisterCounttUsingGET({
    // pageNum: 1,
    // pageSize: 10,
});

//集合中放对象
userRegisterResultStr.data?.map((item) => {
    userActivityData.push({
        time: item.createTime ?? new Date(),
        当天注册量: item.registerCount ?? 0,
    });
})

// const userRegisterResultStr = await listByQueryRegisterCounttUsingGET({
//     pageNum: 1,
//     pageSize: 10,
// });

// const userActivityData = userRegisterResultStr.data?.map((item) => {
//     return {
//         time: item.createTime,
//         waiting: item.registerCount,
//     }
// });

const RegisterChart : React.FC =  () => {
  const config = {
    xField: 'time',
    // data: [
    //   { time: '10:10', call: 4, waiting: 2, people: 2 },
    //   { time: '10:15', call: 2, waiting: 6, people: 3 },
    //   { time: '10:20', call: 13, waiting: 2, people: 5 },
    //   { time: '10:25', call: 9, waiting: 9, people: 1 },
    //   { time: '10:30', call: 5, waiting: 2, people: 3 },
    //   { time: '10:35', call: 8, waiting: 2, people: 1 },
    //   { time: '10:40', call: 13, waiting: 1, people: 2 },
    // ],
    data: userActivityData,
    legend: {
      color: {
        itemMarker: (v) => {
          if (v === 'waiting') return 'rect'
          return 'smooth'
        }
      }
    },
    children: [
      {
        type: 'interval',
        yField: '当天注册量',
      },
    //   {
    //     type: 'line',
    //     yField: 'people',
    //     shapeField: 'smooth',
    //     scale: { color: { relations: [['people', '#fdae6b']] } },
    //     axis: { y: { position: 'right' } },
    //     style: { lineWidth: 2 },
    //   },
    ],
  };
  return <DualAxes {...config} />;
};


export default RegisterChart;
