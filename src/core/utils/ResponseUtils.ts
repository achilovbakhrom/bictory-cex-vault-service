import { Response as ExpressResponse } from "express";
import { StatusCodes, getReasonPhrase } from "http-status-codes";
type SuccessStatusCodes = StatusCodes.OK | StatusCodes.CREATED | StatusCodes.NO_CONTENT

export class ResponseUtils {

    static success<T>(res: ExpressResponse, data: T, message?: string, status: SuccessStatusCodes = StatusCodes.OK) {
        this.response(res, data, status)
    }

    static failure(res: ExpressResponse, error: Error, status: StatusCodes) {
        this.response(res, error, status)
    }

    private static response<T>(res: ExpressResponse, data: T, status: StatusCodes) {
        res.status(status).json({
            message: getReasonPhrase(status),
            status,
            data
        })
    }
}
