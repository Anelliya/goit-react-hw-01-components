import styles from './Friends.module.css'
import PropTypes from 'prop-types';
import Friend from './Friend'



const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friend_list}>
            <Friend friends={friends} />
        </ul>
    )
}

FriendList.protoType = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,

    }))
}

FriendList.defaultProps = {
    friends: [],
}


export default FriendList;