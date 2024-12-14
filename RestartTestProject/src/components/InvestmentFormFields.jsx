import { useState } from "react"

export default function InvestmentFormFields({ label, initialValue, onInput, id }) {
    const [value,setValue] = useState(initialValue)

    function handleChange(e) {
        const newValue = e.target.value
        setValue(newValue)
        onInput(id, newValue)
    }

    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type="number" id={id} min="0" onChange={handleChange} value={value} />
        </div>
    )
}