import React from "react";
import styles from './comment.module.css'
import Image from "next/image";
import Link from "next/link";
const status = 'notauthenticated';
const Comment = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Comments
            </h2>
            {status === 'authenticated' ? (
                <div className={styles.write}>
                    <textarea name="" className={styles.input} placeholder="write your comment .." />
                    <button type="submit" className={styles.btn}>Send</button>
                </div>
            ) : (
                <Link href={'/login'} className={styles.login}>Login to write comment</Link>
            )}

            <div className={styles.comments}>
                <div className={styles.comment}>
                    <div className={styles.info}>
                        <Image src={'/p1.jpeg'} width={40} height={40} className={styles.image} />
                        <p className={styles.infoUser}>
                            <span className={styles.username}>ChienDevj</span>
                            <span className={styles.time}>2024-04-03</span>
                        </p>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium id nam consectetur sint. Aut, eius. Tenetur similique pariatur magnam, tempora aliquam ut ducimus facilis temporibus quibusdam nemo voluptatum vitae!
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.info}>
                        <Image src={'/p1.jpeg'} width={40} height={40} className={styles.image} />
                        <p className={styles.infoUser}>
                            <span className={styles.username}>ChienDevj</span>
                            <span className={styles.time}>2024-04-03</span>
                        </p>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium id nam consectetur sint. Aut, eius. Tenetur similique pariatur magnam, tempora aliquam ut ducimus facilis temporibus quibusdam nemo voluptatum vitae!
                    </p>
                </div>
                <div className={styles.comment}>
                    <div className={styles.info}>
                        <Image src={'/p1.jpeg'} width={40} height={40} className={styles.image} />
                        <p className={styles.infoUser}>
                            <span className={styles.username}>ChienDevj</span>
                            <span className={styles.time}>2024-04-03</span>
                        </p>
                    </div>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium id nam consectetur sint. Aut, eius. Tenetur similique pariatur magnam, tempora aliquam ut ducimus facilis temporibus quibusdam nemo voluptatum vitae!
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Comment