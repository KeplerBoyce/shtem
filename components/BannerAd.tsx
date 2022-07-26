import Link from "next/link";

//component for banner ads to display around page content
export default function BannerAd(props: {imgSrc: string, href: string, className?: string}) {
    const {imgSrc, href, className} = props;

    return (
        <Link href={href}>
            <div className={"hover:cursor-pointer bg-white flex-none " + className}>
                <img src= {imgSrc} alt="Banner Ad"></img>
            </div>
        </Link>
        
    )
}