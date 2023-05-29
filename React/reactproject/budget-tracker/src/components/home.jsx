import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./BudgetCard";
import AddBudgetModal from "./AddBudgetModal";
import { useState } from "react";
import { useBudgets } from "../contexts/BudgetsContext";
import AddExpenseModal from "./AddExpenseModal";

function Home() {

    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const { budgets, expenses, getBudgetExpense } = useBudgets();

    let divStyle = {
        display: "grid",
        gap: "1rem",
        alignItems: "flex-start",
        gripTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
    }
    return (
        <>
            <Container className="my-4">
                <Stack direction="horizontal" gap="2" className="mb-4">
                    <h1 className="me-auto">Budgets</h1>
                    <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
                    <Button variant="outline-primary" onClick={() => setShowAddExpenseModal(true)}>Add Expense</Button>
                </Stack>
                <div style={divStyle}></div>

                {
                    budgets.map(budget => {

                        let expensesForBudget = getBudgetExpense(budget.name);
                        console.log("expensesForBudget -> ", expensesForBudget);
                        const amount = expensesForBudget.reduce((total, expense) => total + expense.amount, 0);
                        return (<BudgetCard
                            key={budget.id}
                            name={budget.name}
                            amount={amount}
                            max={budget.max}>
                        </BudgetCard>)
                    })
                }

            </Container>
            <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)}></AddBudgetModal>
            <AddExpenseModal show={showAddExpenseModal} handleClose={() => setShowAddExpenseModal(false)}></AddExpenseModal>
        </>
    );
}

export default Home;