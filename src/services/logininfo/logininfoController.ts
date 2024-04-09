import { request } from '@umijs/max';


/** listUserVOByPage POST /api/user/list */

export async function listLoginInfoVOByPageUsingGET(
  params: LoginInfoEntityAPI.BaseLoginInfoRequestPageParams,
  options?: { [key: string]: any },
): Promise<LoginInfoEntityAPI.BaseResponsePageLoginInfoVO> {
  return request<LoginInfoEntityAPI.BaseResponsePageLoginInfoVO>('/api/monitor/logininfor/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: params,
    ...(options || {}),
  });
}