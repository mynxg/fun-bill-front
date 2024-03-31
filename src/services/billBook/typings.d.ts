declare namespace BILLBOOKENTITYAPI {

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

    type BaseResponsePageVO = {
        data?: BillBookVO[];
        total?: number;
        code?: number;
        msg?: string;
    }

    /**
     * 账本
     */
    type BillBookVO = {
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

        params?: { [key: string]: { [key: string]: any } };
        billBookCategory?: billBookCategoryEntity;
        billCategory?: BillCategoryEntity;
    }

    /**
     * 账本类型
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
     * 账本分类
     */
    type BillCategoryEntity = {
        categoryId?: number;
        categoryName?: string;
        remark?: string;
        createBy?: string;
        createTime?: date;
        updateBy?: string;
        updateTime?: date;
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
     * 用户添加参数
     * @name userAddParams
     * @description 用户添加参数
     * @typedef userAddParams
     * @property {Integer} userId - 用户ID
     * @property {string} userName - 用户名
     * @property {string} userType - 用户类型
     * @property {string} nickName - 昵称
     * @property {string} phoneNumber - 手机号
     * @property {string} email - 邮箱
     * @property {string} avatar - 头像
     * @property {string} createBy - 创建者
     * @property {Date} createTime - 创建时间
     */
    export type AddRquestParams = {
        bookId?: number;
        userId?: number;
        bookName?: string;
        bookCategoryId?: number;

        photoUrl?: string;
        remark?: string;

        // billTime?: date;
        // delFlag?: string;

        //delFlag?: string;
        createBy?: string;
        createTime?: date;
        updateBy?: string;
        updateTime?: date;
    }

    /**
     * 删除用户请求参数
     * @name DeleteRequest
     * @description 删除用户请求参数
     * @typedef DeleteRequest
     * @property {Integer} id - 用户ID
     */
    type DeleteRequestParams = {
        bookId?: number;
    };
    // type DeleteRequestParams = {
    //   userIds?: number[];
    // };

    /**
     * 更新用户请求参数
     * @name UpdateRequestParams
     * @description 更新用户请求参数
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
