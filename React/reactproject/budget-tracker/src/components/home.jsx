import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./BudgetCard";
import AddBudgetModal from "./AddBudgetModal";
import { useState } from "react";
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext";
import AddExpenseModal from "./AddExpenseModal";
import UncatrgorizedBudgetCard from "./UncatrgorizedBudgetCard";
import TotalBudgetCard from "./TotalBudgetCard";
import ViewExpensesModal from "./ViewExpensesModal";

function Home() {

    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [viewExpenseModalBudgetId, setViewExpenseModalBudgetId] = useState();
    const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState();
    const { budgets, expenses, getBudgetExpense } = useBudgets();

    function openAddExpenseModal(budgetId) {
        setShowAddExpenseModal(true);
        setAddExpenseModalBudgetId(budgetId);
    }

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
                        let expensesForBudget = getBudgetExpense(budget.id);
                        const sumOfExpesesAmount = expensesForBudget.reduce((total, expense) => total + expense.amount, 0);
                        return (<BudgetCard
                            key={budget.id}
                            name={budget.name}
                            amount={sumOfExpesesAmount}
                            max={budget.max}
                            onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                            onViewExpensesClick={() => setViewExpenseModalBudgetId(budget.id)}
                        >
                        </BudgetCard>
                        )
                    })
                }
                <UncatrgorizedBudgetCard
                    onAddExpenseClick={() => openAddExpenseModal(UNCATEGORIZED_BUDGET_ID)}
                    onViewExpensesClick={() => setViewExpenseModalBudgetId(UNCATEGORIZED_BUDGET_ID)}
                />
                <TotalBudgetCard />

            </Container>
            <AddBudgetModal
                show={showAddBudgetModal}
                handleClose={() => setShowAddBudgetModal(false)}
            />
            <AddExpenseModal
                show={showAddExpenseModal}
                defaultBudgetId={addExpenseModalBudgetId}
                handleClose={() => setShowAddExpenseModal(false)}
            />
            <ViewExpensesModal
                budgetId={viewExpenseModalBudgetId}
                handleClose={() => setViewExpenseModalBudgetId()}
            />
        </>
    );
}

export default Home;