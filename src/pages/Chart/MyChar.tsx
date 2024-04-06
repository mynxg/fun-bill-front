import React from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
import { ProCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useEffect, useState } from 'react';
import { getCurrentDate } from '@/utils/DateUtil';
import DemoChar from './DemoChar';

const MyChar: React.FC = () => {
  const [responsive, setResponsive] = useState(false);

  // const [data, setData] = useState<UserRankEntityAPI.BaseResponsePageVO[]>([]);

  //   useEffect(() => {
  //     // 假设 fetchData 是一个返回 Promise 的函数，用于获取数据
  //     listByPagebBillAmountRankUsingGET({}).then((res) => {
  //       setData(res.data);
  //     });
  //   }, []); 

  return (
    <RcResizeObserver
      key="resize-observer"
      onResize={(offset) => {
        setResponsive(offset.width < 596);
      }}
    >
      <ProCard
        title="数据概览"
        extra={getCurrentDate()}
        split={responsive ? 'horizontal' : 'vertical'}
        headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
            <StatisticCard
                title="用户性别分布"
                chart={
                  <DemoChar />
                }
              />
              <StatisticCard
                statistic={{
                  title: '用户数量',
                  value: 234,
                  //   description: (
                  //     <Statistic
                  //       title="较本月平均流量"
                  //       value="8.04%"
                  //       trend="down"
                  //     />
                  //   ),
                }}
              />
              {/* <StatisticCard
                              statistic={{
                                  title: '日志数量',
                                  value: 234,
                                  //   description: (
                                  //     <Statistic title="月同比" value="8.04%" trend="up" />
                                  //   ),
                              }}
                          /> */}
              
            </ProCard>
            <ProCard split="vertical">
              {/* <StatisticCard
                              statistic={{
                                  title: '支出数量',
                                  value: '12/56',
                                  suffix: '个',
                              }}
                              
                          /> */}
              {/* <StatisticCard
                              statistic={{
                                  title: '总金额',
                                  value: '134',
                                  suffix: '个',
                              }}
                          /> */}
            </ProCard>
          </ProCard>
          {/* <StatisticCard
                      title="流量走势"
                      chart={
                          //   <img
                          //     src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg"
                          //     width="100%"
                          //   />
                          <Card style={{ width: 210, height: 20, }}>
                              <Card.Grid style={gridStyle}>Content</Card.Grid>
                          </Card>
                      }
                  /> */}

        </ProCard>




        {/* <StatisticCard
                  title="用户登录次数排行"
                  chart={
                      <MyLoginCountRank />
                  }
              /> */}
      </ProCard>
    </RcResizeObserver>
  );
};

export default MyChar;