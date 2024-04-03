import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";

const SinglePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                    <div className={styles.info}>
                        <Image src={'/p1.jpeg'} width={40} height={40} className={styles.image} />
                        <p className={styles.infoUser}>
                            <span className={styles.username}>ChienDevj</span>
                            <span className={styles.time}>2024-04-03</span>
                        </p>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={'/p1.jpeg'} fill className={styles.image} />
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.commentContainer}>
                    <div className={styles.commentDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eligendi, placeat totam a culpa at ut cupiditate nobis dolores reprehenderit nihil optio eveniet magnam quibusdam. Aut ex similique ad qui.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id explicabo minus rem, voluptatum corrupti doloribus qui quidem, facilis voluptas, magnam natus distinctio. Dolore mollitia quia sequi dignissimos quo! Sit, mollitia?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum fugiat iure perferendis odit, a harum eligendi quas praesentium asperiores adipisci ab numquam reprehenderit corrupti quae delectus explicabo, iusto natus repellat?
                    </div>
                    <div className={styles.commentEditor}>
                        <h2 className={styles.commentTitle}>
                            Comments
                        </h2>
                        <form action="#" className={styles.boxComment}>
                            <textarea name="" className={styles.inputComment}></textarea>
                            <button type="submit" className={styles.btnComment}>Send</button>
                        </form>
                    </div>
                    <div className={styles.comments}>
                        <div className={styles.comment}>
                            <div className={styles.info}>
                                <Image src={'/p1.jpeg'} width={40} height={40} className={styles.image} />
                                <p className={styles.infoUser}>
                                    <span className={styles.username}>ChienDevj</span>
                                    <span className={styles.time}>2024-04-03</span>
                                </p>
                            </div>
                            <p className={styles.commentContent}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum accusantium id nam consectetur sint. Aut, eius. Tenetur similique pariatur magnam, tempora aliquam ut ducimus facilis temporibus quibusdam nemo voluptatum vitae!</p>
                        </div>

                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage