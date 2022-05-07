import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/bug.svg"
import ideaImageUrl from "../../assets/idea.svg"
import thoughtImageUrl from "../../assets/thought.svg"
import { SelectFeedbackTypeStep } from "./FeedbackSteps/SelectFeedbackTypeStep";
import { FeedbackContentStep } from "./FeedbackSteps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./FeedbackSteps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Bug',
        image: {
            source: bugImageUrl,
            alt: 'image of a bug'
        },
    },
    IDEA: {
        title: 'Idea',
        image: {
            source: ideaImageUrl,
            alt: 'image of a light bulb'
        },
    },
    OTHER: {
        title: 'Other',
        image: {
            source: thoughtImageUrl,
            alt: 'image of a thought bubble'
        },
    },
}

//then later, using the method Object.entries(feedbackTypes) it will return an array of arrays, a vector = > [[BUG, {..content}], [IDEA, {..content}]..]

//declare what types of feedback it is possible to return, using the keys of feedbackType object
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    //Variable to store the type of feedback the user has chosen using react-state functionality: const ['state', 'function to toggle to state chosen']
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    //store the feedback state (sent or not sent)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {/* If feedback has been sent, display 'successfully sent screen' component */}
            { feedbackSent ? (

                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>

            //else, display initial feedback screen
            ) : (
                <>
                    {/* If the feedback type has not been selected yet, display the buttons */}
                    {! feedbackType ? (
                        
                        //call the component, exporting a prop with the function setFeedbackType
                        <SelectFeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />

                    //else a feedback type has already been selected, display a new panel:
                    ) : (

                        //call component FeedbackContentStep, exporting which type of feedback the user has chosen, using a prop
                        <FeedbackContentStep 
                            feedbackType = {feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback} 
                            onFeedbackSent={() => {setFeedbackSent(true)}}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Designed by <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    );
}