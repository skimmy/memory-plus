'use client';
import styles from './card.module.scss'

export default function Card(props) {
    return(
        <div 
            className={styles.card}
            onClick={e => props.handleClick()}
            style={{
                width: (props && props.width),
                height: (props && props.height)
            }}>
            <div className={`${styles.inner} ${props.flipped ? styles.flipped : ''}`}>
                <div className={styles.front}>
                    {props.children}
                </div>
                <div className={styles.back}>
                    M+
                </div>
            </div>
        </div>
        );
}