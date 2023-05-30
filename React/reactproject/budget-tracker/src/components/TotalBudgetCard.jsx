import React from 'react'
import { useBudgets } from '../contexts/BudgetsContext';
import BudgetCard from './BudgetCard';

export default function TotalBudgetCard(props) {
    const { expenses, budgets } = useBudgets();
    const expensesTotalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    const budgetsMax = budgets.reduce((total, budget) => total + budget.max, 0);

    if (budgetsMax === 0)
        return null; 
    return (
        <BudgetCard name="Total" amount={expensesTotalAmount} gray max={budgetsMax} hideButtons/>
    )
}
