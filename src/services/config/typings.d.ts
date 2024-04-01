/**
 * @description 配置管理实体API
 */
declare namespace ConfigEntityAPI {

    /**
     * 基本请求响应参数
     */
    type BaseResponse = {
        code?: number;
        data?: any;
        msg?: string;
    };


    type ApiResponse = {
        code?: number;
        type?: string;
        message?: string;
    };

    /**
     * 配置分页请求参数
     * @name BaseRequestPageParams
     * @description 配置分页请求参数
     * @typedef BaseRequestPageParams
     * @property {Integer} pageSize - 分页大小
     * @property {Integer} pageNum - 当前页数
     * @property {string} orderByColumn - 排序列
     * @property {string} isAsc - 排序的方向desc或者asc
     */
    type BaseRequestPageParams = {
        pageSize?: number;
        pageNum?: number;
        orderByColumn?: string;
        isAsc?: string;
    }


    /**
     * 响应参数
     * @name BaseResponsePageConfigVO
     * @description 响应参数
     * @typedef BaseResponsePageConfigVO
     * @property {Integer} code - 状态码
     * @property {Array.<ConfigVO>} data - 数据
     * @property {string} msg - 消息
     * @property {Integer} total - 总数
     * @property {Integer} pageSize - 分页大小
     * @property {Integer} pageNum - 当前页数
     * @property {string} orderByColumn - 排序列
     * @property {string} isAsc - 排序的方向desc或者asc
     * @property {string} searchValue - 搜索值
     * @property {string} createBy - 创建者
     * @property {string} createTime - 创建时间
     * @property {string} updateBy - 更新者
     * @property {string} updateTime - 更新时间
     * @property {string} remark - 备注
     * @property {string} delFlag - 删除标志
      */
    export type BaseResponsePageConfigVO = {
        data?: ConfigVO[];
        total?: number;
        code?: number;
        msg?: string;
    }

    /**
      * 分页查询参数
      * @name PageParams
      * @description 分页查询参数
      * @typedef PageParams
      * @property {Integer} pageSize - 分页大小
      * @property {Integer} pageNum - 当前页数
      * @property {string} orderByColumn - 排序列
      * @property {string} isAsc - 排序的方向desc或者asc
      */
    type PageParams = {
        pageSize?: Integer;
        pageNum?: Integer;
        // orderByColumn?: string;
        // isAsc?: string;
    };

    /**
     * 查询配置请求参数
     * 
     */
    type ConfigVO = {
        configId?: number;
        configKey: string;
        configName: string;
        configType?: string;
        configValue: string;

        remark?: string;
        delFlag?: string;
        remark?: string;
        createBy?: string;
        createTime?: date;
        updateBy?: string;
        updateTime?: date;
        // params?: { [key: string]: { [key: string]: any } };
        // admin?: boolean;

    };

    /**
      * 配置添加参数
      */
    export type AddRquestParams = {
        configId?: number;
        configKey: string;
        configName: string;
        configType?: string;
        configValue: string;

        remark?: string;
    }

    /**
     * 删除配置请求参数
     * @name DeleteRequest
     * @description 删除配置请求参数
     * @typedef DeleteRequest
     * @property {Integer} id - 配置ID
     */
    type DeleteRequestParams = {
        configId?: number;
    };

    /**
     * 更新请求参数
     * @name UpdateRequestParams
     * @description 更新角色请求参数
     */
    type UpdateRequestParams = {
        configId?: number;
        configKey: string;
        configName: string;
        configType?: string;
        configValue: string;

        remark?: string;
    };



    /**
     * --------------------------------------example----------------------------------------------------
     */

}