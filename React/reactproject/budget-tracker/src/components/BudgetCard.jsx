import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utilities/util"

function BudgetCard({ name, amount, max, gray, hideButtons, onAddExpenseClick }) {

    const titleStyle = "d-flex justify-content-between align-items-baseline fw-normal mb-3";

    const classNames = ["mb-3"];
    if (amount > max) {
        classNames.push("bg-danger", "bg-opacity-10");
    } else if (gray) {
        classNames.push("bg-light");
    }
    return (
        <Card className={classNames.join(" ")}>
            <Card.Body>
                <Card.Title className={titleStyle}>
                    <div className="me-2">{name}</div>
                    <div className="d-flex align-items-baseline">
                        {currencyFormatter.format(amount)}
                        {max && <span className="text-muted fs-6 ms-1">
                            / {currencyFormatter.format(max)}
                        </span>}
                    </div>
                </Card.Title>
                <ProgressBar className="rounded-pill"
                    variant={getProgressbarVariant(amount, max)}
                    min={0}
                    max={max}
                    now={amount} /> 
                {
                    !hideButtons && <Stack direction="horizontal" gap="2" className="mt-4">
                        <Button variant="outline-primary" className="ms-auto" onClick={onAddExpenseClick}>Add Expnese</Button>
                        <Button>View Expneses</Button>
                    </Stack>
                }

            </Card.Body>
        </Card>
    );
}

export default BudgetCard;


function getProgressbarVariant(amount, max) {
    const ratio = amount / max;
    if (ratio < 0.5) {
        return "primary";
    }
    else if (ratio < 0.75) {
        return "warning";
    }
    else {
        return "danger";
    }
}