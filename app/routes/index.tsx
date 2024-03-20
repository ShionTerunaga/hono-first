import { createRoute } from "honox/factory"
import { Top } from "../view/top"

export default createRoute((c) => {
    const name = "Hono Sample App"

    return c.render(<Top name={name} />, { title: name })
})
