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

//init
export async function initUsingGET(
  params: UserRankEntityAPI.BaseRequestPageParams,
  options?: { [key: string]: any },
): Promise<UserRankEntityAPI.BaseResponsePageVO> {
  return request<UserRankEntityAPI.BaseResponsePageVO>('/api/user/rank/init', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}

/** listUserVOByPage POST /api/user/list */
export async function listByPageBillAmountRankUsingGET(
  params: UserRankEntityAPI.BaseRequestPageParams,
  options?: { [key: string]: any },
): Promise<UserRankEntityAPI.BaseResponsePageVO> {
  return request<UserRankEntityAPI.BaseResponsePageVO>('/api/user/rank/billAmountRank', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}

//incomeAmountRank
export async function listByPageIncomeAmountRankUsingGET(
  params: UserRankEntityAPI.BaseRequestPageParams,
  options?: { [key: string]: any },
): Promise<UserRankEntityAPI.BaseResponsePageVO> {
  return request<UserRankEntityAPI.BaseResponsePageVO>('/api/user/rank/incomeAmountRank', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}

//expenseAmountRank
export async function listByPageExpenseAmountRankUsingGET(
  params: UserRankEntityAPI.BaseRequestPageParams,
  options?: { [key: string]: any },
): Promise<UserRankEntityAPI.BaseResponsePageVO> {
  return request<UserRankEntityAPI.BaseResponsePageVO>('/api/user/rank/expenseAmountRank', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}

//loginCountRank
export async function listByPageLoginCountRankUsingGET(
  params: UserRankEntityAPI.BaseRequestPageParams,
  options?: { [key: string]: any },
): Promise<UserRankEntityAPI.BaseResponsePageVO> {
  return request<UserRankEntityAPI.BaseResponsePageVO>('/api/user/rank/loginCountRank', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}

//--------------------------------------------------统计---------------------------------------------------------
//queryRegisterCount
export async function queryRegisterCountUsingGET(
  params: UserRankEntityAPI.BaseRequestPageParams,
  options?: { [key: string]: any },
): Promise<UserRankEntityAPI.UserRegisterResponse> {
  return request<UserRankEntityAPI.UserRegisterResponse>('/api/user/rank/queryRegisterCount', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}

//activeCount
export async function listByQueryActiveCountUsingGET(
  params: UserRankEntityAPI.BaseRequestPageParams,
  options?: { [key: string]: any },
): Promise<UserRankEntityAPI.UserActivityResponse> {
  return request<UserRankEntityAPI.UserActivityResponse>('/api/user/rank/activeCount', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}
//genderCount
export async function queryGenderCountUsingGET(
  params: UserRankEntityAPI.BaseRequestPageParams,
  options?: { [key: string]: any },
): Promise<UserRankEntityAPI.UserGenderCountResponse> {
  return request<UserRankEntityAPI.UserGenderCountResponse>('/api/user/rank/genderCount', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}
//registerCount
export async function listByQueryRegisterCounttUsingGET(
  params: UserRankEntityAPI.BaseRequestPageParams,
  options?: { [key: string]: any },
): Promise<UserRankEntityAPI.UserRegisterCountResponse> {
  return request<UserRankEntityAPI.UserRegisterCountResponse>('/api/user/rank/registerCount', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
    ...(options || {}),
  });
}