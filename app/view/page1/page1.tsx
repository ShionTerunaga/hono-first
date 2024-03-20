import styles from "./style.css"

interface props {
    name: string
}

export const Page1 = (props: props) => {
    return (
        <div class={styles.container}>
            <h1>Hello {props.name}!</h1>
            <p>これは最初のページです。</p>
        </div>
    )
}
