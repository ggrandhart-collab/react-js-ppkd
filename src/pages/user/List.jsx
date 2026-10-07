import { useState } from "react";
import { Card, Form, Button, Table, Modal } from "react-bootstrap";
//import AppModal from "../../components/AppModal";
import { Card, CardContent, CardDescription, CardFooter, CardTitle, CardHeader }
from "@/components/ui/card";
import { Button } from "@/components/ui/button";



const dataUsers = [
    {
        id: 1,
        name: "Grand",
        email: "ggrandhart@gmail.com",
        Password: 12345678
    },
    {
        id: 2,
        name: "Joko",
        email: "Jokobowo@gmail.com",
        Password: 12345678
    },
]

const ListUser = () => {
    const _initForm = {
        id: null,
        name: "",
        email: "",
        password: "",
        status: 'Active'
    };

    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState(dataUsers);
    const [formData, setFormData] = useState(_initForm)
    const [isEdit, setIsEdit] = useState(false);




    const handleOpenModal = () => {
        setShowModal(true);
        setFormData(_initForm);
        setIsEdit(false);
    };

    const handleEditModal = (user) => {
        setShowModal(true);
        setIsEdit(true);
        setFormData(user);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isEdit);

        //jika edit data
        if (isEdit) {
            setUsers(users.map((user) => (user.id === formData.id ? formData : user)));

        } else {
            const newUser = {
                ...formData,
                id: Date.now(),
            };


            setUsers([...users, newUser])
            setFormData(_initForm);

        }

        setShowModal(false);

    };

    const handleDelete = (id) => {
        window.confirm("Are you sure want to delete this data?");
        //filter: users
        setUsers(users.filter((u) => u.id !== id));
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Card className="shadow-sm border-border p-6">
                <Card.Content className="p-0">
                    <div className="d-flex justify-content=between align-items-center mb-3"></div>
                    <h4 className="mb-0 fw-bold"> Data User</h4>
                    <div align="right">
                        <Button variant="primary" onClick={handleOpenModal}>
                            Create New User
                        </Button>
                    </div>
                    <Table className="w-full text-left text-sm">
                        <thead className="border-y bg-muted/30 text-xs uppercase text-muted-foreground">
                            <tr>
                                <th className="px-6 py-3 font-medium">#</th>
                                <th className="px-6 py-3 font-medium">Name</th>
                                <th className="px-6 py-3 font-medium">Email</th>
                                <th className="px-6 py-3 font-medium">Status</th>
                                <th className="px-6 py-3 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {users,length > 0 ? (
                             users.map((user, index) => (
                                <tr key={index} className="hover:bg-muted/50 transition-colors">
                                    <td>{index + 1}</td>
                                    <td>{user.name} </td>
                                    <td>{user.email} </td>
                                    <td>{user.status} </td>
                                    <td>Active</td>
                                    <td className="px-4 py-6 text-right whitespace-nowrap">
                                        <Button onClick={() => handleEditModal(user)} variant="warning" size="sm" className="me-2">edit</Button>
                                        <Button onClick={() => handleDelete(user.id)} variant="danger" size="sm" className="me-2">Delete</Button>
                                    </td>

                                </tr>
                            ));

                        </tbody>
                    </Table>
                </Card.Content>
            </Card>

            // <Modal show={showModal} onHide={handleCloseModal}>
            //     <Modal.Header closeButton>
            //         <Modal.Title>Modal heading</Modal.Title>
            //     </Modal.Header>
            //     <Modal.Body>
            //         <Form>
            //             <Form.Group className="mb-3">
            //                 <Form.Label>Name</Form.Label>
            //                 <Form.Control type="text" name="name" placeholder="Enter your name" required
            //                     value={formData.name} onChange={handleChange} />
            //             </Form.Group>
            //             <Form.Group className="mb-3">
            //                 <Form.Label>Email</Form.Label>
            //                 <Form.Control type="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
            //             </Form.Group>
            //             <Form.Group className="mb-3">
            //                 <Form.Label>Password</Form.Label>
            //                 <Form.Control type="password" name="password" placeholder="Enter your password" required value={formData.password} onChange={handleChange} />
            //             </Form.Group>
            //         </Form>
            //     </Modal.Body>
            //     <Modal.Footer>
            //         <Button variant="secondary" onClick={handleCloseModal}>
            //             Close
            //         </Button>
            //         <Button type="submit" variant="primary" onClick={handleSubmit}>
            //             Save Changes
            //         </Button>
            //     </Modal.Footer>
            // </Modal>

             <AppModal show={showModal}
             onClose={handleCloseModal}
             title={isEdit ? "Edit User" : "Create New User"}
             onSubmit={handleSubmit}
             submitLabel={isEdit? 'Save Change' : 'Save'}>
                 {/* <Form>
                     <Form.Group className="mb-3">
                         <Form.Label>Name</Form.Label>
                         <Form.Control type="text" name="name" placeholder="Enter your name" required
                             value={formData.name} onChange={handleChange} />
                     </Form.Group>
                     <Form.Group className="mb-3">
                         <Form.Label>Email</Form.Label>
                         <Form.Control type="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleChange} />
                     </Form.Group>
                     <Form.Group className="mb-3">
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password" name="password" placeholder="Enter your password" required value={formData.password} onChange={handleChange} />
                     </Form.Group>
                 </Form>    */}
             </AppModal>
        </>
    )

};


export default ListUser