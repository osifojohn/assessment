export declare enum STATUSCODE {
    SUCCESS = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    ACCEPTED = 202,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    SERVER_ERROR = 500
}
export interface SectorData {
    name: string;
    children?: SectorData[];
}
