
/**
 * 日志信息实体定义
 */
declare namespace LoginInfoEntityAPI {

    /**
     * 基本登录日志请求响应参数
     */
    type BaseResponsePageLoginInfoVO = {
        data?: LoginInfoVO[];
        total?: number;
        code?: number;
        msg?: string;
    }

    /**
     * 登录信息分页请求参数
     */
    type LoginInfoVO = {
        infoId: string,
        userName: string,
        status: string,
        ipAddr: string,
        loginLocation: string,
        browser: string,
        os: string,
        msg: string,
        loginTime: string,
    }

    /**
     * 登录信息分页请求参数
     */
    type BaseLoginInfoRequestPageParams = {
        pageSize?: number;
        pageNum?: number;
        orderByColumn?: string;
        isAsc?: string;

        infoId?: string;
        userName?: string;
        status?: string;
        ipAddr?: string;
        loginLocation?: string;
        browser?: string;
        os?: string;
        msg?: string;
        loginTime?: string;
    }

    type PageParams = {
        pageSize?: number;
        pageNum?: number;
        orderByColumn?: string;
        isAsc?: string;
    }

}