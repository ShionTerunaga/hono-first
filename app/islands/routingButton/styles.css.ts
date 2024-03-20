import { css } from "hono/css"

const styles = {
    container: css`
        width: 100%;
        display: flex;
        justify-content: center;
    `,
    linkBox: css`
        width: 200px;
    `,
    button: css`
        width: 200px;
        border: 1.5px solid red;
        background-color: white;
        border-radius: 10px;
        height: 50px;
        font-size: 20px;
        &:active {
            background-color: rgba(0, 0, 0, 0.16);
        }
    `,
}

export default styles
