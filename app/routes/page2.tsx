import { createRoute } from "honox/factory"
import { useEffect, useState } from "hono/jsx"
import { HPType, characters } from "../model"
import { Page2 } from "../view/page2"

export default createRoute(async (c) => {
    const name = "page2"
    const fetcher = await characters()

    return c.render(<Page2 data={fetcher} />, { title: name })
})
