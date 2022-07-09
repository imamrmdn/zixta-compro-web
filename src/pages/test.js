import { useRouter } from "next/router";

import TestPage from "src/components/test";

import styles from 'styles/Home.module.css'

export default function Test() {
    const { locales } = useRouter();

    console.log(locales, 'locale')

    return (
        <div className={styles.container}>
            <TestPage />
        </div>
    )
}
