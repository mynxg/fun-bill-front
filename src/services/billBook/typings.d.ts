/**
 * @description 账本API
 * @name BILLBOOKENTITYAPI
 * @typedef BILLBOOKENTITYAPI
 * @property {Object} BILLBOOKENTITYAPI - 账本API
 * @property {Function} add - 添加账本
 * @property {Function} delete - 删除账本
 * @property {Function} update - 更新账本
 * @property {Function} get - 获取账本
 * @property {Function} list - 账本列表
 * @property {Function} page - 分页查询账本
 * @property {Function} addCategory - 添加账本分类
 * @property {Function} deleteCategory - 删除账本分类
 * @property {Function} updateCategory - 更新账本分类
 */
declare namespace BILLBOOKENTITYAPI {

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
     * @property {Integer} bookId - 账本ID
     * @property {Integer} userId - 用户ID
     * @property {string} bookName - 账本名称
     * @property {Integer} bookCategoryId - 账本分类ID
     * @property {string} photoUrl - 头像
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
        bookId?: number;
        userId?: number;
        bookName?: string;
        bookCategoryId?: number;

        photoUrl?: string;
        remark?: string;

        billTime?: date;
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
     * @property {BillBookVO[]} data - 数据
     * @property {Integer} total - 总数
     * @property {Integer} code - 状态码
     * @property {string} msg - 消息
     * 
     */
    type BaseResponsePageVO = {
        data?: BillBookVO[];
        total?: number;
        code?: number;
        msg?: string;
    }

    /**
     * 账本
     * @name BillBookVO
     * @description 账本
     * @typedef BillBookVO
     * @property {Integer} bookId - 账本ID
     * @property {Integer} userId - 用户ID
     * @property {string} bookName - 账本名称
     * @property {Integer} bookCategoryId - 账本分类ID
     * @property {string} photoUrl - 头像
     * @property {string} remark - 备注
     * @property {string} delFlag - 删除标志
     * @property {string} createBy - 创建者
     * @property {Date} createTime - 创建时间
     * @property {string} updateBy - 修改者
     * @property {Date} updateTime - 修改时间
     * @property {billBookCategoryEntity} billBookCategory - 账本类型
     * 
     */
    type BillBookVO = {
        bookId?: number;
        userId?: number;
        bookName?: string;
        bookCategoryId?: number;

        photoUrl?: string;
        remark?: string;

        delFlag?: string;
        createBy?: string;
        createTime?: date;
        updateBy?: string;
        updateTime?: date;

        params?: { [key: string]: { [key: string]: any } };
        billBookCategory?: billBookCategoryEntity;
        // billCategory?: BillCategoryEntity;
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
    type billBookCategoryEntity = {
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
     * 账单分类
     * @name BillCategoryEntity
     * @description 账本分类
     * @typedef BillCategoryEntity
     * @property {Integer} categoryId - 分类ID
     * @property {string} categoryName - 分类名称
     */
    // type BillCategoryEntity = {
    //     categoryId?: number;
    //     categoryName?: string;
    //     remark?: string;
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
     * 账本添加参数
     * @name AddRquestParams
     * @description 账本添加参数
     * @typedef AddRquestParams
     * @property {string} bookName - 账本名称
     * @property {string} bookCategoryId - 账本分类ID
     * @property {string} photoUrl - 头像
     * @property {string} remark - 备注
     * @property {string} delFlag - 删除标志
     * @property {string} createBy - 创建者
     * @property {Date} createTime - 创建时间
     * @property {string} updateBy - 修改者
     * @property {Date} updateTime - 修改时间
     */
    export type AddRquestParams = {
        bookId?: number;
        userId?: number;
        bookName?: string;
        bookCategoryId?: number;

        photoUrl?: string;
        remark?: string;

        // delFlag?: string;

        //delFlag?: string;
        createBy?: string;
        createTime?: date;
        updateBy?: string;
        updateTime?: date;
    }

    /**
     * 删除账本请求参数
     * @name DeleteRequest
     * @description 删除账本请求参数
     * @typedef DeleteRequest
     * @property {Integer} id - 账本ID
     */
    type DeleteRequestParams = {
        bookId?: number;
    };
    // type DeleteRequestParams = {
    //   userIds?: number[];
    // };

    /**
     * 更新账本请求参数
     * @name UpdateRequestParams
     * @description 更新账本请求参数
     */
    type UpdateRequestParams = {
        bookId?: number;
        userId?: number;
        bookName?: string;
        bookCategoryId?: number;

        photoUrl?: string;
        remark?: string;

        //delFlag?: string;
        createBy?: string;
        createTime?: date;
        updateBy?: string;
        updateTime?: date;
    };

}
