import React, { useContext, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

const BudgetsContext = React.createContext();

export function useBudgets() {
    return useContext(BudgetsContext);
}


// Budget Object
// {
//     id:,
//     name:,
//     max
// }

// Expense Object
// {
//     id:
//     budgetId:,
//     amount:,
//     description:
// }


export const BudgetsProvider = ({ children }) => {

    const [budgets, setBudgets] = useLocalStorage("budgets", []);
    const [expenses, setExpenses] = useLocalStorage("expenses", []);

    function getBudgetExpense(budgetId) {
        return expenses.filter(expense => expense.budgetId == budgetId);
    }
    function addBudget({ name, max }) {
        setBudgets(prevBudgets => {
            //To Avoid duplicates
            if (prevBudgets.find(budget => budget.name == name)) {
                return prevBudgets;
            }
            return [...prevBudgets, { id: uuidV4(), name, max }]
        })
    }
    function addExpense({ description, amount, budgetId }) {
        setExpenses(prevExpenses => {
            return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }]
        })
    }

    function deleteBudget({ id }) {
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    } 

    function deleteExpense({ id }) {
        //TODO: Deal with expenses
        setBudgets(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        })
    }

    return <BudgetsContext.Provider value={{
        budgets,
        expenses,
        getBudgetExpense,
        addExpense,
        addBudget,
        deleteExpense,
        deleteBudget
    }}>
        {children}
    </BudgetsContext.Provider>;
}