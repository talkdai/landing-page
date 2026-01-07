export function Faq() {
  const faqContent = [
    {
      question: "What is talkd.ai?",
      answer:
        "talkd.ai is an open source organization that have multiple projects. The main project is dialog, an app that allows any developer to deploy a chatGPT-like assistant in under than 5 minutes.",
    },
    {
      question: "Who are the developers behind talkd.ai?",
      answer:
        "Our community of maintainers and developers are growing every day. The core maintainers of the project are Thiago Avelino, Vinicius Mesel, Luan Fernandes and Walison Filipe.",
    },
  ];

  return (
    <section className="flex flex-col my-28 max-w-[1000px] mx-auto p-4">
      <h2 className="text-3xl font-light mb-16">Frequently Asked Questions</h2>
      <ul className="space-y-8">
        {faqContent.map((faq, index) => (
          <li className="space-y-2 p-4 border border-neutral-800" key={index}>
            <h3 className="font-mono font-semibold uppercase">
              {faq.question}
            </h3>
            <p className="text-balance">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
