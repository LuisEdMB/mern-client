export const GET_STUDENTS = 'GET_STUDENTS'
export const SET_STUDENT = 'SET_STUDENT'
export const SET_VALUE_STUDENT = 'SET_VALUE_STUDENT'

export const GetStudents = (students) => {
    return{
        type: GET_STUDENTS,
        payload: students
    }
}

export const SetStudent = (student) => {
    return{
        type: SET_STUDENT,
        payload: student
    }
}

export const SetValueStudent = (name, value) => {
    return{
        type: SET_VALUE_STUDENT,
        name: name,
        value: value
    }
}