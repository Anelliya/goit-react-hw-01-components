import styles from './Statistic.module.css';
import PropTypes from 'prop-types';
import Items from './Items'

const Statistics = ({ statistics, title }) => {

    return (
        <section className={styles.statistics}>
            { !!title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.stat_list}>
                <Items statistics={statistics} />
            </ul>
        </section >
    )
}

Statistics.defaultProps = {
    title: '',
    statistics: [],
}

Statistics.propTypes = {
    title: PropTypes.string,
    statistics: PropTypes.array.isRequired,
};

export default Statistics;