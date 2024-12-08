import { useState } from "react";
import InvestmentFormFields from "./InvestmentFormFields";

export default function InvestmentForm() {
    const [formDetails, setFormDetails] = useState({
        initialInvestment: 1000,
        annualInvestment: 100,
        expectedReturn: 6,
        duration: 5
    })

    function formChangeHandler(target, value) {
        setFormDetails((prev) => {
            return {
                ...prev,
                [target]: value
            }
        })
    }

    return (
        <div>
            <section id="user-input">
                <div className="input-group">
                    <InvestmentFormFields label="Initial Investment" initialValue={formDetails.initialInvestment} onInput={formChangeHandler}/>
                    <InvestmentFormFields label="Annual Investment" initialValue={formDetails.annualInvestment} onInput={formChangeHandler}/>
                </div>
                <br />
                <div className="input-group">
                    <InvestmentFormFields label="Expected Return" initialValue={formDetails.expectedReturn} onInput={formChangeHandler}/>
                    <InvestmentFormFields label="Duration" initialValue={formDetails.duration} onInput={formChangeHandler}/>
                </div>
            </section>
        </div>
    )
}