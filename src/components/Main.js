import React from 'react'
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import styles from './Main.module.css'
export default function Main() {

    return (
        <div className={styles.container}>
            <HeadphonesOutlinedIcon sx={{fontSize: 60}} />
            <h1>Correct Your Musics Tags</h1>
        </div>
    )
}
