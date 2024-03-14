/**
 * @description: token工具类
 * @param {string} token
 * @return {string}
 * @Date: 2024-03-12 14:00:00
 * @LastEditors: nxg
 *
 */
const TOKEN_KEY: string = 'ADMIN_TOKEN';

// 获取token
export function getToken(): string {
  // 从localStorage中获取token
  return window.localStorage.getItem(TOKEN_KEY) || '';
}

export function setToken(token: string) {
  // 将token保存到localStorage中
  window.localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  window.localStorage.removeItem(TOKEN_KEY);
}
