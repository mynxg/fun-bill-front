import { ProCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useEffect, useState } from 'react';
import { getCurrentDate } from '@/utils/DateUtil';
import { Card } from 'antd';
import { initUsingGET,
    listByPageBillAmountRankUsingGET,
    listByPageIncomeAmountRankUsingGET,
    listByPageExpenseAmountRankUsingGET,
    listByPageLoginCountRankUsingGET
} from '@/services/report/userRank/userRankController';
import { size } from 'lodash';

const { Statistic } = StatisticCard;
const gridStyle: React.CSSProperties = {
    width: 210,
    height: 50,
    textAlign: 'center',
    // textJustify: 'center',
    //文字上下居中
    // display: 'flex',
    // justifyContent: 'center',
};


const MyBillAmountRank = () => {
    const [data, setData] = useState<UserRankEntityAPI.UserRankVO[]>([]);
  
    useEffect(() => {
        initUsingGET({}).then((res) => {
            console.log(res.data);
        });

      // 假设 fetchData 是一个返回 Promise 的函数，用于获取数据
      listByPageBillAmountRankUsingGET({}).then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    }, []); // 空依赖数组表示这个 useEffect 只在组件挂载时运行
  
    return (
      <ProCard split="horizontal" style={{fontSize:20,}}>
        {data?.map((item,index) => {
            return (
              <Statistic 
                title={`${index+1} - ${item.nickName}`}
                value={item.billAmount==null?0:item.billAmount}
                className="statisticName"
                style={{width:210,}} 
                precision={2}
                suffix="元"
                layout="horizontal"
              />
            );
          })}
      </ProCard>
    );
  };

  const MyExpenseAmountRank = () => {
    const [data, setData] = useState<UserRankEntityAPI.UserRankVO[]>([]);
  
    useEffect(() => {
        initUsingGET({}).then((res) => {
            console.log(res.data);
        });

      // 假设 fetchData 是一个返回 Promise 的函数，用于获取数据
      listByPageExpenseAmountRankUsingGET({}).then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    }, []); // 空依赖数组表示这个 useEffect 只在组件挂载时运行
  
    return (
      <ProCard split="horizontal" style={{fontSize:20,}}>
        {data?.map((item,index) => {
            return (
              <Statistic 
                title={`${index+1} - ${item.nickName}`}
                value={item.billAmount==null?0:item.billAmount}
                className="statisticName"
                style={{width:210,}} 
                precision={2}
                suffix="元"
                layout="horizontal"
              />
            );
          })}
      </ProCard>
    );
  };

  const MyIncomeAmountRank = () => {
    const [data, setData] = useState<UserRankEntityAPI.UserRankVO[]>([]);
  
    useEffect(() => {
        initUsingGET({}).then((res) => {
            console.log(res.data);
        });

      // 假设 fetchData 是一个返回 Promise 的函数，用于获取数据
      listByPageIncomeAmountRankUsingGET({}).then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    }, []); // 空依赖数组表示这个 useEffect 只在组件挂载时运行
  
    return (
      <ProCard split="horizontal" style={{fontSize:20,}}>
        {data?.map((item,index) => {
            return (
              <Statistic 
                title={`${index+1} - ${item.nickName}`}
                value={item.billAmount==null?0:item.billAmount}
                className="statisticName"
                style={{width:210,}} 
                precision={2}
                suffix="元"
                layout="horizontal"
              />
            );
          })}
      </ProCard>
    );
  };

  //listByPageLoginCountRankUsingGET
  const MyLoginCountRank = () => {
    const [data, setData] = useState<UserRankEntityAPI.UserRankVO[]>([]);
  
    useEffect(() => {
        initUsingGET({}).then((res) => {
            console.log(res.data);
        });

      // 假设 fetchData 是一个返回 Promise 的函数，用于获取数据
      listByPageLoginCountRankUsingGET({}).then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    }, []); // 空依赖数组表示这个 useEffect 只在组件挂载时运行
  
    return (
      <ProCard split="horizontal" style={{fontSize:20,}}>
        {data?.map((item,index) => {
            return (
              <Statistic 
                title={`${index+1} - ${item.nickName}`}
                value={item.billAmount==null?0:item.billAmount}
                className="statisticName"
                style={{width:210,}} 
                precision={2}
                suffix="元"
                layout="horizontal"
              />
            );
          })}
      </ProCard>
    );
  };

const MyUser: React.FC = () => {
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
                            <StatisticCard
                                statistic={{
                                    title: '日志数量',
                                    value: 234,
                                    //   description: (
                                    //     <Statistic title="月同比" value="8.04%" trend="up" />
                                    //   ),
                                }}
                            />
                        </ProCard>
                        <ProCard split="vertical">
                            <StatisticCard
                                statistic={{
                                    title: '支出数量',
                                    value: '12/56',
                                    suffix: '个',
                                }}
                            />
                            <StatisticCard
                                statistic={{
                                    title: '总金额',
                                    value: '134',
                                    suffix: '个',
                                }}
                            />
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
                <StatisticCard
                    title="用户总金额排行榜"
                    chart={
                        // <img
                        //   src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
                        //   alt="大盘"
                        //   width="100%"
                        // />

                        // 
                        <MyBillAmountRank />
                    }
                />
                 <StatisticCard
                    title="用户支出排行"
                    chart={
                        // <img
                        //   src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
                        //   alt="大盘"
                        //   width="100%"
                        // />

                        // 
                        <MyExpenseAmountRank />
                    }
                />
                 <StatisticCard
                    title="用户收入排行"
                    chart={
                        // <img
                        //   src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
                        //   alt="大盘"
                        //   width="100%"
                        // />

                        // 
                        <MyIncomeAmountRank />
                    }
                />
            </ProCard>
        </RcResizeObserver>
    );
};

export default MyUser;