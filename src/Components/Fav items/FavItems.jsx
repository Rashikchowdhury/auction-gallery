import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const FavItems = ({ item, favItem, removedFavItem, rashik }) => {
    const notify = () => toast.error(`"${item.name}" removed from favourites!`, {
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

    const handleCross = () => {
        notify();
        removeFavItem();
        rashik();
    }

    const removeFavItem = () => {
        const remainingFavItems = favItem.filter(unit => unit.id != item.id);
        const removedItem = favItem.filter(unit => unit.id == item.id);
        
        removedFavItem(remainingFavItems, removedItem)
        
    }
    

    return (
        <div>
            <div className='flex items-center gap-4 border p-3 rounded-xl border-gray-300 fav-table'>
                <div className='flex items-center gap-4'>
                    <div className=''>
                        <img src={item.img} alt="" className='object-cover w-[50px] h-[50px] rounded-xl' />
                    </div>

                    <div>
                        <p>{item.name}</p>
                        <div className='flex items-center justify-center gap-6 mt-2'>
                            <p>${item.currentBid}</p>
                            <p>Bids: {item.bids}</p>
                        </div>
                    </div>

                </div>
                <div>
                    <button className='btn bg-red-500 text-white rounded-full w-[10px] h-[30px]' onClick={handleCross}>x</button>
                </div>
            </div>
        </div>
    );
};

export default FavItems;