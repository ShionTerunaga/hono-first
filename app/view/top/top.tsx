import { RoutingButton } from "../../islands/routingButton"
import styles from "./style.css"

interface props {
    name: string
}

export const Top = (props: props) => {
    return (
        <div class={styles.container}>
            <h1>{props.name}!</h1>
            <RoutingButton />
        </div>
    )
}
