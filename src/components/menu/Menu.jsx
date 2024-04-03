import React from "react";
import styles from './menu.module.css'
import Image from "next/image";
import Link from "next/link";
const Menu = () => {
    return (
        <div className={`${styles.container}`}>
            <section className={styles.menu1}>
                <span className={styles.blink}>What's hot</span>
                <h3>Most popular</h3>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <span className={styles.namecate}>Travel</span>
                        <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className={styles.detail}>
                            <div className={styles.username}>Tran Trung Chien</div>
                            &#8226;
                            <div className={styles.time}>2024-04-03</div>
                        </p>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.namecate}>Travel</span>
                        <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className={styles.detail}>
                            <div className={styles.username}>Tran Trung Chien</div>
                            &#8226;
                            <div className={styles.time}>2024-04-03</div>
                        </p>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.namecate}>Travel</span>
                        <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p className={styles.detail}>
                            <div className={styles.username}>Tran Trung Chien</div>
                            &#8226;
                            <div className={styles.time}>2024-04-03</div>
                        </p>
                    </div>
                    
                    
                </div>
            </section>
            <section className={styles.menu2}>
                <span className={styles.blink}>Discover by topic</span>
                <h3>Categories</h3>
                <div className={styles.categories}>
                    <Link href={'#'} className={`${styles.category} ${styles.style}`}>Style</Link>
                    <Link href={'#'} className={`${styles.category} ${styles.fashion}`}>Fashion</Link>
                    <Link href={'#'} className={`${styles.category} ${styles.food}`}>Food</Link>
                    <Link href={'#'} className={`${styles.category} ${styles.travel}`}>Travel</Link>
                    <Link href={'#'} className={`${styles.category} ${styles.culture}`}>Culture</Link>
                    <Link href={'#'} className={`${styles.category} ${styles.coding}`}>Coding</Link>

                </div>
            </section>
            <section className={styles.menu3}>
                <span className={styles.blink}>Choosen by the editor</span>
                <h3>Editors Pick</h3>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <Image className={styles.image} src={'/p1.jpeg'} alt="" fill />
                        </div>
                        <div className={styles.postContent}>
                            <span className={styles.namecate}>Travel</span>
                            <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className={styles.detail}>
                                <div className={styles.username}>Tran Trung Chien</div>
                                &#8226;
                                <div className={styles.time}>2024-04-03</div>
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <Image className={styles.image} src={'/p1.jpeg'} alt="" fill />
                        </div>
                        <div className={styles.postContent}>
                            <span className={styles.namecate}>Travel</span>
                            <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className={styles.detail}>
                                <div className={styles.username}>Tran Trung Chien</div>
                                &#8226;
                                <div className={styles.time}>2024-04-03</div>
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <Image className={styles.image} src={'/p1.jpeg'} alt="" fill />
                        </div>
                        <div className={styles.postContent}>
                            <span className={styles.namecate}>Travel</span>
                            <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className={styles.detail}>
                                <div className={styles.username}>Tran Trung Chien</div>
                                &#8226;
                                <div className={styles.time}>2024-04-03</div>
                            </p>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.imgContainer}>
                            <Image className={styles.image} src={'/p1.jpeg'} alt="" fill />
                        </div>
                        <div className={styles.postContent}>
                            <span className={styles.namecate}>Travel</span>
                            <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className={styles.detail}>
                                <div className={styles.username}>Tran Trung Chien</div>
                                &#8226;
                                <div className={styles.time}>2024-04-03</div>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Menu