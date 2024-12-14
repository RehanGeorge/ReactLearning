import { formatter } from "../util/investment";

export default function Result({ data }) {
    
    let totalInterest = 0;
    
    for (let i = 0; i < data.length; i++) {
        totalInterest += data[i].interest;
        data[i].totalInterest = totalInterest;
        data[i].investedCapital = data[i].valueEndOfYear - data[i].totalInterest;
    }

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(item.totalInterest)}</td>
                            <td>{formatter.format(item.investedCapital)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}