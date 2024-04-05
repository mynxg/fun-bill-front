/**
 * @description 账本分类API
 * @typedef BILLBOOKCATEGORYENTITYAPI
 * @property {Object} BaseResponse - 基本请求响应参数
 * @property {Object} ApiResponse - 响应参数
 * @property {Object} BaseRequestPageParams - 基本请求参数
 * @property {Object} BaseResponsePageVO - 分页查询响应参数
 * @property {Object} BillBookCategoryVO - 账本分类 响应参数
 * @property {Object} billBookCategoryEntity - 账本类型
 * @property {Object} PageParams - 分页查询参数
 * @property {Object} AddRquestParams - 账本分类添加参数
 * @property {Object} DeleteRequestParams - 删除账本分类请求参数
 * @property {Object} UpdateRequestParams - 更新账本请求参数
 * 
 */
declare namespace BILLBOOKCATEGORYENTITYAPI {

    /**
     * 基本请求响应参数
     */
    type BaseResponse = {
        code?: number;
        data?: any;
        msg?: string;
    };

    /**
     * 响应参数
     * @name ApiResponse
     * @description 响应参数
     * @typedef ApiResponse
     * @property {Integer} code - 状态码
     * @property {string} type - 类型
     * @property {string} message - 消息
     * 
     */
    type ApiResponse = {
        code?: number;
        type?: string;
        message?: string;
    };

    /**
     * 基本请求参数
     * @name BaseRequestPageParams
     * @description 基本请求参数
     * @typedef BaseRequestPageParams
     * @property {Integer} bookCategoryId - 账本分类ID
     * @property {string} bookCategoryName - 分类名称
     * @property {string} remark - 备注
     * @property {string} delFlag - 删除标志
     * @property {string} createBy - 创建者
     * @property {Date} createTime - 创建时间
     * @property {string} updateBy - 修改者
     * @property {Date} updateTime - 修改时间
     * @property {Integer} pageSize - 分页大小
     * @property {Integer} pageNum - 当前页数
     * @property {string} orderByColumn - 排序列
     * @property {string} isAsc - 排序的方向desc或者asc
     * 
     */
    type BaseRequestPageParams = {
        bookCategoryId?: number;
        bookCategoryName?: string;
        remark?: string;

        delFlag?: string;
        createBy?: string;
        createTime?: date;
        updateBy?: string;
        updateTime?: date;

        pageSize?: number;
        pageNum?: number;
        orderByColumn?: string;
        isAsc?: string;
    }

    /**
     * 分页查询响应参数
     * @name BaseResponsePageVO
     * @description 分页查询响应参数
     * @typedef BaseResponsePageVO
     * @property {BillBookCategoryVO[]} data - 数据
     * @property {Integer} total - 总数
     * @property {Integer} code - 状态码
     * @property {string} msg - 消息
     * 
     */
    type BaseResponsePageVO = {
        data?: BillBookCategoryVO[];
        total?: number;
        code?: number;
        msg?: string;
    }

    /**
     * 账本分类 响应参数
     * @name BillBookCategoryVO
     * @description 账本f分类 响应参数
     * @typedef BillBookCategoryVO
     * @property {Integer} bookCategoryId - 分类ID
     * @property {string} bookCategoryName - 分类名称
     * @property {string} remark - 备注
     * @property {string} delFlag - 删除标志
     * @property {string} createBy - 创建者
     * @property {Date} createTime - 创建时间
     * @property {string} updateBy - 修改者
     * @property {Date} updateTime - 修改时间
     * 
     */
    type BillBookCategoryVO = {
        bookCategoryId?: number;
        bookCategoryName?: string;
        remark?: string;

        delFlag?: string;
        createBy?: string;
        createTime?: Date;
        updateBy?: string;
        updateTime?: Date;
    }

    /**
     * 账本类型
     * @name billBookCategoryEntity
     * @description 账本类型
     * @typedef billBookCategoryEntity
     * @property {Integer} bookCategoryId - 分类ID
     * @property {string} bookCategoryName - 分类名称
     * @property {string} remark - 备注
     * @property {string} delFlag - 删除标志
     * @property {string} createBy - 创建者
     * @property {Date} createTime - 创建时间
     * @property {string} updateBy - 修改者
     * @property {Date} updateTime - 修改时间
     * @property {string} delFlag - 删除标志
     * @property {string} createBy - 创建者
     */
    // type billBookCategoryEntity = {
    //     bookCategoryId?: number;
    //     bookCategoryName?: string;
    //     remark?: string;
    //     delFlag?: string;
    //     createBy?: string;
    //     createTime?: date;
    //     updateBy?: string;
    //     updateTime?: date;
    // }


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
        orderByColumn?: string;
        isAsc?: string;
    };

    /**
     * 账本分类添加参数
     * @name AddRquestParams
     * @description 账本分类添加参数
     * @typedef AddRquestParams
     * @property {Integer} bookCategoryId - 分类ID
     * @property {string} bookCategoryName - 分类名称
     * @property {string} remark - 备注
     */
    export type AddRquestParams = {
        bookCategoryId?: number;
        bookCategoryName?: string;
        remark?: string;
        
        delFlag?: string;
        createBy?: string;
        createTime?: date;
        updateBy?: string;
        updateTime?: date;
    }

    /**
     * 删除账本分类请求参数
     * @name DeleteRequest
     * @description 删除账本分类请求参数
     * @typedef DeleteRequest
     * @property {Integer} id - 账本ID
     */
    type DeleteRequestParams = {
        bookCategoryId?: number;
    };

    /**
     * 更新账本请求参数
     * @name UpdateRequestParams
     * @description 更新账本请求参数
     */
    type UpdateRequestParams = {
        bookCategoryId?: number;
        bookCategoryName?: string;
        remark?: string;

        // delFlag?: string;
        createBy?: string;
        createTime?: date;
        updateBy?: string;
        updateTime?: date;
    };

}
