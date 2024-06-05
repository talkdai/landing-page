import { Container } from "./container";

export function SectionHero() {
    return(
        <section className="pt-5 w-full h-[704px] bg-black bg-no-repeat bg-cover bg-center talkdai-hero">
            <Container>
                <div className=" flex-1 max-w-[700px] mx-auto px-4 text-center">
                    <h1 className=" text-4xl font-bold">
                        <span className=" text-primary-gray">Talkd is an open-source software that enables you to </span>
                        <span className=" text-primary-purple">easily deploy any LLM available through LangChain.</span>
                    </h1>
                        <p className=" justify-items-center text-xl mx-auto px-4 max-w-[600px] text-primary-gray p-5">We’re currently in beta, working on making it as easy as possible to deploy your own LLM. </p>

                        <div className="flex justify-center gap-6 mt-8">
                            <button className="p-4 border border-gray-500 rounded-md max-w-[300px] text-left">
                                <h2 className="text-2xl font-bold text-white">Dialog</h2>
                                    <p className="text-primary-gray mt-2">
                                        An extensible LLM API that enables you to easily deploy any LLM.
                                    </p>
                            </button>
                            <button className="p-4 border border-gray-500 rounded-md max-w-[300px] text-left">
                                <h2 className="text-2xl font-bold text-white">Whatsapp Plugin</h2>
                                    <p className="text-primary-gray mt-2">
                                    Our first plugin, enables users to launch Dialog with WhatsApp.
                                    </p>
                            </button>

                        </div>
                </div>
            </Container>
        </section>
    )
}