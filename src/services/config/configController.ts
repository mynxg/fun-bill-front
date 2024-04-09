import { request } from '@umijs/max';


/**
 * @description 分页查询配置信息
 * @param {ConfigEntityAPI.BaseRequestPageParams} params
 * @param {Object} options
 * @returns {Promise<ConfigEntityAPI.BaseResponsePageConfigVO>}
 * @name listByPageUsingGET
 * @description 分页查询配置信息
 * @typedef listByPageUsingGET
 * 
 */
export async function listByPageUsingGET(
  params: ConfigEntityAPI.BaseRequestPageParams,
  options?: { [key: string]: any },
): Promise<ConfigEntityAPI.BaseResponsePageConfigVO> {
  return request<ConfigEntityAPI.BaseResponsePageConfigVO>('/api/sys/config/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: params,
    ...(options || {}),
  });
}

/**
 * @description 新增配置信息
 * @param {ConfigEntityAPI.AddRquestParams} body
 * @param {Object} options
 * @returns {Promise<ConfigEntityAPI.BaseResponse>}
 * @name addByUsingPOST
 */
export async function addByUsingPOST(
  body: ConfigEntityAPI.AddRquestParams, 
  options?: { [key: string]: any }) {
  return request<ConfigEntityAPI.BaseResponse>('/api/sys/config/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**
 * @description 删除配置信息
 * @param {ConfigEntityAPI.DeleteRequestParams} body
 * @param {Object} options
 * @returns {Promise<ConfigEntityAPI.BaseResponse>}
 * @name deleteByUsingPOST
 * @description 删除配置信息
 * @typedef deleteByUsingPOST
 */
export async function deleteByUsingPOST(
  body: ConfigEntityAPI.DeleteRequestParams,
  options?: { [key: string]: any },
) {
  return request<ConfigEntityAPI.BaseResponse>('/api/sys/config/del', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**
 * @description 更新配置信息
 * @param {ConfigEntityAPI.UpdateRequestParams} body
 * @param {Object} options
 * @returns {Promise<ConfigEntityAPI.BaseResponse>}
 * @name updateByUsingPOST
 * @description 更新配置信息
 */
export async function updateByUsingPOST(
  body: ConfigEntityAPI.UpdateRequestParams,
  options?: { [key: string]: any },
) {
  return request<ConfigEntityAPI.BaseResponse>('/api/sys/config/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

