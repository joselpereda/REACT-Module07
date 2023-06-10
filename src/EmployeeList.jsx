import React from 'react'
import {Badge, Button, Table, Modal} from 'react-bootstrap'

import EmployeeFilter from './EmployeeFilter.jsx'
import EmployeeAdd from './EmployeeAdd.jsx'

const initialEmployees = [
    {
        id: 1,
        name: 'Jose Pereda',
        ext: 1124,
        email: 'joselpereda@live.com',
        title: "Chief Tech Architect",
        dateHired: new Date('2005-08-28'),
        isEmployed: true,
    },
    {
        id: 2,
        name: 'Sally Smith',
        ext: 1125,
        email: 'sallysmith@live.com',
        title: "Director of Sales",
        dateHired: new Date('2010-05-15'),
        isEmployed: true,
    },
]

function EmployeeTable(props) {
    const employeeRows = props.employees.map(employee =>
        <EmployeeRow 
            key={employee.id} 
            employee={employee}
            deleteEmployee={props.deleteEmployee}/>)
    return(
        <Table striped size='sm'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Extension</th>
                    <th>Email</th>
                    <th>Title</th>
                    <th>Date Hired</th>
                    <th>Currently Employed?</th>

                </tr>
            </thead>
            <tbody>
                {employeeRows}
            </tbody>
        </Table>
    )
}

function EmployeeRow (props) {
    constructor(props) {
        super(props);
        this.state = {
          modalVisible: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
      }
    
      toggleModal() {
        this.setState(prevState => ({
          modalVisible: !prevState.modalVisible
        }));
      }

      render() {
        const { employee } = this.props;
        const { modalVisible } = this.state;
    
        return (
          <tr>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.salary}</td>
            <td>
              <Button variant="danger" onClick={this.toggleModal}>
                Delete
              </Button>
    
              <Modal show={modalVisible} onHide={this.toggleModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure you want to delete the employee: {employee.name}?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.toggleModal}>
                    Cancel
                  </Button>
                  <Button variant="danger" onClick={this.handleDelete}>
                    Yes
                  </Button>
                </Modal.Footer>
              </Modal>
            </td>
          </tr>
        );
      }
}

export default class EmployeeList extends React.Component {
    constructor() {
        super()
        this.state = {employees: []}
        this.createEmployee = this.createEmployee.bind(this)
    }
    componentDidMount() {
        this.loadData()
    }
    loadData() {
        setTimeout (() => {
            this.setState({employees: initialEmployees})
        }, 500)
    }
    createEmployee(employee) {
        employee.id = this.state.employees.length + 1
        const newEmployeesList = this.state.employees.slice()
        newEmployeesList.push(employee)
        this.setState({employees: newEmployeesList})
    }
    render() { 
        return(
            <React.Fragment>
                    <EmployeeAdd createEmployee={this.createEmployee} /> 
                    <EmployeeFilter />
                    <EmployeeTable employees={this.state.employees} deleteEmployee={this.deleteEmployee}/>
            </React.Fragment>
        )
    }
}