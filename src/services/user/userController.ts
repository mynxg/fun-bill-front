import { request } from '@umijs/max';


/** listUserVOByPage POST /api/user/list */

export async function listUserVOByPageUsingGET(
  params: UserEntityAPI.BaseUserRequestPageParams,
  options?: { [key: string]: any },
): Promise<UserEntityAPI.BaseResponsePageUserVO> {
  return request<UserEntityAPI.BaseResponsePageUserVO>('/api/user/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}

/** addUser POST /api/user/add */
export async function addUserByUsingPOST(
  body: UserEntityAPI.userAddRquestParams, 
  options?: { [key: string]: any }) {
  return request<UserEntityAPI.BaseResponse>('/api/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUser POST /api/user/delete */
export async function deleteUserByUsingPOST(
  body: UserEntityAPI.DeleteRequestParams,
  options?: { [key: string]: any },
) {
  return request<UserEntityAPI.BaseResponse>('/api/user/del', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateUser POST /api/user/update */
export async function updateUserByUsingPOST(
  body: UserEntityAPI.UserUpdateRequestParams,
  options?: { [key: string]: any },
) {
  return request<UserEntityAPI.BaseResponse>('/api/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateUser POST /api/user/update */
export async function updateUserPasswordByUsingPOST(
  body: UserEntityAPI.UpdatePasswordRequestParams,
  options?: { [key: string]: any },
) {
  return request<UserEntityAPI.BaseResponse>('/api/profile/updatePwd', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function updateProfileByUsingPOST(
  body: UserEntityAPI.UserUpdateRequestParams,
  options?: { [key: string]: any },
) {
  return request<UserEntityAPI.BaseResponse>('/api/profile/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}




  