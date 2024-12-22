import React from 'react'
import styles from './Cards.module.css'

const Card = ({ imgSrc, name, features, price }) => {
    return (
        <>
            <div className={styles.Cards}>
                <div className={styles.card}>
                    <div className={styles.left}>
                        <h3 className={styles.title}>{name}</h3>
                        <p className={styles.features}>{features}</p>
                        <h4 className={styles.price}>Rs {price}</h4>
                    </div>
                    <div className={styles.right}>
                        <img src={imgSrc} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card