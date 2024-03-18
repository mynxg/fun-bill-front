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
                    flag?: boolean;
                    admin?: boolean;
                },
            ];
            roleIds?: string;
            roleId?: string;
            admin?: boolean;
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
        phone?: string;
        email?: string;
        code?: string;
        uuid?: string;
        type?: string;
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
     * @description 注册参数
     * @param {string} username - 用户名
     * @param {string} password - 密码
     * @param {string} passwordAgain - 确认密码
     * @param {string} phone - 手机号
     * @param {string} email - 邮箱
     * @param {string} code - 验证码
     * @param {string} userType - 用户类型
     */
    type RegisterParams = {
        username?: string;
        password?: string;
        passwordAgain?: string;
        phone?: string;
        email?: string;
        code?: string;
        uuid?: string;
        userType?: string;
    };

    /**
     * @name 验证码图片
     * @description 获取验证码图片
     * @returns {string} code - 状态码
     * @returns {string} msg - 状态信息
     * @returns {string} data - 返回数据
     * @returns {string} img - 验证码图片
     * @returns {string} uuid - 验证码唯一标识
     * @returns {boolean} captchaEnabled - 是否开启验证码
     * 
     */
    type CaptchaImage = {
        code?: string;
        msg?: string;
        data?: {
            img: string;
            captchaEnabled: boolean;
            uuid: string;
        };
    };
}
