import Counter from "../../islands/counter"
import styles from "./style.css"

interface props {
    name: string
}

export const Top = (props: props) => {
    return (
        <div class={styles.container}>
            <h1>Hello, {props.name}!</h1>
            <Counter />
        </div>
    )
}
