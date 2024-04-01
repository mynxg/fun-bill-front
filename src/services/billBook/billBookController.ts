import { request } from '@umijs/max';

export async function listByPageUsingGET(
    params: BILLBOOKENTITYAPI.BaseRequestPageParams,
    options?: { [key: string]: any },
): Promise<BILLBOOKENTITYAPI.BaseResponsePageVO> {
    return request<BILLBOOKENTITYAPI.BaseResponsePageVO>('/api/bill/book/list', {
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
    body: BILLBOOKENTITYAPI.AddRquestParams,
    options?: { [key: string]: any }) {
    return request<BILLBOOKENTITYAPI.BaseResponse>('/api/bill/book/add', {
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
    body: BILLBOOKENTITYAPI.DeleteRequestParams,
    options?: { [key: string]: any },
) {
    return request<BILLBOOKENTITYAPI.BaseResponse>('/api/bill/book/delete', {
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
    body: BILLBOOKENTITYAPI.UpdateRequestParams,
    options?: { [key: string]: any },
) {
    return request<BILLBOOKENTITYAPI.BaseResponse>('/api/bill/book/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}
