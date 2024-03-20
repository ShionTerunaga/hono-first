import { createRoute } from "honox/factory"
import { Page1 } from "../view/page1"

export default createRoute((c) => {
    const name = "page1"

    return c.render(<Page1 name={name} />, { title: name })
})
