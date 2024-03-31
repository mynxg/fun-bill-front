/**
 * @description 角色管理实体API
 */
declare namespace RoleEntityAPI {

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
     * 用户分页请求参数
     * @name BaseRequestPageParams
     * @description 用户分页请求参数
     * @typedef BaseRequestPageParams
     * @property {Integer} id - 用户ID
     * @property {string} userId - 用户ID
     */
    type BaseRequestPageParams = {
        pageSize?: number;
        pageNum?: number;
        orderByColumn?: string;
        isAsc?: string;

        // id?: number;
        // userId: string;
        // userName?: string;
        // userType?: string;
        // nickName?: string;
        // phoneNumber?: string;
        // email?: string;
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
    export type BaseResponsePageRoleVO = {
        data?: RoleVO[];
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
     * 查询角色个人信息
     * @name userInfo
     * @description 查询角色个人信息
     */
    type RoleVO = {
        roleId?: number;
        roleKey: string;
        roleName: string;
        roleSort: number;
        status?: string;
        dataScope?: string;
        delFlag?: string;
        flag?: boolean;
        remark?: string;
        createBy?: string;
        createTime?: date;
        updateBy?: string;
        updateTime?: date;
        params?: { [key: string]: { [key: string]: any } };
        admin?: boolean;
       
    };

    /**
      * 角色添加参数
      */
    export type AddRquestParams = {
        roleId?: number;
        roleKey: string;
        roleName: string;
        remark?: string;
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
    
    /**
     * 更新角色请求参数
     * @name UpdateRequestParams
     * @description 更新角色请求参数
     */
    type UpdateRequestParams = {
        // admin?: boolean;
        dataScope?: string;
        delFlag?: string;
        flag?: boolean;
        remark?: string;
        roleId?: number;
        roleKey: string;
        roleName: string;
        roleSort: number;
        status?: string;
        params?: { [key: string]: { [key: string]: any } };
    };



    /**
     * --------------------------------------example----------------------------------------------------
     */

}