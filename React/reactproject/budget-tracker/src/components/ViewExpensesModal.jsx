import React from 'react'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetsContext'
import { Button, Modal, Stack } from 'react-bootstrap';

export default function ViewExpensesModal({ budgetId, handleClose }) {
  console.log("budgetId -> ", budgetId);
  const { getBudgetExpense, budgets, deleteBudget, deleteExpense } = useBudgets();

  const budget = UNCATEGORIZED_BUDGET_ID === budgetId
    ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
    : budgets.find(b => b.id === budgetId);

  console.log("budget -> ", budget);

  return (
    <Modal show={budgetId != null || budgetId === "undefined"} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack direction="horizantal" gap="2">
            <div>Expenses - {budget?.name}</div>
            {budgetId != UNCATEGORIZED_BUDGET_ID &&
              <Button onClick={() => {
                deleteBudget(budgetId);
                handleClose();
              }} variant='outline-danger'>Delete</Button>
            }
          </Stack>
        </Modal.Title>
      </Modal.Header>
    </Modal>
  )
}
