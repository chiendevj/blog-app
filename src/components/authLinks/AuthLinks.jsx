"use client"
import React, { useState } from "react";
import styles from './authLinks.module.css'
import Link from "next/link";
import { signOut } from "next-auth/react";
const AuthLinks = () => {

    const [open, setOpen] = useState(false);


    let status = 'authenticated';
    return (
        <>
            {
                status === 'authenticated'
                    ? (<Link href={'/login'} >Login</Link>)
                    : (
                        <>
                            <Link href={'/write'}>Write</Link>
                            <span className={styles.link} onClick={signOut}>Logout</span>
                        </>
                        
                    )
                
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