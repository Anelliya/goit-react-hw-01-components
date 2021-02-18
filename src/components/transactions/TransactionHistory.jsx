import styles from './Transaction.module.css'
import PropTypes from 'prop-types';
import Items from './Items'


const TransactionHistory = ({ items }) => {

    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.thead}>
                <tr className={styles.tr}>
                    <th className={styles.th}>Type</th>
                    <th className={styles.th}>Amount</th>
                    <th className={styles.th}>Currency</th>
                </tr>
            </thead>

            <tbody>
                < Items items={items} />
            </tbody>
        </table >
    )
}

TransactionHistory.protoType = {
    items: PropTypes.array.isRequired,
}

TransactionHistory.defaultProps = {
    items: [],
}


export default TransactionHistory;