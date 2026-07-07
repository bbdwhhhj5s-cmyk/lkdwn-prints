export default function EditorialImage({

    src,

    alt

}) {

    return (

        <div className="overflow-hidden rounded-sm">

            <img

                src={src}

                alt={alt}

                className="w-full h-full object-cover transition duration-700 hover:scale-105"

            />

        </div>

    )

}