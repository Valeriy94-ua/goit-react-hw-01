import css from "./TransactionHistory.module.css"

export function TransactionItem ({type, amount, currency}) {
    return (
        <tr className={css.table}>
            <td className={css.table}>{type}</td>
            <td className={css.table}>{amount}</td>
            <td className={css.table}>{currency}</td>
         </tr>
    )
}
export default TransactionItem;