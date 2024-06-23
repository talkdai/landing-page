import { TestimonialCard } from "./Card";
import { Container } from "./Container";

export function SectionHero() {
  return (
    <section className="w-full bg-black bg-no-repeat bg-cover bg-center hero text-white md:mb-[130px]">
      <Container>
        <div className="w-full max-w-[954px] min-h-[168px] mt-10 md:mt-[178px] mx-auto text-center md:px-4 px-8">
        <div className="mb-16 md:mb-32">
            <h1
              className="text-primary-gray font-semibold text-center text-2xl md:text-[46px] md:font-bold"
              style={{ lineHeight: 1.2 }}>
              <span>
                talkd is an open-source software that enables you to{" "}
              </span>
              <span className="text-primary-purple">
                easily deploy any LLM available through LangChain.
              </span>
            </h1>
            <p className="hero-subtext text-primary-gray md:text-[26px] mx-auto max-w-[675px] max-h-[62px] mt-[32px]"
              style={{ lineHeight: 1.2 }}
            >
              We’re currently in beta, working on making it as easy as possible
              to deploy your own LLM.{" "}
            </p>
          </div>

          <div className="w-full mx-auto flex flex-col md:flex-row justify-center gap-6 font-ubuntu-mono mb-3 apps-container">
            <a
              href="https://github.com/talkdai/dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-[397px] max-h-[218px] px-4 py-6 border-2 pb-8 border-primary-gray rounded-md justify-start gap-6 text-left flex flex-col items-start"
            >
              <h2 className="text-2xl font-semibold text-primary-gray font-ubuntu-mono">
                Dialog
              </h2>
              <p className="max-w-[362px] overflow-hidden text-primary-gray md:text-[24px] text-base">
                An extensible LLM API that enables you to easily deploy any LLM.
              </p>
            </a>
            <a
              href="https://github.com/talkdai/dialog-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-[397px] max-h-[218px] px-4 py-6 border-2 pb-8 border-primary-gray rounded-md justify-start gap-6 text-left flex flex-col items-start"
            >
              <h2 className="text-2xl font-semibold text-primary-gray font-ubuntu-mono">
                Whatsapp Plugin
              </h2>
              <p className="max-w-[362px] overflow-hidden text-primary-gray md:text-[24px] text-base">
                Our first plugin, enables users to launch Dialog with WhatsApp.
              </p>
            </a>
          </div>
          <div className="testimonials-section">
            <div className="w-full max-w-[954px] mx-auto text-center px-4 text-primary-gray mt-32">
              <h1 className="font-semibold md:text-[46px] leading-[55.67px]">
                What our customers say about us
              </h1>
            </div>
            <div className="flex flex-col md:mt-[100px] justify-center gap-6 md:flex-row md:space-x-6 mb-16">
                <TestimonialCard
                  testimonial="I love the ease of use of Dialog, I was able to deploy my own LLM in minutes."
                  avatarUrl='/static/images/avatar/1.png'
                  name="John Doe"
                  role="CEO, Company"
                >
                </TestimonialCard>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
