import * as React from 'react';

function ReviewCard({ imageSrc, rating }) {
    return (
        <article className="flex flex-col ml-10 justify-center w-[30%] max-md:ml-0 max-md:w-full">
            <section className="flex overflow-hidden relative flex-col grow justify-center items-end px-12 py-16 text-xl font-medium leading-8 text-black whitespace-nowrap min-h-[775px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src={imageSrc} alt="" className="object-cover justify-center absolute inset-0 size-full object-center" />
                {/* <div className="flex relative gap-1.5 p-2.5 bg-white rounded-3xl justify-content-start">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/233c46334b803e7a56c7ef4c97d1845940be02525ea3cbada76e80e10b833195?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="" className="shrink-0 w-7 aspect-[1.22]" />
                    <div className="my-auto">{rating}</div>
                </div> */}
            </section>
        </article>
    );
}

function HotelCard({ name, location, price }) {
    return (
        <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <section className="flex flex-col grow pt-4 pr-14 pb-7 pl-6 w-full bg-white rounded-none shadow-sm leading-[150%] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <h2 className="text-5xl font-bold text-black max-md:max-w-full max-md:text-4xl">{name}</h2>
                <div className="flex gap-3 mt-4 text-3xl font-bold text-zinc-500 max-md:flex-wrap">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9b0266bfee9a19c4d619c53d0d29aa5c7e214f954f080185e434d0963fd29f6?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="" className="shrink-0 aspect-square w-[42px]" />
                    <div className="flex-auto my-auto max-md:max-w-full">{location}</div>
                </div>
                <div className="flex gap-5 items-start mt-6 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-auto text-6xl font-bold text-zinc-500 max-md:text-4xl">
                        <span className="text-5xl">${price}</span>
                        <span className="text-3xl text-zinc-500">/per night</span>
                    </div>
                    <button className="justify-center px-6 py-3.5 mt-1.5 text-xl font-medium text-indigo-800 rounded-lg shadow-sm bg-zinc-200 max-md:px-5">
                        Book Now
                    </button>
                </div>
            </section>
        </article>
    );
}

function ReviewScreen2() {
    const reviews = [
        { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9fedb00d4846a43f3ca74275378b03c64a1f6c4db0d7df2cd513907205f087b8?apiKey=64f1e1c68e014e70a3672f59293f1313&', rating: '4.9' },
        { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eb2013f5d7c1d2887ea8039ffc525a0933406dba737178234ae343f848c8a0dd?apiKey=64f1e1c68e014e70a3672f59293f1313&', rating: '4.7' },
        { imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d84be07ca7ce6d033e84358c11cc86e3abda7f8d158afbdc9437883477f3c38c?apiKey=64f1e1c68e014e70a3672f59293f1313&', rating: '3.6' },
    ];

    const hotels = [
        { name: 'ABC Hotel', location: 'Phum Mouy, Srok 1', price: 30 },
        { name: 'DEF Resort', location: 'Phum Pi, Srok 2', price: 25 },
        { name: 'AFC Paradise', location: 'Phum Bei, Srok 3', price: 45 },
    ];

    return (
        <main className="flex flex-col py-14 bg-white">
            <header className="flex flex-col px-11 w-full max-md:px-5 max-md:max-w-full">
                <h1 className="self-start text-left ml-14 text-5xl text-violet-500 leading-[66px] max-md:ml-2.5">Explore</h1>
                <h2 className="self-start text-left mt-9 ml-14 text-6xl font-bold text-black leading-[96px] max-md:max-w-full max-md:text-4xl">
                    Explore to destination
                </h2>
            </header>
            <section className="mt-20 max-md:mt-10 max-md:max-w-full justify-center">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} imageSrc={review.imageSrc} rating={review.rating} />
                    ))}
                </div>
            </section>
            <section className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {hotels.map((hotel, index) => (
                        <HotelCard key={index} name={hotel.name} location={hotel.location} price={hotel.price} />
                    ))}
                </div>
            </section>
            <nav className="flex gap-5 justify-between self-end mt-14 mr-44 max-md:mt-10 max-md:mr-2.5">
                <div className="flex flex-col justify-center items-center px-4 bg-white rounded-full border-2 border-black border-solid h-[93px] stroke-[2px] w-[93px] max-md:pr-5" tabindex="0" role="button">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/501733d4890657b694e5b8d2223a123ac7839c758a2226ef2bde1b34c7568754?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="" className="aspect-[1.02] w-[54px]" />
                </div>
                <div className="flex justify-center items-center px-5 bg-blue-300 rounded-full border-2 border-black border-solid h-[93px] stroke-[2px] w-[93px]" tabindex="0" role="button">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a3888d6ff841db1f6941b16ad67e3646b19a63430fc4b14fe766c274cb855d6?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="" className="aspect-[1.02] w-[54px]" />
                </div>
            </nav>
        </main>
    );
}

export default ReviewScreen2;