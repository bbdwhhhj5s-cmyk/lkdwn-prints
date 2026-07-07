export default function SectionTitle({

    eyebrow,

    title,

    subtitle

}) {

    return (

        <div className="max-w-7xl mx-auto px-8 py-24">

            <p
                style={{
                    letterSpacing: ".35em"
                }}
                className="text-[#C9A567] uppercase text-xs mb-6"
            >
                {eyebrow}
            </p>

            <h2
                style={{
                    fontFamily: "'Cormorant Garamond', serif"
                }}
                className="text-5xl md:text-7xl text-white leading-tight"
            >
                {title}
            </h2>

            <p className="text-[#9AA4AE] text-xl mt-8 max-w-2xl leading-relaxed">

                {subtitle}

            </p>

        </div>

    )

}