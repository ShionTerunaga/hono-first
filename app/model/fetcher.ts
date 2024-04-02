import { HPType } from "./types"

export const characters = async (): Promise<HPType[]> => {
    const res = await fetch(
        "https://potterapi-fedeperin.vercel.app/es/characters",
    )

    const resData = (await res.json()) as HPType[]

    const data = resData.filter((item) => item.image !== "")

    return data
}
