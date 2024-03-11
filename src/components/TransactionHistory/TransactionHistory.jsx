import TransactionItems from "./TransactionItems"
import css from "./TransactionHistory.module.css"
// import React from 'react';

export function TransactionHistory ({item})  {
    return (
        <table className={css.table}>
            <thead >
                <tr className={css.table}>
                    <th className={css.table}>Type</th>
                    <th className={css.table}>Amount</th>
                    <th className={css.table}>Currency</th>
                </tr>

            </thead>
            <tbody className={css.table}>
                {item .map(transaction => (
                <TransactionItems key={transaction.id} {...transaction}/>
                    ))}
            </tbody>

        </table>

    )
        
}
export default TransactionHistory;