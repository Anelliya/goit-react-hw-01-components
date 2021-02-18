import styles from './Friends.module.css'
import greenDot from '../image/online.png'
import redDot from '../image/offline.png'


const defaultImg =
    'https://media.istockphoto.com/vectors/smile-vector-template-design-vector-id988112594?k=6&m=988112594&s=170667a&w=0&h=zy2D23dg7Hfz-A5pvz2BMiHi6Og2ed-DCldz367yvf0=';


const Friend = ({ friends }) => {
    return (
        friends.map(({ id, isOnline, avatar, name }) => (
            <li className={styles.item} key={id}>
                <span className={styles.status}>
                    {isOnline
                        ? <img src={greenDot} width="15px" alt="online pic" />
                        : <img src={redDot} width="15px" alt="offline pic" />}</span>
                {!!avatar
                    ? <img className={styles.avatar} src={avatar} alt="pic" width="70px" />
                    : <img className={styles.avatar} src={defaultImg} alt="pic" width="70px" />}
                <p className={styles.name}>{!!name ? name : 'Your friend'}</p>
            </li>))
    )
}


Friend.defaultProps = {
    friends: [],
}

export default Friend;