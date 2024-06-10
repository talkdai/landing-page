import { Cards } from "./Card";
import { Container } from "./container";

export function SectionHero() {
  return (
    <section className="w-full mb-40 lg:max-w-[1440px] h-auto bg-black bg-no-repeat bg-cover bg-center talkdai-hero text-white">
      <Container>
        <div className=" w-full max-w-[954px] mx-auto text-center px-4">
          <div className="mb-24">
            <h1
              className=" font-semibold md:text-[46px]"
              style={{ lineHeight: 1.2 }}
            >
              <span className=" text-primary-gray">
                talkd is an open-source software that enables you to{" "}
              </span>
              <span className=" text-primary-purple">
                easily deploy any LLM available through LangChain.
              </span>
            </h1>
            <p
              className="text-[26px] mx-auto max-w-[675px] text-primary-gray mt-6"
              style={{ lineHeight: 1.2 }}
            >
              We’re currently in beta, working on making it as easy as possible
              to deploy your own LLM.{" "}
            </p>
          </div>

          <div className="w-full max-w-[997px] h-auto flex flex-col md:flex-row justify-center gap-6 font-normal font-ubuntu-mono mb-6">
            <a
              href="https://github.com/talkdai/dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-2 border-gray-500 rounded-md gap-6 text-left flex flex-col items-start"
            >
              <h2 className="text-2xl font-semibold text-primary-gray font-ubuntu-mono">
                Dialog
              </h2>
              <p className="w-[362px] text-primary-gray md:text-2xl mt-2">
                An extensible LLM API that enables you to easily deploy any LLM.
              </p>
            </a>
            <a
              href="https://github.com/talkdai/dialog-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-2 border-gray-500 rounded-md gap-6 text-left flex flex-col items-start"
            >
              <h2 className="text-2xl font-bold text-primary-gray">
                Whatsapp Plugin
              </h2>
              <p className="w-[362px] text-primary-gray md:text-2xl mt-2">
                Our first plugin, enables users to launch Dialog with WhatsApp.
              </p>
            </a>
          </div>

          {/* <div className=" w-full max-w-[954px] mx-auto text-center px-4 text-primary-gray mt-32">
            <h1
              className=" font-semibold md:text-[46px]"
              style={{ lineHeight: 1.2 }}
            >
              What our customers say about us
            </h1>
          </div>
            <div className="flex flex-col mt-24 justify-center gap-6 md:flex-row md:space-x-6 mb-16">
                <Cards/>
                <Cards/>
                <Cards/>
          </div> */}

        </div>
      </Container>
    </section>
  );
}
