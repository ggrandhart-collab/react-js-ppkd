import { useState } from "react";
import { Card, Form, Button, Table, Modal } from "react-bootstrap";
import AppModal from "../../components/AppModal";

function CategoryKopi() {
    const menuKopi = [
        {   id:1,
            name: "Espresso",
            deskripsi: "Kopi hitam dengan rasa kuat dan pekat",
            harga: 15000,
        },
        {
            id: 2,
            name: "Americano",
            deskripsi: "Espresso dengan tambahan air",
            harga: 18000,
        },
        {
            id: 3,
            name: "Cappuccino",
            deskripsi: "Espresso, susu, dan foam lembut",
            harga: 22000,
        },
        {
            id: 4,
            name: "Caffè Latte",
            deskripsi: "Espresso dengan susu yang creamy",
            harga: 22000,
        },
       
    ];
    const [isEdit, setIsEdit] = useState(false);
    const [categories, setCategory] = useState(menuKopi);
    const [formData, setFormData] = useState({
        name: "",
        deskripsi: "",
        harga: 0,
    });
    const handleOpenModal = () => {
        setShowModal(true);
        setFormData(menuKopi);
        setIsEdit(false);
    };
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isEdit);

        //jika edit data
        if (isEdit) {
            setCategory(categories.map((category) => (category.id === formData.id ? formData : category)));

        } else {
            const newCategory = {
                ...formData,
                id: Date.now(),
            };


            setCategory([...categories, newCategory])
            setFormData(formData);

        }

        setShowModal(false);

    };
    const handleEditModal = (category) => {
        setShowModal(true);
        setIsEdit(true);
        setFormData(category);
    };
    const handleDelete = (id) => {
        window.confirm("Are you sure want to delete this data?");
        //filter: users
        setCategory(categories.filter((u) => u.id !== id));
    };
    return (
        <>
        
        <Card className="shadow-sm border-0">
            <Card.Body>
                <div className="d-flex justify-content=between align-items-center mb-3"></div>
                <h4 className="mb-0 fw-bold"> Data User</h4>
                <div align="right">
                    <Button variant="primary" onClick={handleOpenModal}>
                        Create New User
                    </Button>
                </div>
                <Table responsive hover className="align-midlle mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>deskripsi</th>
                            <th>harga</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{category.name} </td>
                                <td>{category.deskripsi}</td>
                                <td>{category.harga}</td>
                                <td>Active</td>
                                <td>
                                    <Button onClick={() => handleEditModal(category)} variant="warning" size="sm" className="me-2">edit</Button>
                                    <Button onClick={() => handleDelete(category.id)} variant="danger" size="sm" className="me-2">Delete</Button>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </Table>
            </Card.Body>
        </Card>
            <AppModal show={showModal}
                onClose={handleCloseModal}
                // title={isEdit ? "Edit User" : "Create New User"}
                onSubmit={handleSubmit}
                // submitLabel={isEdit ? 'Save Change' : 'Save'}
                >
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter your name" required
                            value={formData.name} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>deskripsi</Form.Label>
                        <Form.Control type="text" name="deskripsi" placeholder="Enter your deskripsi" required value={formData.deskripsi} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>harga</Form.Label>
                        <Form.Control type="number" name="harga" placeholder="Enter your price" required value={formData.harga} onChange={handleChange} />
                    </Form.Group>
                </Form>
            </AppModal>
        </>
    );
}

export default CategoryKopi;