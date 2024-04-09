import { request } from '@umijs/max';


/** listRoleVOByPage POST /api/user/list */

export async function listRoleVOByPageUsingGET(
  params: RoleEntityAPI.BaseRequestPageParams,
  options?: { [key: string]: any },
): Promise<RoleEntityAPI.BaseResponsePageRoleVO> {
  return request<RoleEntityAPI.BaseResponsePageRoleVO>('/api/role/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: params,
    ...(options || {}),
  });
}

/** addUser POST /api/user/add */
export async function addByUsingPOST(
  body: RoleEntityAPI.AddRquestParams, 
  options?: { [key: string]: any }) {
  return request<RoleEntityAPI.BaseResponse>('/api/role/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUser POST /api/user/delete */
export async function deleteByUsingPOST(
  body: RoleEntityAPI.DeleteRequestParams,
  options?: { [key: string]: any },
) {
  return request<RoleEntityAPI.BaseResponse>('/api/role/del', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateUser POST /api/user/update */
export async function updateByUsingPOST(
  body: RoleEntityAPI.UpdateRequestParams,
  options?: { [key: string]: any },
) {
  return request<RoleEntityAPI.BaseResponse>('/api/role/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

