import axios from "axios";

export const API_URL = "http://localhost:3001";
// export const API_URL = "https://mysite.co.il";

export const TOKEN_NAME = "donates_tok"

// For GET Request
export const doApiGet = async (_url) => {

    try {
        let resp = await axios.get(_url, {
            headers: {
                "x-api-key": localStorage[TOKEN_NAME],
                "content-Type": "application/json"
            }
        })
        return resp;
    }

    catch (err) {
        throw (err);
    }
}

// For Post, Delete, Put , Patch
export const doApiMethod = async (_url, _method, _body = {}) => {
    try {
        let resp = await axios({
            url: _url,
            method: _method,
            data: JSON.stringify(_body),
            headers: {
                "x-api-key": localStorage[TOKEN_NAME],
                "content-Type": "application/json"
            }
        })
        return resp;
    }

    catch (err) {
        throw (err);
    }
}