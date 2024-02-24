export function TransactionItem ({type, amount, currency}) {
    return (
        <tr>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
        </tr>
    )
}
export default TransactionItem;