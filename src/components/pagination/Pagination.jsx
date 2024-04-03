import React from "react";
import styles from './pagination.module.css'
const Pagination = () => {
    return (
        <div className={styles.container}>
            <button className={styles.btnPrev}>Prev</button>
            <button className={styles.btnNext}>Next</button>
        </div>
    );
}
export default Pagination