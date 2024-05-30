import * as React from "react";

function AboutScreen() {
    return (
        <section className="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
            <div className="mt-24 w-full max-w-[1617px] max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="my-auto font-bold leading-[150%] max-md:mt-10 max-md:max-w-full">
                            <h1 className="text-8xl text-left text-black max-md:max-w-full max-md:text-4xl">About Us</h1>
                            <p className="mt-16 text-4xl text-left text-zinc-500 text-opacity-70 max-md:mt-10 max-md:max-w-full">SINCE 2010</p>
                            <article className="mt-12 text-left text-2xl leading-9 text-black text-opacity-80 max-md:mt-10 max-md:max-w-full">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </article>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <figure className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/58011d2fde8d9b2c5965932220a370e2238810e9c3ca6d59261814a0355662dc?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="" className="self-end max-w-full aspect-[0.86] w-[608px]" />
                            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/be95a2cd684b0acb6f213139b2c9520459ab82138d93d51dc45fb8994645698e?apiKey=64f1e1c68e014e70a3672f59293f1313&" alt="" className="max-w-full aspect-[1.23] w-[467px]" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutScreen;