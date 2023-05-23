import { Card, ProgressBar } from "react-bootstrap";
import { currencyFormatter } from "../utilities/util"

function BudgetCard({ name, amount, max }) {

    const titleStyle = "d-flex justify-content-between align-items-baseline fw-normal mb-3";
    return (
        <Card>
            <Card.Body>
                <Card.Title className={titleStyle}>
                    <div className="me-2">{name}</div>
                    <div className="d-flex align-items-baseline">
                        {currencyFormatter.format(amount)}
                        / <span className="text-muted fs-6 ms-1">{currencyFormatter.format(max)}</span></div>
                </Card.Title>
                <ProgressBar className="rounded-pill"
                    variant={getProgressbarVariant(amount, max)}
                    min={0}
                    max={max}
                    now={amount} />
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