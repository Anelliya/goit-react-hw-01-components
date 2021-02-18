import styles from './Profile.module.css'
import PropTypes from 'prop-types';
import Stats from './Stats';


const defaultImg =
    'https://media.istockphoto.com/vectors/smile-vector-template-design-vector-id988112594?k=6&m=988112594&s=170667a&w=0&h=zy2D23dg7Hfz-A5pvz2BMiHi6Og2ed-DCldz367yvf0=';

const Profile = ({ avatar, name, tag, location, stats }) => {

    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <Stats {...stats} />
        </div >
    )
}

Profile.defaultProps = {
    avatar: defaultImg,
    name: 'Вася Тряпочкин',
    location: 'from nowhere',
};


Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    tag: PropTypes.string,
    stats: PropTypes.object,
};

export default Profile;