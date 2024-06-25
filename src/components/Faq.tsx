export function Faq() {
    const faqContent = [
        {
            'question': 'What is talkd.ai?',
            'answer': 'talkd.ai is an open source organization that have multiple projects. The main project is dialog, an app that allows any developer to deploy a chatGPT-like assistant in under than 5 minutes.'
        },
        {
            'question': 'Who are the developers behind talkd.ai?',
            'answer': 'Our community of maintainers and developers are growing every day. The core maintainers of the project are Thiago Avelino, Vinicius Mesel, Luan Fernandes and Walison Filipe.'
        }
    ]

    return(
        <section className="faq-section">
            <h2 className="text-white">
                Frequently Asked Questions
            </h2>
            <div className="faq-container">
                {faqContent.map((faq, index) => (
                    <div key={index} className="faq-content">
                        <details open={index === 0}>
                            <summary>
                                <h3>
                                    {faq.question}
                                </h3>
                                <span>
                                    +
                                </span>
                            </summary>
                            <p className="faq-answer">
                                {faq.answer}
                            </p>
                        </details>
                    </div>
                ))}
            </div>
        </section>
    )
}