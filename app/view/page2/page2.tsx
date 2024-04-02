import { HPType } from "../../model"

interface props {
    data: HPType[]
}

export const Page2 = (props: props) => {
    return (
        <div>
            <h1>Harry potter</h1>
            {props.data.map((item, index) => (
                <div>
                    <img src={item.image} alt="" />
                    <p>{item.fullName}</p>
                </div>
            ))}
        </div>
    )
}
