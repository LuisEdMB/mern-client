import { Request } from './Api'

export const GetStudents = async (callbackOk) =>{
    return Request({
        url: 'students',
        method: 'get',
        data: null
    }, callbackOk)
}

export const DeleteStudent = async (id, callbackOk) => {
    return Request({
        url: 'students/' + id,
        method: 'put',
        data: {
            delete: true
        }
    }, callbackOk)
}