declare namespace BILLENTITYAPI {

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

    type BaseBillRequestPageParams = {
        billId?: number;
        bookId?: number;
        userId?: number;
        categoryId?: number;
        title?: string;
        amount?: number;
        remark?: string;
        photoUrl?: string;
        billTime?: Date;
        delFlag?: string;
        createBy?: string;
        createTime?: Date;
        updateBy?: string;
        updateTime?: Date;


        pageSize?: number;
        pageNum?: number;
        orderByColumn?: string;
        isAsc?: string;
    }

    type BaseResponsePageBillVO = {
        data?: BillVO[];
        total?: number;
        code?: number;
        msg?: string;
    }

    type BillVO = {
        billId?: number;
        bookId?: number;
        userId?: number;
        categoryId?: number;
        title?: string;
        amount?: number;
        remark?: string;
        photoUrl?: string;
        billTime?: Date;
        delFlag?: string;
        createBy?: string;
        createTime?: Date;
        updateBy?: string;
        updateTime?: Date;

        billBookCategory?: billBookCategoryEntity;
        billCategory?: BillCategoryEntity;
        // billCategorys?: BillCategoryEntity[];
        // billBookCategorys?: billBookCategoryEntity[];
    }

    type billBookCategoryEntity = {
        bookCategoryId?: number;
        bookCategoryName?: string;
        remark?: string;
        createBy?: string;
        createTime?: Date;
        updateBy?: string;
        updateTime?: Date;
    }

    type BillCategoryEntity = {
        categoryId?: number;
        categoryName?: string;
        remark?: string;
        createBy?: string;
        createTime?: Date;
        updateBy?: string;
        updateTime?: Date;
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
        billId?: number;
        bookId?: number;
        userId?: number;
        categoryId?: number;
        title?: string;
        amount?: number;
        remark?: string;
        photoUrl?: string;

        //delFlag?: string;
        createBy?: string;
        createTime?: Date;
        updateBy?: string;
        updateTime?: Date;
    }

    /**
     * 删除用户请求参数
     * @name DeleteRequest
     * @description 删除用户请求参数
     * @typedef DeleteRequest
     * @property {Integer} id - 用户ID
     */
    type DeleteRequestParams = {
        billId?: number;
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
        billId?: number;
        bookId?: number;
        userId?: number;
        categoryId?: number;
        title?: string;
        amount?: number;
        remark?: string;
        photoUrl?: string;

        //delFlag?: string;
        createBy?: string;
        createTime?: Date;
        updateBy?: string;
        updateTime?: Date;
    };

}
