import Image from "next/image";
import Link from "next/link";

// Brands
import buser from "@/assets/buser.png";
import github from "@/assets/github.png";
import thesambacapital from "@/assets/thesambacapital.png";

export function About() {
  return (
    <div>
      <div className="border-neutral-900 border-t mx-auto">
        <div className="flex flex-col md:flex-row max-w-[1000px] mx-auto py-20 px-10">
          <div className="flex flex-1 min-w-[60%] border-neutral-900">
            <section className="px-10 space-y-4 max-w-[64ch]">
              <h1 className="py-20 text-4xl font-extralight text-balance">
                Who is behind talkd?
              </h1>
              <p className="text-2xl text-balance leading-10">
                talkd.ai is a project led by{" "}
                <a
                  className="text-brand"
                  href="https://www.linkedin.com/in/vmesel/"
                  target="_blank"
                >
                  Vinicius Mesel
                </a>{" "}
                and advised by{" "}
                <a
                  className="text-brand"
                  href="https://linkedin.com/in/avelinorun"
                  target="_blank"
                >
                  Thiago Avelino
                </a>
                . It focuses on developing conversational AI solutions to
                improve communication and streamline business processes. With
                their combined expertise in AI and software development, the
                maintainers aim to make advanced technology more accessible and
                practical for various applications.
              </p>
            </section>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <Image
              src="/static/images/aboutimg.png"
              alt="Vinicius Mesel and Thiago Avelino"
              layout="responsive"
              width={300}
              height={300}
              className="rounded-lg max-w-[400px] mt-6 object-cover shadow-2xl aspect-square rotate-6"
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className="border-neutral-900 border-t mx-auto">
        <div className="flex flex-col max-w-[1000px] mx-auto py-20 px-10">
          <section className="py-20 px-10 space-y-4 max-w-[64ch]">
            <h1 className="text-4xl font-extralight">Sponsors/Investors</h1>
          </section>
          <div className="flex flex-col md:flex-row items-stretch border border-neutral-900">
            <Link
              className="flex-1 flex items-center justify-center p-10"
              href="https://thesamba.capital/"
            >
              <Image
                className="grayscale max-w-[100px]"
                width={60}
                src={thesambacapital}
                alt="TheSambaCapital"
                layout="responsive"
              />
            </Link>
            <Link
              className="flex-1 flex items-center justify-center md:border-l border-l-0 border-t md:border-t-0 border-neutral-900 p-10"
              href="https://github.blog/open-source/maintainers/github-accelerator-showcase-celebrating-our-second-cohort-and-whats-next/"
            >
              <Image
                className="grayscale max-w-[100px]"
                width={60}
                src={github}
                alt="Github"
                layout="responsive"
              />
            </Link>
            <Link
              className="flex-1 flex items-center justify-center md:border-l border-l-0 border-t md:border-t-0 border-neutral-900 p-10"
              href="https://github.com/buserbrasil"
            >
              <Image
                className="grayscale max-w-[100px]"
                width={60}
                src={buser}
                alt="Buser"
                layout="responsive"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-neutral-900 border-t mx-auto">
        <div className="flex flex-col max-w-[1000px] mx-auto py-20 px-10">
          <section className="py-20 px-10 space-y-4 max-w-[64ch]">
            <h1 className="text-4xl font-extralight">Contributors</h1>
            <p>
              We are also grateful for our contributors who have helped us and
              continue to help us improve our code base. Some highlights
              include:
            </p>
          </section>
          <div className="flex flex-col md:flex-row items-center border border-neutral-900">
            <Link
              className="flex-1 flex items-center justify-center p-10"
              href="https://github.com/lgabs"
              title="Luan Fernandes"
            >
              <Image
                className="grayscale rounded-full max-w-[60px]"
                width={60}
                height={60}
                src="https://avatars.githubusercontent.com/u/27077298"
                alt="Luan Fernandes"
                layout="responsive"
              />
            </Link>
            <Link
              className="flex-1 flex items-center justify-center p-10"
              href="https://github.com/lgabs"
              title="Walison Filipe"
            >
              <Image
                className="grayscale rounded-full max-w-[60px]"
                width={60}
                height={60}
                src="https://avatars.githubusercontent.com/u/14242043"
                alt="Walison Filipe"
                layout="responsive"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
