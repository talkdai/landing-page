interface CardProps {
    testimonial: string;
    avatarUrl: string;
    name: string;
    role: string;
}

export function TestimonialCard(props: CardProps){
    const { testimonial, avatarUrl, name, role } = props;
    return(
        <div className="flex justify-center text-justify gap-6 flex-wrap">
            <div className="max-w-[365px] w-full max-h-[276px] px-4 py-6 rounded-lg border-2 border-gray-400 flex-col justify-start items-start gap-6 inline-flex">
                <h1 className="text-gray-400 text-2xl">
                    {testimonial}
                </h1>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-[320px] flex-col justify-center items-center inline-flex">
                        <div className="w-10 h-10 rounded-[320px] border-2 border-white"  style={{
                            backgroundImage: `url('${avatarUrl}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="w-[269px] text-gray-400 text-[32px] font-bold  font-ubuntu-mono" style={{ lineHeight: 0.9 }}>
                            {name}
                        </h1>
                        <h3 className="w-[269px] text-gray-400 text-sm sm:text-base md:text-lg"  style={{ lineHeight: 1.2 }}>{role}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}