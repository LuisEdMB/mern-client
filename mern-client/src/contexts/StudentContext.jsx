import React, { createContext, useReducer } from 'react'
import { GetStudents } from '../actions'
import { StudentReducer, initialStateStudent } from '../reducers/StudentReducer'
import * as StudentService from '../services/StudentService'

export const StudentContext = createContext()

export const StudentProvider = ({ children }) => {
    const [state, dispatch] = useReducer(StudentReducer, initialStateStudent)
    const actions = {
        GetStudents() {
            StudentService.GetStudents(students => dispatch(GetStudents(students)))
        }
    }
    return <StudentContext.Provider value={{ state, actions }}>
        { children }
    </StudentContext.Provider>
}

export const StudentConsumer = StudentContext.Consumer