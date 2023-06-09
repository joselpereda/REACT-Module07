import React from 'react'
import {Badge, Button, Table} from 'react-bootstrap'

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
    function onDeledteClick() {
        props.deleteEmployee(props.employee._id)
    }
    return (
        <tr>
            <td><Link to={`/edit/${props.employee._id}`}>{props.employee.name}</Link></td>
            <td>{props.employee.extension}</td>
            <td>{props.employee.email}</td>
            <td>{props.employee.title}</td>
            <td>{props.employee.dateHired.toDateString()}</td>
            <td>{props.employee.currentlyEmployed ? 'Yes' : 'No'}</td>
            <td><Button variant="danger" size='sm' onClick={onDeledteClick}>X</Button></td>
        </tr>
    )
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
                    <h1><Badge bg="secondary">Employee Management Application</Badge></h1> 
                    <EmployeeFilter />
                    <hr />
                    <EmployeeTable employees={this.state.employees}/>
                    <hr />
                    <EmployeeAdd createEmployee={this.createEmployee} />
            </React.Fragment>
        )
    }
}