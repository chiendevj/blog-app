import React from "react";
import styles from './featured.module.css'
import Image from "next/image";
const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey! Hello lamaDev! </b>Lorem ipsum dolor sit amet consectetur adipisicing elit!
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src={'/p1.jpeg'} alt={'culture'} fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>
                    <p lassName={styles.postDescription}>
                        Quam vero, eveniet voluptates delectus amet pariatur quas mollitia deserunt maiores suscipit odio inventore dolores sit maxime quod. Hic eveniet illum quod.
                    </p>
                    <button className={styles.btnReadMore}>Read More</button>
                </div>
            </div>
        </div>
    );
}

export default Featured