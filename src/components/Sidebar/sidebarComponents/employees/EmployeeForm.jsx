import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

function EmployeeForm({ employee, onCancel, onSave }) {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        role: '',
        password: '',
        confirmpassword: ''
    });

    useEffect(() => {
        if (employee) {
            setFormData(employee);
        }
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div>
            <h3>{employee ? 'Edit Employee' : 'New Employee'}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="username">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="role">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="text" name="role" value={formData.role} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="confirmpassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="confirmpassword" name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} />
                </Form.Group>
                <Button variant="secondary" onClick={onCancel}>Cancel</Button>{' '}
                <Button variant="primary" type="submit">Save</Button>
            </Form>
        </div>
    );
}

export default EmployeeForm;
