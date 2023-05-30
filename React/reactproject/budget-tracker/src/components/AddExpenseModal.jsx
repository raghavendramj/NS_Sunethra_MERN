import { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext";

function AddExpenseModal({ show, handleClose, defaultBudgetId }) {

    const descRef = useRef();
    const amountRef = useRef();
    const budgetIdRef = useRef();

    const { addExpense, budgets } = useBudgets();

    function handleSubmit(e) {
        e.preventDefault();
        let newExpense = {
            description: descRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value
        }
        addExpense(newExpense);
        handleClose();
    }

    return (

        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control ref={descRef} type="text" required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="amount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                        ref={amountRef}
                        type="number"
                        required
                        min={0}
                        step={0.01}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="budgetId">
                    <Form.Label>Budget</Form.Label>
                    <Form.Select
                        defaultValue={defaultBudgetId}
                        ref={budgetIdRef}
                    >
                        <option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
                        {budgets.map(budget => <option key={budget.id} value={budget.name}>{budget.name}</option>)}
                    </Form.Select>
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">Add Expense</Button>
                </div>
            </Form>
        </Modal>
    );
}

export default AddExpenseModal;