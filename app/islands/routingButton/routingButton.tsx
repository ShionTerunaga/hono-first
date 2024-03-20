import { routingData } from "./routingButton.data"
import styles from "./styles.css"

export const RoutingButton = () => {
    return (
        <div class={styles.container}>
            <div class={styles.linkBox}>
                {routingData.map((item, index) => (
                    <a href={item.link} key={index}>
                        <button class={styles.button}>{item.pageName}</button>
                    </a>
                ))}
            </div>
        </div>
    )
}
