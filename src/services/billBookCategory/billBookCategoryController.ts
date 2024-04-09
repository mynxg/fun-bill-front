import { request } from '@umijs/max';

/**
 * 查询账本分类列表 GET /api/bill/book/category/list
 */
export async function listByPageUsingGET(
    params: BILLBOOKCATEGORYENTITYAPI.BaseRequestPageParams,
    options?: { [key: string]: any },
): Promise<BILLBOOKCATEGORYENTITYAPI.BaseResponsePageVO> {
    return request<BILLBOOKCATEGORYENTITYAPI.BaseResponsePageVO>('/api/bill/book/category/list', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        params: params,
        ...(options || {}),
    });
}

/**
 * 增加账本分类 POST /api/bill/book/category/add
 * 
 */
export async function addByUsingPOST(
    body: BILLBOOKCATEGORYENTITYAPI.AddRquestParams,
    options?: { [key: string]: any }) {
    return request<BILLBOOKCATEGORYENTITYAPI.BaseResponse>('/api/bill/book/category/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

/**
 * 删除账本分类 POST /api/bill/book/category/delete
 */
export async function deleteByUsingPOST(
    body: BILLBOOKCATEGORYENTITYAPI.DeleteRequestParams,
    options?: { [key: string]: any },
) {
    return request<BILLBOOKCATEGORYENTITYAPI.BaseResponse>('/api/bill/book/category/delete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

/**
 * 更新账本分类 POST /api/bill/book/category/update
 */
export async function updateByUsingPOST(
    body: BILLBOOKCATEGORYENTITYAPI.UpdateRequestParams,
    options?: { [key: string]: any },
) {
    return request<BILLBOOKCATEGORYENTITYAPI.BaseResponse>('/api/bill/book/category/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
