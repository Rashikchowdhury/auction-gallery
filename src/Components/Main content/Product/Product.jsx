import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { toast } from 'react-toastify';


const Product = ({ product, addItemsOnClick }) => {
    const [liked, setLiked] = useState(false);
    const notify = () => toast.success(`"${product.name}" added to favourites!`, {
        position: "top-right",
        autoClose: 2000,
        style: {
            backgroundColor: "white",
            color: "gray",
            fontSize: "18px",
            borderRadius: "12px",
            padding: "12px 20px"
        }
    });

    const [disabled, setDisabled] = useState(false);

    const handleClicked = () => {
        setLiked(!liked);
        notify();
        setDisabled(!disabled);
        addItemsOnClick(product);
    }


    return (
        <div>
            <div className='mb-4 table'>
                <div className='flex items-center gap-6'>
                    <img src={product.img} alt="" className="object-cover w-[90px] h-[90px] rounded-xl" />
                    <p>{product.name}</p>
                </div>
                <div>
                    <p>{product.currentBid}</p>
                </div>
                <div>
                    <p>{product.timeLeft}</p>
                </div>
                <button disabled={disabled} className="w-fit disabled:cursor-not-allowed" onClick={handleClicked}>
                    {liked ? <FaHeart color="red" size={20} /> : <FaRegHeart size={20} />}
                </button>
            </div>
            <hr />

        </div>
    );
};

export default Product;