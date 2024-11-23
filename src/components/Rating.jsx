import { FaStar } from "react-icons/fa"

function Rating(props){
    const stars=Array(5).fill(0)
    const colors = {
        orange: "#ff8c00",
        grey: "a9a9a9"
    }
return(
   
    <>
    {stars.map((no,i)=>(
        <FaStar  key={i}
        color={props.rating>i?colors.orange:colors.grey}
        ></FaStar>

    ))}
    </>
)
}

export default  Rating