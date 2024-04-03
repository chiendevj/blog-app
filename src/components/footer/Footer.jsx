import React from "react";
import styles from './footer.module.css'
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.contact}>
                <div className={styles.info}>
                    <Image className={styles.image} src={'/style.png'} width={50} height={50}/>
                    <div className={styles.username}>Chiendevj</div>
                </div>
                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio voluptatem praesentium, fuga eius quod adipisci sed dolores, asperiores, vel temporibus aperiam. Ex minus aliquam expedita eius officiis vero voluptatum?
                </p>
                <div className={styles.social}>
                    <Image src="/facebook.png" alt="facebook" width={24} height={24} />
                    <Image src="/instagram.png" alt="instagram" width={24} height={24} />
                    <Image src="/youtube.png" alt="youtube" width={24} height={24} />
                    <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />

                </div>
            </div>
            <div className={styles.tagList}>
                <div className={styles.tag}>
                    <span>Links</span>
                    <Link href={'#'}>Homepage</Link>
                    <Link href={'#'}>Blog</Link>
                    <Link href={'#'}>About</Link>
                    <Link href={'#'}>Contact</Link>
                </div>
                <div className={styles.tag}>
                    <span>Tags</span>
                    <Link href={'#'}>Style</Link>
                    <Link href={'#'}>Fashion</Link>
                    <Link href={'#'}>Coding</Link>
                    <Link href={'#'}>Travel</Link>
                </div>
                <div className={styles.tag}>
                    <span>Socials</span>
                    <Link href={'#'}>Facebook</Link>
                    <Link href={'#'}>Instagram</Link>
                    <Link href={'#'}>Tiktok</Link>
                    <Link href={'#'}>Youtube</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer