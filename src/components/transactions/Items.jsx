import styles from './Transaction.module.css'
import PropTypes from 'prop-types';

function Items({ items }) {
    function isOdd(num) {
        let number = num % 2;
        return (number === 0 ? 'white' : 'rgb(232, 233, 233)')
        // if (number === 0) {
        //     return 'white'
        // }
        // return 'rgb(232, 233, 233)'
    };

    return (
        items.map((transaction, index) => (
            !!transaction.id && <tr key={transaction.id} style={{ backgroundColor: isOdd(index) }}>
                <td className={styles.td}>{transaction.type}</td>
                <td className={styles.td}>{transaction.amount}</td>
                <td className={styles.td}>{transaction.currency}</td>
            </tr>
        ))
    )
}


Items.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    })).isRequired,
}



export default Items;