import React, { useContext } from 'react';
import { v4 as uuidV4 } from 'uuid'; //get random id..
import useLocalStorage from '../hooks/useLocalStorage';

const BudgetsContext = React.createContext();
export const UNCATEGORIZED_BUDGET_ID = "Uncategorized";

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
        const filteredExpeses = expenses.filter(expense => expense.budgetId == budgetId);
        //console.log("budgetId :- ", budgetId, "filteredExpeses :- ", filteredExpeses);
        return filteredExpeses;
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
        setExpenses(prevExpenses => {
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