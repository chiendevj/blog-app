"use client"
import React, { useState } from "react";
import styles from './authLinks.module.css'
import Link from "next/link";
const AuthLinks = () => {

    const [open, setOpen] = useState(false);


    const status = 'notauthenticated';
    return (
        <>
            {status === 'notauthenticated' ? (
                <Link href={'/login'}>Login</Link>) : (
                <>
                    <Link href={'/write'}>Write</Link>
                    <Link href={'#'} className={styles.link}>Logout</Link>
                </>)
            }
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div href={'#'} className={styles.line}></div>
                <div href={'#'} className={styles.line}></div>
                <div href={'#'} className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href={'#'} className={styles.link}>Homepage</Link>
                    <Link href={'#'} className={styles.link}>Contact</Link>
                    <Link href={'#'} className={styles.link}>About</Link>
                </div>
            )}
        </>
    );
}

export default AuthLinks