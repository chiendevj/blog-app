import React from "react";
import styles from './categoriesList.module.css'
import Link from "next/link";
import Image from "next/image";
const CategoriesList = () => {
    return (
        <div className={styles.container}> 
            <h2 className={styles.cateTitle}>Popular Categories</h2>
            <div className={styles.categories}>

                <Link href={'blog?cat=style'} className={`${styles.category} ${styles.style}`}>
                    <Image className={styles.image} src={'/style.png'} width={32} height={32} alt={'style'}/>
                    Style
                </Link>
                <Link href={'blog?cat=style'} className={`${styles.category} ${styles.fashion}`}>
                    <Image className={styles.image} src={'/fashion.png'} width={32} height={32} alt={'fashion'}/>
                    Fashion
                </Link>
                <Link href={'blog?cat=style'} className={`${styles.category} ${styles.food}`}>
                    <Image className={styles.image} src={'/food.png'} width={32} height={32} alt={'food'}/>
                    Food
                </Link>
                <Link href={'blog?cat=style'} className={`${styles.category} ${styles.travel}`}>
                    <Image className={styles.image} src={'/travel.png'} width={32} height={32} alt={'travel'}/>
                    Travel
                </Link>
                <Link href={'blog?cat=style'} className={`${styles.category} ${styles.culture}`}>
                    <Image className={styles.image} src={'/culture.png'} width={32} height={32} alt={'culture'}/>
                    Culture
                </Link>
                <Link href={'blog?cat=style'} className={`${styles.category} ${styles.coding}`}>
                    <Image className={styles.image} src={'/coding.png'} width={32} height={32} alt={'coding'}/>
                    Coding
                </Link>
        
            </div>
        </div>
    );
}

export default CategoriesList