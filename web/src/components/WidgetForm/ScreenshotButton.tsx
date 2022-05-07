import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas"
import { useState } from "react";
import { LoadingScreenshot } from "../LoadingScreenshot";

interface ScreenshotButtonProps {
    screenshot: string | null;
    onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps) {

    //create state to check if a screenshot is being taken (initial state:false)
    const [IsTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);

        //take a screenshot: call async function passing as a parameter which html element to screenshot
        const canvas = await html2canvas(document.querySelector('html')!)

        //convert the screenshot to base64igm format (image in text format) 
        const base64img = canvas.toDataURL('image/png')

        //use component property to send data to another component
        onScreenshotTook(base64img);

        setIsTakingScreenshot(false);
    }

    //if screenshot already exists, display Photo (not the 'camera button')
    if (screenshot) {
        return(
            <button
                type="button"
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                onClick={() => { onScreenshotTook(null)}}
                style={{
                    backgroundImage: `url(${screenshot})`,
                }}
            >

                <Trash weight="fill"/>

            </button>
        )
    }

    return (

        <button
            type="button"
            onClick={handleTakeScreenshot}
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >

            {/* If a screenshot is being taken, display LoadingScreenshot component; Else, display camera icon */}
            { IsTakingScreenshot ? <LoadingScreenshot /> : <Camera className="w-6 h-6"/> }

        </button>
    )
}