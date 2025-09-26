import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer } from 'react-toastify';
import FavItems from '../../Fav items/FavItems';

const Productcs = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('auction_data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const [hidden, setHidden] = useState(false);
    const [favItem, setFavItem] = useState([])
    const [totalFavItemsPrice, setTotalFavItemsPrice] = useState(0);

    const addItemsOnClick = (product) => {
        setHidden(true);
        setFavItem([product, ...favItem]);
        setTotalFavItemsPrice(totalFavItemsPrice + product.currentBid);
    }

    const removedFavItem = (remainingFavItems, removedItem) => {
        setFavItem(remainingFavItems);
        remainingFavItems.length == 0 && setHidden(false);
        const removedItemPrice = removedItem[0].currentBid;
        setTotalFavItemsPrice(totalFavItemsPrice - removedItemPrice);
    }

    const rashik = (name) => {
        console.log(name);
    }

    return (
        <div>
            <div className='w-[80vw] m-auto my-[132px] font-sora'>
                <div className='mb-8'>
                    <h1 className='text-3xl font-medium text-[#0E2954] mb-5'>Active Auctions</h1>
                    <p className='text-xl font-extralight'>Discover and bid on extraordinary items</p>
                </div>

                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='bg-white p-8 rounded-3xl md:w-[70%] space-y-8'>
                        <div className='table'>
                            <h3>Items</h3>
                            <h3>Current Bid</h3>
                            <h3>Time Left</h3>
                            <h3>Bid Now</h3>
                        </div>
                        <hr />
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                                addItemsOnClick={addItemsOnClick}
                                rashik={rashik}
                            >
                            </Product>)
                        }
                        <ToastContainer />
                    </div>

                    <div className='bg-white p-8 rounded-3xl md:w-[30%] h-fit text-center space-y-6'>
                        <div className='flex gap-2 items-center justify-center'>
                            <FaRegHeart size={28} color='#0E2954' />
                            <h1 className='text-3xl font-medium text-[#0E2954]'>Favorite Items</h1>
                        </div>
                        <hr />
                        <div className={hidden ? "hidden" : undefined}>
                            <h1 className='text-2xl font-medium mb-4'>No favorites yet</h1>
                            <p className='font-light'>
                                Click the heart icon on any item to add it to your favorites
                            </p>
                        </div>
                        <div className={hidden ? "space-y-3" : "hidden"}>
                            {
                                favItem.map(item => <FavItems
                                    key={item.id}
                                    item={item}
                                    removedFavItem={removedFavItem}
                                    favItem={favItem}
                                    rashik={rashik}

                                >
                                </FavItems>)
                            }

                        </div>
                        <hr />
                        <div className='flex justify-around items-center'>
                            <h3>Total bids Amount: </h3>
                            <p>${totalFavItemsPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productcs;