import { FaRegStar } from "react-icons/fa";

export const Stars = ({max, rating}: {max: number, rating: number}) => {

    return (
        <div>
            <FaRegStar/>
            {max}
            {rating}
        </div>
    );
}