const request = (method, url, payload) => {
    return new Promise((resolve, reject) => {
        const oReq = new XMLHttpRequest();
        oReq.onload = resolve(oReq.response);
        oReq.onerror = reject(oReq.response);

        oReq.setRequestHeader('X-Auth-Token', '123123123123'); // TODO: login

        oReq.open(method, url, true);
        oReq.send(payload);
    })
};

export const get = (url, params) => {
    const newParams = '';
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            if (newParams != '') {
                newParams += '&';
            }
            newParams += `${key}=${encodeURIComponent(params[key])}`;
        }
    }
    const requestUrl = url + newParams
    return request('GET', requestUrl)
}

export const post = (url, params) => {
    const newParams = JSON.stringify(params)
    return request('POST', url, newParams)
}

export const put = (url, params) => {
    const newParams = JSON.stringify(params)
    return request('PUT', url, newParams)
}

export const del = (url) => {
    return request('DELETE', url)
}