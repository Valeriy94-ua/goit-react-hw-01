import TransactionItem from "./TransactionItem"
import css from "./TransactionHistory.module.css"
// import React from 'react';

export function TransactionHistory ({item})  {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>

            </thead>
            <tbody className={css.container}>
                {item.map(transaction => (
                <TransactionItem key={transaction.id} {...transaction}/>
                    ))}
            </tbody>

        </table>

    )
        
}
export default TransactionHistory;