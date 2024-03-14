declare namespace LOGINAPI {
    type CurrentUser = {
        roles?: string;
        user?: {
            createBy?: string;
            createTime?: string;
            updateBy?: string;
            updateTime?: string;
            userId?: string;
            userName?: string;
            nickName?: string;
            userType?: string;
            sex?: string;
            email?: string;
            phoneNumber?: string;
            avatar?: string;
            status?: string;
            delFlag?: string;
            loginIp?: string;
            loginTime?: string;
            remark?: string;
            roles?: [
                {
                    createBy?: string;
                    createTime?: string;
                    updateBy?: string;
                    updateTime?: string;
                    roleId?: string;
                    roleName?: string;
                    roleKey?: string;
                    roleSort?: string;
                    dataScope?: string;
                    status?: string;
                    delFlag?: string;
                    remark?: string;
                    flag?: false;
                    admin?: true;
                },
            ];
            roleIds?: string;
            roleId?: string;
            admin?: false;
        };
    };

    type LoginResult = {
        code?: string;
        msg?: string;
        // type?: string;
        data?: {
            token: string;
        };
    };

    type LoginParams = {
        username?: string;
        password?: string;
        // code?: string;
        // type?: string;
    };

    /**
     * @name 注册返回结果
     */
    type RegisterResult = {
        code?: string;
        msg?: string;
        data?: {
        };
    };

    /**
     * @name 注册参数
     */
    type RegisterParams = {
        username?: string;
        password?: string;
        passwordAgain?: string;
        code?: string;
        userType?: string;
    };
}
