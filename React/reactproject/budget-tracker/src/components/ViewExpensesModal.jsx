import React from 'react'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetsContext'
import { Button, Modal, Stack } from 'react-bootstrap';
import { currencyFormatter } from "../utilities/util"

export default function ViewExpensesModal({ budgetId, handleClose }) { 
  const { getBudgetExpense, budgets, expenses, deleteBudget, deleteExpense } = useBudgets();

  console.log("expenses :-", expenses);
  const budgetExpenses = expenses.filter(expense => expense.budgetId == budgetId);
  console.log("budgetId :-", budgetId, "budgetExpenses :-", budgetExpenses);

  const budget = UNCATEGORIZED_BUDGET_ID === budgetId
    ? { name: "Uncategorized", id: UNCATEGORIZED_BUDGET_ID }
    : budgets.find(b => b.id === budgetId); 

  return (
    <Modal show={budgetId != null || budgetId === "undefined"} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Stack direction="horizontal" gap="2">
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
      <Modal.Body>
        <Stack direction='vertical' gap='3'>
          {budgetExpenses.map(eachExpense => {
            return <Stack direction='horizontal' gap='2' key={eachExpense.id}>
              <div className="me-auto fs-4">{eachExpense.description}</div>
              <div className="fs-5">{currencyFormatter.format(eachExpense.amount)}</div>
            </Stack>
          })}
        </Stack>
      </Modal.Body>
    </Modal>
  )
}
