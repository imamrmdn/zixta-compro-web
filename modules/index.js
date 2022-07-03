import { FormattedMessage } from "react-intl";

// import styles from '../styles/Home.module.css'
import styles from 'styles/Home.module.css'

export default function HomePage() {
    return (
        <>
            <p className={styles.description}>
                <FormattedMessage id="home.get.start" />
                <code className={styles.code}>pages/index.js</code>
            </p>
        </>
    )
}
