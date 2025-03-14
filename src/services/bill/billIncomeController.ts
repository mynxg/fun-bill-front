import { request } from '@umijs/max';

export async function listBillVOByPageUsingGET(
    params: BILLENTITYAPI.BaseBillRequestPageParams,
    options?: { [key: string]: any },
): Promise<BILLENTITYAPI.BaseResponsePageBillVO> {
    return request<BILLENTITYAPI.BaseResponsePageBillVO>('/api/bill/income/list', {
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
    body: BILLENTITYAPI.AddRquestParams,
    options?: { [key: string]: any }) {
    return request<BILLENTITYAPI.BaseResponse>('/api/bill/income/add', {
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
    body: BILLENTITYAPI.DeleteRequestParams,
    options?: { [key: string]: any },
) {
    return request<BILLENTITYAPI.BaseResponse>('/api/bill/income/del', {
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
    body: BILLENTITYAPI.UpdateRequestParams,
    options?: { [key: string]: any },
) {
    return request<BILLENTITYAPI.BaseResponse>('/api/bill/income/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
