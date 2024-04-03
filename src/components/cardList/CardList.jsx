import React from "react";
import styles from './cardList.module.css'
import Image from "next/image";
import Pagination from "../pagination/Pagination";
const CardList = () => {
    return (
        <>
            <div className={`${styles.container} ${styles.cardlist}`}>
                <h2 className={styles.titlePosts}>Popular Posts</h2>
                <div className={styles.posts}>
                    <div className={styles.post}>
                        <div className={styles.imagePost}>
                            <Image className={styles.image} src={'/culture.png'} alt={'post'} fill />
                        </div>
                        <div className={styles.contentPost}>
                            <h3 className={styles.titlePost}>Post 1</h3>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias illum architecto rerum deserunt aperiam impedit esse. Odit similique libero vitae numquam, molestiae id assumenda deserunt ad necessitatibus. Inventore, tenetur incidunt.
                            </p>
                        </div>
                    </div>
                    
                    <div className={styles.post}>
                        <div className={styles.imagePost}>
                            <Image className={styles.image} src={'/culture.png'} alt={'post'} fill />
                        </div>
                        <div className={styles.contentPost}>
                            <h3 className={styles.titlePost}>Post 1</h3>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias illum architecto rerum deserunt aperiam impedit esse. Odit similique libero vitae numquam, molestiae id assumenda deserunt ad necessitatibus. Inventore, tenetur incidunt.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <Pagination />
            </div>
        </>
    );
}

export default CardList