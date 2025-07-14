import { CommonModel } from "../../../shared/model/common.model";

export interface loginResponse extends CommonModel {
    result: {
        token: string;
        refreshToken: string;
    }
}