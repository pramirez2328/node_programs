import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { states } from '../../../util';
import { courses } from '../../../util';

function AddStudent() {
  const [show, setShow] = useState(false);
  const [student, setStudent] = useState({
    name: '',
    lastName: '',
    gpa: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    courses: [] as string[],
  });

  const handleShow = () => setShow(true);
  const handleClose = () => {
    const newPhone = student.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    const newStudent = {
      name: `${student.name} ${student.lastName}`,
      courses: student.courses,
      gpa: student.gpa,
      email: student.email,
      phone: newPhone,
      address: `${student.address}, ${student.city}, ${student.state}, USA`,
    };

    try {
      fetch('http://localhost:3001/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      });
    } catch (error) {
      console.error('Error:', error);
    }

    setStudent({
      name: '',
      lastName: '',
      gpa: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      courses: [] as string[],
    });

    setShow(false);
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Add Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student Information:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div>
              <Form.Label htmlFor='inputName'>Name</Form.Label>
              <Form.Control
                type='text'
                id='inputName'
                aria-describedby='studentName'
                onChange={(e) => setStudent({ ...student, name: e.target.value })}
              />
              <Form.Text id='studentName' muted>
                Your name must be at least 3 characters long.
              </Form.Text>
            </div>
            <div>
              <Form.Label htmlFor='inputLastName'>Last Name</Form.Label>
              <Form.Control
                type='text'
                id='inputLastName'
                aria-describedby='studentLastName'
                onChange={(e) => setStudent({ ...student, lastName: e.target.value })}
              />
              <Form.Text id='studentLastName' muted>
                Your last name must be at least 3 characters long.
              </Form.Text>
            </div>
            <div className='d-flex'>
              <div>
                <Form.Label htmlFor='inputGPA'>GPA</Form.Label>
                <Form.Control
                  type='number'
                  id='inputGPA'
                  aria-describedby='studentGPA'
                  min={2.0}
                  max={4.0}
                  step={0.1}
                  onChange={(e) => setStudent({ ...student, gpa: e.target.value })}
                />
                <Form.Text id='studentGPA' muted>
                  Your GPA must be between 2.0 and 4.0.
                </Form.Text>
              </div>
              <div>
                <Form.Label htmlFor='inputCourses'>Courses</Form.Label>
                <Form.Control
                  as='select'
                  id='inputCourses'
                  aria-describedby='studentCourses'
                  onChange={(e) => setStudent({ ...student, courses: [...student.courses, e.target.value] })}
                >
                  <option value=''>Select course...</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </Form.Control>
              </div>
            </div>
            <div>
              <Form.Label htmlFor='inputEmail'>Email</Form.Label>
              <Form.Control
                type='email'
                id='inputEmail'
                aria-describedby='studentEmail'
                onChange={(e) => setStudent({ ...student, email: e.target.value })}
              />
              <Form.Text id='studentEmail' muted>
                Your email must be a valid email address.
              </Form.Text>
            </div>

            <div className='d-flex'>
              <div>
                <Form.Label htmlFor='inputAddress'>Address</Form.Label>
                <Form.Control
                  type='text'
                  id='inputAddress'
                  aria-describedby='studentAddress'
                  onChange={(e) => setStudent({ ...student, address: e.target.value })}
                />
                <Form.Text id='studentAddress' muted>
                  Your address must be at least 5 characters long.
                </Form.Text>
              </div>
              <div>
                <Form.Label htmlFor='inputCity'>City</Form.Label>
                <Form.Control
                  type='text'
                  id='inputCity'
                  aria-describedby='studentCity'
                  onChange={(e) => setStudent({ ...student, city: e.target.value })}
                />
                <Form.Text id='studentCity' muted>
                  Your city must be at least 3 characters long.
                </Form.Text>
              </div>
            </div>
            <div className='d-flex'>
              <div>
                <Form.Label htmlFor='inputPhone'>Phone</Form.Label>
                <Form.Control
                  type='tel'
                  id='inputPhone'
                  aria-describedby='studentPhone'
                  onChange={(e) => setStudent({ ...student, phone: e.target.value })}
                />
                <Form.Text id='studentPhone' muted>
                  Your phone number must be a valid phone number.
                </Form.Text>
              </div>

              <div>
                <Form.Label htmlFor='inputStates'>State</Form.Label>
                <Form.Control
                  as='select'
                  id='inputStates'
                  aria-describedby='studentState'
                  onChange={(e) => setStudent({ ...student, state: e.target.value })}
                >
                  <option value=''>Select state...</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </Form.Control>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddStudent;
