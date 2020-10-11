import React, { useContext, useEffect, useRef } from 'react'
import { StudentContext, StudentConsumer } from '../contexts/StudentContext'
import { Button } from '../components/Button'
import * as StudentService from '../services/StudentService'

export const Student = _ => {
    const { actions } = useContext(StudentContext)
    const isStudentsLoaded = useRef(false);
    useEffect(() => {
        if (!isStudentsLoaded.current){
            isStudentsLoaded.current = true
            actions.GetStudents()
        }
    }, [actions, isStudentsLoaded])
    const DeleteStudent = (id) => {
        StudentService.DeleteStudent(id, _ => actions.GetStudents())
    }
    return <StudentConsumer>
        {({ state }) => (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>
                            <Button
                                onClick={ () => alert('0') }
                                name='Create'/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.students.filter(student => student.active).map(student => <tr key={ student._id }>
                            <td>{ student.name }</td>
                            <td>
                                <Button
                                    onClick={ () => alert('1:' + student._id) }
                                    name='Edit'/>
                                <Button
                                    onClick={ () => DeleteStudent(student._id) }
                                    name='Delete'/>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        )}
    </StudentConsumer>
}