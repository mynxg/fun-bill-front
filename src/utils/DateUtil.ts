
//写个时间工具方法，并暴露给外部使用,2019年9月28日 星期五 
// This function will return the current date in the format "2019年9月28日 星期五"
export function getCurrentDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const week = ['日', '一', '二', '三', '四', '五', '六'][date.getDay()];
    return `${year}年${month}月${day}日 星期${week}`;
}

//写个时间工具方法，并暴露给外部使用,2019年9月28日 星期五 

export default function getNowTime(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const week = date.getDay();
  return `${year}年${month}月${day}日 星期${week}`;
}