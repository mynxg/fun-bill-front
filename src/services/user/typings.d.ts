/**
 * @description 用户管理
 */
declare namespace UserEntityAPI {

    /**
     * 基本请求响应参数
     */
    type BaseResponse = {
        code?: number;
        data?: any;
        msg?: string;
    };


    /**
     * 用户分页请求参数
     * @name BaseUserRequestPageParams
     * @description 用户分页请求参数
     * @typedef BaseUserRequestPageParams
     * @property {Integer} id - 用户ID
     * @property {string} userId - 用户ID
     */
    type BaseUserRequestPageParams = {
        pageSize?: number;
        pageNum?: number;
        orderByColumn?: string;
        isAsc?: string;

        id?: number;
        userId: string;
        userName?: string;
        userType?: string;
        nickName?: string;
        photoNumber?: string;
        email?: string;
    }


    /**
      * userList
      * @name userList
      * @description 获取用户列表
      * @request GET:/api/user/list
      * @response `200` `userList`
      * @throws 400
      * @throws 500
      * @throws default
      */
    export type BaseResponsePageUserVO = {
        data?: UserVO[];
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
     * 查询用户个人信息
     * @name userInfo
     * @description 查询用户个人信息
     */
    type UserVO = {
        avatar?: string;
        createBy?: string;
        createTime?: Date;
        delFlag?: string;
        email?: string;
        loginIp?: string;
        loginTime?: Date;
        nickName?: string;
        photoNumber?: string;
        remark?: string;
        sex?: string;
        status?: string;
        updateBy?: string;
        updateTime?: string;
        userId?: number;
        userName?: string;
        userType?: string;

        roles: any;
        roleIds: string[];
        roleId: string;
        admin: boolean;
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
      * @property {string} photoNumber - 手机号
      * @property {string} email - 邮箱
      * @property {string} avatar - 头像
      * @property {string} createBy - 创建者
      * @property {Date} createTime - 创建时间
      */
    export type userAddRquestParams = {
        userId?: number;
        userName?: string;
        userType?: string;
        nickName?: string;
        photoNumber?: string;
        email?: string;
        avatar?: string;
        // createBy?: string;
        // createTime?: string;
        delFlag?: string;
        // loginIp?: string;
        // loginTime?: Date;
        remark?: string;
        sex?: string;
        status?: string;
        // updateBy?: string;
        // updateTime?: string;
    }

    /**
     * 删除用户请求参数
     * @name DeleteRequest
     * @description 删除用户请求参数
     * @typedef DeleteRequest
     * @property {Integer} id - 用户ID
     */
    type DeleteRequestParams = {
        userId?: number;
    };
    // type DeleteRequestParams = {
    //   userIds?: number[];
    // };

    /**
     * 更新用户请求参数
     * @name UserUpdateRequestParams
     * @description 更新用户请求参数
     */
    type UserUpdateRequestParams = {
        userId?: number;
        userName?: string;
        userType?: string;
        nickName?: string;
        photoNumber?: string;
        email?: string;
        avatar?: string;
        // createBy?: string;
        // createTime?: Date;
        delFlag?: string;
        // loginIp?: string;
        // loginTime?: Date;
        remark?: string;
        sex?: string;
      };

    /**
     * --------------------------------------example----------------------------------------------------
     */



}
