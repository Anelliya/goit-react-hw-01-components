import styles from './Profile.module.css'
import PropTypes from 'prop-types';


function Stats({ followers, views, likes }) {
    return (
        <ul className={styles.stats}>
            <li className={styles.list}>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{followers}</span>
            </li>
            <li className={styles.list} >
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{views}</span>
            </li>
            <li className={styles.list}>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{likes}</span>
            </li>
        </ul>
    )
}


Stats.defaultProps = {
    followers: 0,
    views: 0,
    likes: 0,
};


Stats.protTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number,
    likes: PropTypes.number,
}

export default Stats;