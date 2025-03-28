import { useState, useEffect } from "react";
import InvestmentFormFields from "./InvestmentFormFields";
import Result from "./Result";
import { calculateInvestmentResults } from "../util/investment";

export default function InvestmentForm() {
    const [formDetails, setFormDetails] = useState({
        initialInvestment: 1000,
        annualInvestment: 100,
        expectedReturn: 6,
        duration: 5
    })
    const [annualData, setAnnualData] = useState([]);

    const validDuration = formDetails.duration >= 1;

    function formChangeHandler(target, value) {
        setFormDetails((prev) => {
            return {
                ...prev,
                [target]: value
            }
        })
    }

    useEffect(() => {
        setAnnualData(calculateInvestmentResults(formDetails))
    }, [formDetails]);


    return (
        <div>
            <section id="user-input">
                <div className="input-group">
                    <InvestmentFormFields label="Initial Investment" id="initialInvestment" initialValue={formDetails.initialInvestment} onInput={formChangeHandler}/>
                    <InvestmentFormFields label="Annual Investment" id="annualInvestment" initialValue={formDetails.annualInvestment} onInput={formChangeHandler}/>
                </div>
                <br />
                <div className="input-group">
                    <InvestmentFormFields label="Expected Return" id="expectedReturn" initialValue={formDetails.expectedReturn} onInput={formChangeHandler}/>
                    <InvestmentFormFields label="Duration" id="duration" initialValue={formDetails.duration} onInput={formChangeHandler}/>
                </div>
            </section>
            {validDuration && <Result data={annualData} />}
            {!validDuration && <p className="center">Please enter a duration greater than 0.</p>}
        </div>
    )
}