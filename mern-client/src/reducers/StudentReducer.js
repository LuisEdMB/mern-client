import { GET_STUDENTS } from '../actions'

export const initialStateStudent = {
    students: [],
    student: {
        name: '',
        aptitudes: []
    }
}

export const StudentReducer = (state = initialStateStudent, action) => {
    switch (action.type) {
        case GET_STUDENTS:
            return {
                ...state, students: action.payload
            }
        default:
            return state;
    }
}