import { useState } from "react"

export default function InvestmentFormFields({ label, initialValue, onInput }) {
    const [value,setValue] = useState(initialValue)

    function handleChange(e) {
        setValue(e.target.value)
        onInput(label, e.target.value)
    }

    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type="number" id={label} min="0" onChange={handleChange} value={value} />
        </div>
    )
}