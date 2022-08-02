import CenteredModal from "./CenteredModal";
import YouTube from "react-youtube";
import { useState } from "react";
import VideoAd2 from "./VideoAd2";

export default function VideoAd(props: {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
}) {
    const {isOpen, setIsOpen} = props;
    const [watchAdOpen, setWatchAdOpen] = useState(false);
 

    return (
        <CenteredModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="flex flex-col gap-3 items-center relative bg-white container overflow-hidden rounded-lg w-min">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-4 text-5xl text-white">
                    ×
                </button>
                <div className="pointer-events-none">
                    <YouTube
                        videoId="u0jV5l7CNh8"
                        opts={{
                            height: "360",
                            width: "640",
                            playerVars: { //autostart, hide buttons/controls, and loop
                                autoplay: 1,
                                controls: 0,
                                disablekb: 1,
                                fs: 0,
                                loop: 0,
                                playlist: "u0jV5l7CNh8",
                            },
                        }}
                    />
                </div>
                <button className = 'bg-blue-600 text-white' onClick={() => setWatchAdOpen(true)}>Click here to watch the next ad.</button>
                <VideoAd2 isOpen={watchAdOpen} setIsOpen={setWatchAdOpen}/>
            </div>
        </CenteredModal>
    )
}