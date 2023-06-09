import React from 'react'
import { Button, Container, Row, Col, Modal } from 'react-bootstrap'
import { LoaderTargetPlugin } from 'webpack'

export default class EmployeeAdd extends React.Component {
    constructor() {
        super()
        this.State = {
            modalVisible: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleShowModal = this.handleShowModal.bind(this)
        this.handleHideModal = this.handleHideModal.bind(this)
    }

    handleShowModal() {
        this.setState = ({modalVisible: true,})
    }

    handleHideModal() {

    }

    handleSubmit(e) {
        e.preventDefault()
        const form = document.forms.employeeAdd
        const employee = {
            name: form.name.value,
            ext: form.ext.value,
            email: form.email.value,
            title: form.title.value,
            dateHired: new Date(),
            isEmployed: true,
        }
        this.props.createEmployee(employee)
        form.name.value = ''
        form.ext.value = ''
        form.email.value = ''
        form.title.value = ''
    }
    render() {
        return(
            <>
                <div>
                    <Button variant='primary' size='sm' onClick={this.handleShowModal}>
                        New Employee
                    </Button> 
                </div>
                <Container fluid>
                    <form name="employeeAdd" onSubmit={this.handleSubmit}>
                        <Row>
                            <Col md={3}>Name: </Col>
                            <Col md="auto"><input type="text" name="name" /></Col>
                        </Row>
                        <Row>
                            <Col md={3}>Extension:</Col> 
                            <Col md="auto"><input type="text" name="ext" maxLength={4}/></Col>
                        </Row>
                        <Row>
                            <Col md={3}>Email:</Col> 
                            <Col md="auto"><input type="text" name="email" /></Col>
                        </Row>
                        <Row>
                            <Col md={3}>Title: </Col> 
                            <Col md="auto"><input type="text" name="title" /></Col>
                            <Button type="submit" variant="primary" size='sm'>Add Employee</Button>
                        </Row>
                    </form>
                </Container>
            </>
        )
    } 
}