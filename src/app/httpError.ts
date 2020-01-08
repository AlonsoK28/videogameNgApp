export interface httpError {
    httpErrorMessage?: string;
    httpStatusCode: number;
}

export const httpErrorCode = {
    0: {
        code: 0,
        message: 'There is no connection with the service provider'
    },
    404: {
        code: 404,
        message: 'No results found'
    },
    409: {
        code: 409,
        message: 'Item already registred'
    },
    500: {
        code: 500,
        message: 'Error internal server'
    },
    
}