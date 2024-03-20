/**
 * @description 用户管理
 */
declare namespace USERTESTAPI {

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
     * 用户请求参数
     * @name SysUserRequestParams
     * @description 用户请求参数
     * @typedef SysUserRequestParams
     * @property {Integer} userId - 用户ID
     * @property {string} userName - 用户名
     * @property {string} userType - 用户类型
     * @property {string} nickName - 昵称
     * @property {string} photoNumber - 手机号
     * @property {string} email - 邮箱
     */
    export type SysUserRequestParams = {
        userId?: number;
        userName?: string;
        userType?: string;
        nickName?: string;
        photoNumber?: string;
        email?: string;
        avatar?: string;
        createBy?: string;
        createTime?: Date;
        delFlag?: string;
        loginIp?: string;
        loginTime?: Date;
        remark?: string;
        sex?: string;
        status?: string;
        updateBy?: string;
        updateTime?: Date;
    }
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
    export type userAddParams = {
        userId?: number;
        userName?: string;
        userType?: string;
        nickName?: string;
        photoNumber?: string;
        email?: string;
        avatar?: string;
        createBy?: string;
        createTime?: Date;
        delFlag?: string;
        loginIp?: string;
        loginTime?: Date;
        remark?: string;
        sex?: string;
        status?: string;
        updateBy?: string;
        updateTime?: Date;
    }

    /**
     * 用户更新参数
     * @name userUpdateParams
     * @description 用户更新参数
     * @typedef userUpdateParams
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
    export type userUpdateParams = {
        userId?: number;
        userName?: string;
        userType?: string;
        nickName?: string;
        photoNumber?: string;
        email?: string;
        avatar?: string;
        createBy?: string;
        createTime?: Date;
        delFlag?: string;
        loginIp?: string;
        loginTime?: Date;
        remark?: string;
        sex?: string;
        status?: string;
        updateBy?: string;
        updateTime?: Date;
    }

    export type userDeleteParams = {
        ids?: number[];
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
    export type userList = {
        data?: SysUserResponseDTO[];
        total?: number;
        code?: number;
        msg?: string;
    }


    /**
     * 查询用户个人信息
     */
    export type userInfo = {
       data?: SysUserResponseDTO;
        total?: number;
        code?: number;
        msg?: string;
    }

    /**
     * SysUserResponseDTO
     */
    export type SysUserResponseDTO = {
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
        updateTime?: Date;
        userId?: number;
        userName?: string;
        userType?: string;
    }

 /***
  *  ---------------------------------------test-----------------------------------------------------------
  */
 type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type UserUpdateMyRequest = {
    userAvatar?: string;
    userName?: string;
    userProfile?: string;
  };

  type UserQueryRequest = {
    pageNum?: number;
    id?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    userName?: string;
    userProfile?: string;
    userRole?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?:any;
    total?: number;
    message?: string;
  };
  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    msg?: string;
  };

  type BaseResponse = {
    code?: number;
    data?: string;
    msg?: string;
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
      export type userAddParams = {
        userId?: number;
        userName?: string;
        userType?: string;
        nickName?: string;
        photoNumber?: string;
        email?: string;
        avatar?: string;
        createBy?: string;
        createTime?: Date;
        delFlag?: string;
        loginIp?: string;
        loginTime?: Date;
        remark?: string;
        sex?: string;
        status?: string;
        updateBy?: string;
        updateTime?: Date;
    }

  type UserAddRequest = {
    detailProfile?: string;
    userAccount?: string;
    userAvatar?: string;
    userName?: string;
    userPassword?: string;
    userProfile?: string;
    userRole?: string;
  };
  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };
  type DeleteRequest = {
    id?: number;
  };

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

  type UserVO = {
    avatar?: string;
    createBy?: string;
    createTime?: string;
    delFlag?: string;
    email?: string;
    loginIp?: string;
    loginTime?: string;
    nickName?: string;
    photoNumber?: string;
    remark?: string;
    sex?: string;
    status?: string;
    updateBy?: string;
    updateTime?: String;
    userId?: number;
    userName?: string;
    userType?: string;
            roles: any;
            roleIds: string[];
            roleId: string;
            admin: boolean;
  };

  type TaskVO = {
    content?: string;
    createTime?: string;
    createUserId?: number;
    difficulty?: number;
    finishUserId?: number;
    id?: number;
    isFinished?: number;
    tags?: string;
    title?: string;
    types?: number;
    updateTime?: string;
  };

  /**
   * uploadFileUsingPOSTParams
   */
  type uploadFileUsingPOSTParams = {
    biz?: string;
  };
  
  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };
}
