import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./BudgetCard";

function Home() {

    let divStyle = {
        display: "grid",
        gap: "1rem",
        alignItems: "flex-start",
        gripTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
    }
    return (
        <Container className="my-4">
            <Stack direction="horizontal" gap="2" className="mb-4">
                <h1 className="me-auto">Budgets</h1>
                <Button variant="primary">Add Budget</Button>
                <Button variant="outline-primary">Add Expense</Button>
            </Stack>
            <div style={divStyle}></div>
            <BudgetCard name="Entertainment" amount={810} max={1000}>
            </BudgetCard>
            <BudgetCard name="Studies" amount={300} max={1000}>
            </BudgetCard>
        </Container>
    );
}

export default Home;