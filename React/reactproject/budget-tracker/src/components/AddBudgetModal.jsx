import { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useBudgets } from "../contexts/BudgetsContext";

function AddBudgetModal({ show, handleClose }) {

    const nameRef = useRef();
    const maxRef = useRef();

    const { addBudget } = useBudgets();

    function handleSubmit(e) {
        e.preventDefault();

        addBudget({
            name: nameRef.current.value,
            max: parseFloat(maxRef.current.value),
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="max">
                        <Form.Label>Maximum Spendings</Form.Label>
                        <Form.Control ref={maxRef} type="number" required min={0} step={0.01} />
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">Add Budget</Button>
                    </div>
                </Modal.Body>
            </Form>

        </Modal>
    );
}

export default AddBudgetModal; 