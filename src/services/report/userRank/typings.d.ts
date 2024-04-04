
/**
 * 用户排行榜模块API
 */
declare namespace UserRankEntityAPI {

    /**
     * 基本请求响应参数
     */
    type BaseResponsePageVO = {
        data?: UserRankVO[];
        total?: number;
        code?: number;
        msg?: string;
    }

    /**
     * 用户排行榜实体
     * @param {number} userId 用户id
     * @param {string} userName 用户名
     * @param {string} nickName 昵称
     * @param {number} totalAmount 总金额
     * @param {number} totalIncome 总收入
     * @param {number} totalExpense 总支出
     * @param {number} expenseCount 支出次数
     * @param {number} incomeCount 收入次数
     * @param {number} billAmount 账单金额
     * @param {number} billCount 账单次数
     * @param {Date} loginTime 登录时间
     * @param {number} loginCount 登录次数
     * @param {Date} createTime 创建时间
     * @param {Date} updateTime 更新时间
     */
    type UserRankVO = {
        userId?: number,
        userName?: string,
        nickName?: string,
        totalIncome?: number,
        totalExpense?: number,
        expenseCount?: number,
        incomeCount?: number,
        billAmount?: number,
        billCount?: number,
        loginTime?: Date,
        loginCount?: number,
        createTime?: Date,
        updateTime?: Date,
    }

    /**
     * 基本求参数
     */
    type BaseRequestPageParams = {
        pageSize?: number;
        pageNum?: number;
        orderByColumn?: string;
        isAsc?: string;

        userName?: string,
        userId?: number,
        nickName?: string,
        loginTime?: Date,
        // loginCount: number,
        // createTime: Date,
        // updateTime: Date,
    }

    type PageParams = {
        pageSize?: number;
        pageNum?: number;
        orderByColumn?: string;
        isAsc?: string;
        userId?: number,
        userName?: string,
        nickName?: string,
        loginTime?: Date,
    }

}