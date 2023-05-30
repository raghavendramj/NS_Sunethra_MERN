import React from 'react'
import BudgetCard from './BudgetCard'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetsContext'

export default function UncatrgorizedBudgetCard(props) {

    const { getBudgetExpense } = useBudgets();
    const uncatBudgetExpenses = getBudgetExpense(UNCATEGORIZED_BUDGET_ID);
    const uncatBudgetExpensesAmt = uncatBudgetExpenses.reduce((total, expense) => total + expense.amount, 0);

    if (uncatBudgetExpensesAmt == 0)
        return null;

    return (
        <BudgetCard name="Uncategorized" amount={uncatBudgetExpensesAmt} gray {...props} />
    )
}
