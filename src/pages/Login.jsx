import { Form, Button, Container, Card } from 'react-bootstrap';
import { useState } from 'react';

export default function Login() {

    const _initialForm = {
        email: "",
        password: "",

    };
    const [formData, setFormData] = useState(_initialForm);
    const [isLoading, setisLoading] = useState(false);

    const handleChange = (e) => {
        console.log(`Input change ${e.target.name} = ${e.target.value}`)

        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setisLoading(true);
        setTimeout(() => {
            setisLoading(false);
            navigate("/dashboard")

        },1000)
    };

    return (
        <Container className="d-flex align-items-center justify-content-center min-vh-100">
            <div className="w-100 d-flex align-items-center justify-content-center">
                <Card className="shadow" style={{ width: "400px" }}>
                    <Card.Body className="p-4">
                        <h2 className="font-weight-bold text-center mb-4">Login Form</h2>

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control name="email" type="email" value={formData.email} onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" value={formData.password} onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group>
                                <Button variant="primary" type="submit" className="w-100" onClick={handleLogin}>
                                    {isLoading ? "Loading..." : "Sign In"}
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>

        </Container>
    );
}