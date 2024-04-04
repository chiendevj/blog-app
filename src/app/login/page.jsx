import styles from "./login.module.css";

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.socialButton}>Sign up with Google</div>
                <div className={styles.socialButton}>Sign up with Github</div>
                <div className={styles.socialButton}>Sign up with Facebook</div>
            </div>
        </div>
    )
}

export default Login