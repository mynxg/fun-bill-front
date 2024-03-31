import { request } from '@umijs/max';

export async function listByPageUsingGET(
    params: BILLCATEGORYENTITYAPI.BaseBillRequestPageParams,
    options?: { [key: string]: any },
): Promise<BILLCATEGORYENTITYAPI.BaseResponsePageBillVO> {
    return request<BILLCATEGORYENTITYAPI.BaseResponsePageBillVO>('/api/bill/category/list', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        data: params,
        ...(options || {}),
    });
}

/** addUser POST /api/user/add */
export async function addByUsingPOST(
    body: BILLCATEGORYENTITYAPI.AddRquestParams,
    options?: { [key: string]: any }) {
    return request<BILLCATEGORYENTITYAPI.BaseResponse>('/api/bill/category/add', {
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
    body: BILLCATEGORYENTITYAPI.DeleteRequestParams,
    options?: { [key: string]: any },
) {
    return request<BILLCATEGORYENTITYAPI.BaseResponse>('/api/bill/category/del', {
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
    body: BILLCATEGORYENTITYAPI.UpdateRequestParams,
    options?: { [key: string]: any },
) {
    return request<BILLCATEGORYENTITYAPI.BaseResponse>('/api/bill/category/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
