import Menu from "@/components/menu/Menu";
import Comment from "@/components/comment/Comment";
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
                <div className={styles.postContainer}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eligendi, placeat totam a culpa at ut cupiditate nobis dolores reprehenderit nihil optio eveniet magnam quibusdam. Aut ex similique ad qui.
                        </p>    
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eligendi, placeat totam a culpa at ut cupiditate nobis dolores reprehenderit nihil optio eveniet magnam quibusdam. Aut ex similique ad qui.
                        </p>
                    </div>
                    <div className={styles.comment}>
                    <Comment/>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage