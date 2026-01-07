import { HeroLink } from "@/ui/components/hero-link/hero-link";

export function SectionHero() {
  return (
    <div className="flex flex-col md:flex-row border-neutral-900 border-t h-[calc(100vh-72px)]">
      <div className="flex flex-1 border-r border-neutral-900 items-center justify-center">
        <h1 className="text-2xl font-extralight text-balance p-10 md:text-7xl">
          Talkd is an open-source software that enables you to
          <span className="text-brand">
            {" "}
            <b className="font-bold">easily</b> deploy any LLM available through
            LangChain
          </span>
        </h1>
      </div>
      <div className="flex flex-1 flex-col">
        <HeroLink
          href="https://github.com/talkdai/dialog"
          title="Dialog"
          description="An extensible LLM API that enables you to easily deploy any LLM."
          stars="429"
        />
        <HeroLink
          href="https://github.com/talkdai/dialog-whatsapp"
          title="Dialog WhatsApp"
          description="Our first plugin, enables users to launch Dialog with WhatsApp."
          stars="20"
          mirrorBackground
        />
      </div>
    </div>
  );
}
