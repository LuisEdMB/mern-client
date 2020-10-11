import React from 'react';
import { Student } from './views/Student';
import '../src/assets/App.css'
import { StudentProvider } from './contexts/StudentContext';

export default function App() {
  return <StudentProvider>
    <Student/>
  </StudentProvider>
}