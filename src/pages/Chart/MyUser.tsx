import { ProCard, StatisticCard } from '@ant-design/pro-components';
import RcResizeObserver from 'rc-resize-observer';
import { useEffect, useState } from 'react';
import { getCurrentDate } from '@/utils/DateUtil';
import { Card } from 'antd';
import {
  initUsingGET,
  listByPageBillAmountRankUsingGET,
  listByPageIncomeAmountRankUsingGET,
  listByPageExpenseAmountRankUsingGET,
  listByPageLoginCountRankUsingGET,
  queryRegisterCountUsingGET,
  listByQueryActiveCountUsingGET,
  queryGenderCountUsingGET,
  listByQueryRegisterCounttUsingGET
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

const registerCountResultStr = await queryRegisterCountUsingGET({
  pageNum: 1,
  pageSize: 10,
});


const MyBillAmountRank = () => {
  const [data, setData] = useState<UserRankEntityAPI.UserRankVO[]>([]);

  useEffect(() => {
    // initUsingGET({}).then((res) => {
    //     console.log(res.data);
    // });

    // 假设 fetchData 是一个返回 Promise 的函数，用于获取数据
    listByPageBillAmountRankUsingGET({}).then((res) => {
      setData(res.data);
    });
  }, []); // 空依赖数组表示这个 useEffect 只在组件挂载时运行

  return (
    <ProCard split="horizontal" style={{ fontSize: 20, }}>
      {data?.map((item, index) => {
        return (
          <Statistic
            title={`${index + 1} - ${item.nickName}`}
            value={item.billAmount == null ? 0 : item.billAmount}
            className="statisticName"
            style={{ width: 210, }}
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

    // 假设 fetchData 是一个返回 Promise 的函数，用于获取数据
    listByPageExpenseAmountRankUsingGET({}).then((res) => {
      setData(res.data);
    });
  }, []); // 空依赖数组表示这个 useEffect 只在组件挂载时运行

  return (
    <ProCard split="horizontal" style={{ fontSize: 20, }}>
      {data?.map((item, index) => {
        return (
          <Statistic
            title={`${index + 1} - ${item.nickName}`}
            value={item.totalExpense == null ? 0 : item.totalExpense}
            className="statisticName"
            style={{ width: 210, }}
            precision={2}
            suffix="元"
            layout="horizontal"
          />
        );
      })}
    </ProCard>
  );
};

const resultIncomeStr = await listByPageIncomeAmountRankUsingGET({
  pageNum: 1,
  pageSize: 10,
});

const MyIncomeAmountRank = () => {
  const [data, setData] = useState<UserRankEntityAPI.UserRankVO[]>([]);

  useEffect(() => {

    // 假设 fetchData 是一个返回 Promise 的函数，用于获取数据
    listByPageIncomeAmountRankUsingGET({}).then((res) => {
      setData(res.data);
    });
  }, []); // 空依赖数组表示这个 useEffect 只在组件挂载时运行

  return (
    <ProCard split="horizontal" style={{ fontSize: 20, }}>
      {data?.map((item, index) => {
        return (
          <Statistic
            title={`${index + 1} - ${item.nickName}`}
            value={item.totalIncome == null ? 0 : item.totalIncome}
            className="statisticName"
            style={{ width: 210, }}
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

    // 假设 fetchData 是一个返回 Promise 的函数，用于获取数据
    listByPageLoginCountRankUsingGET({}).then((res) => {
      setData(res.data);
    });
  }, []); // 空依赖数组表示这个 useEffect 只在组件挂载时运行

  return (
    <ProCard split="horizontal" style={{ fontSize: 20, }}>
      {data?.map((item, index) => {
        return (
          <Statistic
            title={`${index + 1} - ${item.nickName}`}
            value={item.loginCount == null ? 0 : item.loginCount}
            className="statisticName"
            style={{ width: 210, }}
            precision={0}
            suffix="次"
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
                  value: registerCountResultStr.data?.totalUser,
                  suffix: '人',
                }}
              />
              <StatisticCard
                statistic={{
                  title: '日志数量',
                  value: 234,
                  suffix: '次',
                  //   description: (
                  //     <Statistic title="月同比" value="8.04%" trend="up" />
                  //   ),
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '本月注册量',
                  value: registerCountResultStr.data?.monthPercentage,
                  suffix: '人',
                  description: (
                    <>
                      <Statistic
                        title="本月占"
                        value={registerCountResultStr.data?.monthPercentage}
                        suffix="%"
                      />
                    </>

                  ),
                }}
              />
              <StatisticCard
                statistic={{
                  title: '上月注册量',
                  value: registerCountResultStr.data?.lastMonthRegistrations,
                  suffix: '人',
                  description: (
                    <>
                      <Statistic
                        title="上月占"
                        value={registerCountResultStr.data?.lastMonthPercentage}
                        suffix="%"
                      />
                    </>

                  ),
                }}
              />
              {/* <StatisticCard
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
                            /> */}
            </ProCard>
          </ProCard>
          <StatisticCard
            title="账单详情"
            chart={
              <>
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
              </>
            }
          />

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
            <MyExpenseAmountRank />
          }
        />
        <StatisticCard
          title="用户收入排行"
          chart={
            <MyIncomeAmountRank />
          }
        />

        <StatisticCard
          title="用户登录次数排行"
          chart={
            <MyLoginCountRank />
          }
        />
      </ProCard>
    </RcResizeObserver>
  );
};

export default MyUser;