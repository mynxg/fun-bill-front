import { request } from '@umijs/max';

/** addUser POST /api/user/add */
export async function addUserUsingPOST(body: USERTESTAPI.userAddParams, options?: { [key: string]: any }) {
  return request<USERTESTAPI.BaseResponse>('/api/user/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUser POST /api/user/delete */
export async function deleteUserUsingPOST(
  body: USERTESTAPI.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<USERTESTAPI.BaseResponseBoolean_>('/api/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserById GET /api/user/get */
// export async function getUserByIdUsingGET(
//   // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
//   params: USERTESTAPI.getUserByIdUsingGETParams,
//   options?: { [key: string]: any },
// ) {
//   return request<USERTESTAPI.BaseResponseUser_>('/api/user/get', {
//     method: 'GET',
//     params: {
//       ...params,
//     },
//     ...(options || {}),
//   });
// }

/** getLoginUser GET /api/user/get/login */
// export async function getLoginUserUsingGET(options?: { [key: string]: any }) {
//   return request<USERTESTAPI.BaseResponseLoginUserVO_>('/api/user/get/login', {
//     method: 'GET',
//     ...(options || {}),
//   });
// }

/** getUserVOById GET /api/user/get/vo */
export async function getUserVOByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: USERTESTAPI.getUserVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<USERTESTAPI.BaseResponseUserVO_>('/api/user/query', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserByPage POST /api/user/list/page */
export async function listUserByPageUsingPOST(
  body: USERTESTAPI.UserQueryRequest,
  options?: { [key: string]: any },
) {
  return request<USERTESTAPI.BaseResponsePageUser_>('/api/user/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listUserVOByPage POST /api/user/list/page/vo */
export async function listUserVOByPageUsingPOST(
  body: USERTESTAPI.UserQueryRequest,
  options?: { [key: string]: any },
) {
  return request<USERTESTAPI.BaseResponsePageUserVO>('/api/user/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** userLogin POST /api/user/login */
// export async function userLoginUsingPOST(
//   body: USERTESTAPI.UserLoginRequest,
//   options?: { [key: string]: any },
// ) {
//   return request<USERTESTAPI.BaseResponseLoginUserVO_>('/api/user/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: body,
//     ...(options || {}),
//   });
// }

/** userLogout POST /api/user/logout */
// export async function userLogoutUsingPOST(options?: { [key: string]: any }) {
//   return request<USERTESTAPI.BaseResponseBoolean_>('/api/user/logout', {
//     method: 'POST',
//     ...(options || {}),
//   });
// }

/** userRegister POST /api/user/register */
// export async function userRegisterUsingPOST(
//   body: USERTESTAPI.UserRegisterRequest,
//   options?: { [key: string]: any },
// ) {
//   return request<USERTESTAPI.BaseResponseLong_>('/api/user/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: body,
//     ...(options || {}),
//   });
// }

/** updateUser POST /api/user/update */
export async function updateUserUsingPOST(
  body: USERTESTAPI.UserUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<USERTESTAPI.BaseResponseBoolean_>('/api/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateMyUser POST /api/user/update/my */
export async function updateMyUserUsingPOST(
  body: USERTESTAPI.UserUpdateMyRequest,
  options?: { [key: string]: any },
) {
  return request<USERTESTAPI.BaseResponseBoolean_>('/api/user/update/my', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
