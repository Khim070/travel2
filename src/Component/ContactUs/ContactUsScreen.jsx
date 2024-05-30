import * as React from "react";

function Image({ src, alt }) {
    return <img loading="lazy" src={src} alt={alt} className="shrink-0 aspect-[1.02] w-[91px]" />;
}

function InfoItem({ src, text, alt, wide }) {
    return (
        <div className={`flex gap-5 ${wide ? 'mt-20' : 'mt-16'} max-md:flex-wrap max-md:mt-10`}>
            <img loading="lazy" src={src} alt={alt} className={`shrink-0 aspect-[${wide ? '1.25' : '1.01'}] w-[${wide ? '95px' : '97px'}`} />
            <div className="flex-auto my-auto">{text}</div>
        </div>
    );
}

function ContactUsScreen() {
    return (
        <section className="py-20 pl-20 bg-white max-md:pl-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">

                <section className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                    <header className="flex flex-col mt-3.5 max-md:mt-10 max-md:max-w-full">
                        <h1 className="text-8xl text-left font-bold text-black leading-[135px] max-md:max-w-full max-md:text-4xl">Contact Us</h1>
                        <p className="mt-14 text-left text-4xl leading-[53px] text-black text-opacity-60 max-md:mt-10 max-md:max-w-full">Feel free to contact us any time. We will get back to you as soon as we can!</p>
                    </header>

                    <form className="mt-24 ml-2 max-md:mt-10 max-md:ml-2.5">
                        <label htmlFor="name" className="text-3xl text-left leading-10 text-black text-opacity-60">Name</label>
                        <input id="name" type="text" className="block mt-10 border-solid bg-zinc-500 border-[3px] border-zinc-500 h-[3px] w-full" aria-label="Name" />

                        <label htmlFor="email" className="self-start mt-20 text-3xl leading-10 text-black text-opacity-60">Email</label>
                        <input id="email" type="email" className="block mt-10 border-solid bg-zinc-500 border-[3px] border-zinc-500 h-[3px] w-full" aria-label="Email" />

                        <label htmlFor="message" className="self-start text-left mt-24 text-3xl leading-10 text-black text-opacity-60">Message</label>
                        <textarea id="message" className="block mt-8 border-solid bg-zinc-500 border-[3px] border-zinc-500 h-[3px] w-full" aria-label="Message"></textarea>

                        <button type="submit" className="justify-center items-center p-4 mt-20 text-4xl font-medium text-white whitespace-nowrap bg-black rounded-lg leading-[49.5px] max-md:px-5 max-md:mt-10">
                            SEND
                        </button>
                    </form>

                    <div className="flex gap-5 justify-between mt-20 ml-5 max-w-full w-[556px] max-md:flex-wrap max-md:mt-10">
                        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/50b344027de3b810601a04b732e53f0951941237421f63c4b0da960039d9ea66?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="Decorative image 1" />
                        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a8719166bb3512985f825e0c30a9ad3df986e6eea7770a1fbaafebdb7b70f6f?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="Decorative image 2" />
                        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ac2ff628b4f34ffaecde12e39a4211b4ae7970e56678fba458d54d3a24250a4?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="Decorative image 3" />
                        <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/ace0319b2d3f739f355de4578a45cde207423ead2b6fbd4ad35168cb9a0fe054?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="Decorative image 4" />
                    </div>
                </section>

                <aside className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start p-20 mt-14 w-full text-4xl font-bold text-white bg-black leading-[52.5px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <h2 className="mt-7 text-left ml-12 text-9xl max-md:ml-2.5 max-md:text-4xl">Info</h2>
                        <InfoItem wide={true} src="https://cdn.builder.io/api/v1/image/assets/TEMP/1aa4da1e1ef0a524c626bc038a83e7fecaa8279852aa57ec1df1ccdf0158150c?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="Email icon" text="info@getintouch.com.kh" />
                        <InfoItem wide={true} src="https://cdn.builder.io/api/v1/image/assets/TEMP/cafca044ef5905109580ef1a794f68d313c498d94e5abd780147518ad48a1a0a?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="Phone icon" text="+855 10 200 000" />
                        <InfoItem wide={false} src="https://cdn.builder.io/api/v1/image/assets/TEMP/73c0a5eb62ae1fc34e9859312cd1c5970011305f848f7936d10533ad7512dce8?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="Address icon" text="Sangkat Tonle Basac" />
                        <InfoItem wide={true} src="https://cdn.builder.io/api/v1/image/assets/TEMP/12838b6a3bead0ee2fc0294299b6ff7e4a1226632bc707d9f71dc5c6b30e49db?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="Clock icon" text="8:00 am - 5:00 pm" />
                    </div>
                </aside>

            </div>
        </section>
    );
}

export default ContactUsScreen;