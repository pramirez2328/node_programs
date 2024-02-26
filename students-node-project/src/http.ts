import { AddStudent, Student } from '../src/components/students/types';

export const fetchStudents = async () => {
  try {
    const response = await fetch('http://localhost:8080/students');
    if (!response.ok) {
      throw new Error('Failed to fetch students');
    }
    console.info('%c---Students were fetched from STUDENTS RECORDS!', 'color: green;');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const deleteStudent = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:8080/students/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      response.json().then((data) => alert(data.message));
      throw new Error('Failed to delete student');
    }

    console.info('%c---A student was deleted from STUDENTS RECORDS!', 'color: red;');
  } catch (error) {
    console.error(error);
  }
};

export const addStudent = async (student: AddStudent) => {
  try {
    const response = await fetch('http://localhost:8080/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    if (response.status !== 201) {
      response.json().then((data) => alert(data.message));
      throw new Error('Failed to add student');
    }
    console.log('%c---A student was added to STUDENTS RECORDS!', 'color: pink;');
    return response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};

export const updateStudent = async (student: Student) => {
  try {
    const response = await fetch(`http://localhost:8080/students/${student._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    if (!response.ok) {
      response.json().then((data) => alert(data.message));
      throw new Error('Failed to update student');
    }
    console.log('%c---A student was updated in STUDENTS RECORDS!', 'color: violet;');
    return response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};
