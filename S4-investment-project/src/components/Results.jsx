import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {
    const finalResults = calculateInvestmentResults(input);
    const initialInvestment = input.initialInvestment;
    
    console.log(finalResults);

    return (
        <div className="">
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (years)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {finalResults.map(yearData => {
                        const totalAmtInvested = yearData.valueEndOfYear - yearData.totalInterest;
                        const totalInterest = yearData.valueEndOfYear - totalAmtInvested;

                        return (
                            <tr key={yearData.year}>
                                <td>{yearData.year}</td>
                                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                <td>{formatter.format(yearData.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmtInvested)}</td>
                            </tr>  
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}