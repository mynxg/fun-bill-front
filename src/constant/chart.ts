import { ProColumns } from "@ant-design/pro-components";
import type { DescriptionsProps } from 'antd';
import { Image } from 'antd';

// export const SYSTEM_LOGO = "https://avatars.githubusercontent.com/u/103118339?v=4";
// export const PAGESIZE = 3;
// export const BASEPAGESIZE = 6;
// export const NEWSAVATAR = "https://hzh-1318734603.cos.ap-shanghai.myqcloud.com/%E6%96%B0%E9%97%BB.jpg";


import { queryRegisterCountUsingGET,
  listByQueryActiveCountUsingGET,
  queryGenderCountUsingGET,
  listByQueryRegisterCounttUsingGET
 } from "@/services/report/userRank/userRankController";

//获取账本分类列表
const resultStr = await queryGenderCountUsingGET({
    pageNum: 1,
    pageSize: 10,
});

export const pieData = [
  {
    type: '北京',
    value: 207,
  },
  {
    type: '上海',
    value: 250,
  },
  {
    type: '广州',
    value: 380,
  },
  {
    type: '深圳',
    value: 425,
  },
  {
    type: '杭州',
    value: 310,
  },
  {
    type: '新疆',
    value: 255,
  },
];

export const pieData2 = [
  {
    type: '辽宁',
    value: 500,
  },
  {
    type: '甘肃',
    value: 230,
  },
  {
    type: '广西',
    value: 383,
  },
  {
    type: '宁夏',
    value: 225,
  },
  {
    type: '四川',
    value: 110,
  },
  {
    type: '云南',
    value: 255,
  },
];

export const pieData3 = [
  {
    type: '山东',
    value: 297,
  },
  {
    type: '河北',
    value: 330,
  },
  {
    type: '吉林',
    value: 390,
  },
  {
    type: '福建',
    value: 365,
  },
  {
    type: '河南',
    value: 210,
  },
  {
    type: '西藏',
    value: 200,
  },
];

export const pieData4 = [
  {
    type: '江苏',
    value: 107,
  },
  {
    type: '内蒙古',
    value: 462,
  },
  {
    type: '云南',
    value: 310,
  },
  {
    type: '南昌 ',
    value: 325,
  },
  {
    type: '黑龙江 ',
    value: 410,
  },
  {
    type: '青海',
    value: 255,
  },
];

export const genderData: { type: string; value: number }[] = [];

//集合中放对象
resultStr.data?.map((item) => {
  genderData.push({
    type: item.gender == '1' ? '男' : '女',
    value: item.genderCount,
  });
});

// export const pieData5 = genderData;

// export const pieData5 = [
//   {
//     type: '女',
//     value: 230,
//   },
//   {
//     type: '女',
//     value: 230,
//   },
// ];