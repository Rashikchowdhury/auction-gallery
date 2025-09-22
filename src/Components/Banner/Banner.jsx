import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="min-h-[730px] font-sora flex items-center"
                style={{
                    backgroundImage:
                        "url(https://i.postimg.cc/nV3cJF56/Banner-min.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                <div className="text-white p-30  w-fit h-fit">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold w-[630px]">
                            Bid on Unique Items from Around the World
                        </h1>
                        <p className="mb-5 text-2xl w-[642px] font-light">
                            Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                        </p>
                        <button className="btn rounded-4xl">Explore Auctions</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;