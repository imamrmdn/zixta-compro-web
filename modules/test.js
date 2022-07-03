import { FormattedMessage } from "react-intl";

// import styles from '../styles/Home.module.css'
import styles from 'styles/Home.module.css'

export default function TestPage() {
    return (
        <>
            <main className={styles.main}>
                <p className={styles.description}>
                    <FormattedMessage id="home.get.start" />
                    <code className={styles.code}>test</code>
                </p>
            </main>
        </>
    )
}
