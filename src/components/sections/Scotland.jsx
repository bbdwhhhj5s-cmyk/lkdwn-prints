import SectionTitle from "../ui/SectionTitle";
import EditorialImage from "../gallery/EditorialImage";

export default function Scotland() {

    return (

        <section className="bg-[#07131C]">

            <SectionTitle

                eyebrow="SCOTLAND"

                title="Where Weather Becomes Light."

                subtitle="A collection of fine art landscape photography captured throughout the Scottish Highlands."

            />

            <div className="max-w-7xl mx-auto px-8 pb-32">

                <EditorialImage

                    src="/images/scotland/glencoe.jpg"

                    alt="Glencoe"

                />

            </div>

        </section>

    )

}