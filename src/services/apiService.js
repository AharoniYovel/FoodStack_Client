import axios from "axios";
import { infConect } from "../config/secret";

export const API_URL = "http://localhost:3001/";
// export const API_URL = infConect.apiUrl;


export const EMPLOYEES = "employees";
export const DONATES = "donates";
export const VOLUNTEERS = "volunteers";
export const PATHS = "paths";
export const POINTS = "points";

export const TOKEN_NAME = infConect.tokenName;

//* For [GET] Request
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
        console.log("problem to get data")
        throw (err);
    }
}

//*todo For Post, Delete, Put , Patch
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
        console.log("problem to post/put/del data")
        throw (err);
    }
}