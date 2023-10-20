import Link from "next/link"

interface cardProps {
    name: string
    image: string
}

const GameCard: React.FC<cardProps> = ({ name, image }) => {
    const linkPath = name.replace(/\s/g, '').toLowerCase();
    return (
        <Link href={linkPath} className="relative h-80 w-80 bg-white rounded-lg hover:border-amber-400 hover:border-4 cursor-pointer transition-all duration-200 overflow-hidden ">

            <img src={image} alt="GameImage" className="object-cover h-full w-full brightness-50" />

            <p className="absolute bottom-0 m-5 text-3xl font-serif font-extralight text-amber-300 tracking-widest ">{name}</p>
        </Link>
    )
}

export default GameCard
