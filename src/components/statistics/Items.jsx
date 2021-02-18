import PropTypes from 'prop-types';
import styles from './Statistic.module.css';


let backgroundColor = () =>
    `rgb(${Math.random() * 255},${Math.random() * 255}, ${Math.random() * 255})`;

const Items = ({ statistics }) => {
    return (
        statistics.map(({ id, label, percentage = 0 }) => (
            label && < li className={styles.item} key={id} style={{ backgroundColor: backgroundColor() }}>
                <span className={styles.label}>{label}</span>
                <span className={styles.percentage}>{percentage}%</span>
            </li >
        ))
    )
}

Items.propTypes = {
    statistic: PropTypes.objectOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}

export default Items;