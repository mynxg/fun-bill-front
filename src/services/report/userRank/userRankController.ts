import { request } from '@umijs/max';


/** listUserVOByPage POST /api/user/list */

export async function listByPageUsingGET(
  params: UserRankEntityAPI.BaseRequestPageParams,
  options?: { [key: string]: any },
): Promise<UserRankEntityAPI.BaseResponsePageVO> {
  return request<UserRankEntityAPI.BaseResponsePageVO>('/api/user/rank/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}