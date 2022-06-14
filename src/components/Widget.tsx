import { ChatTeardropDots } from 'phosphor-react';
import { func } from 'prop-types';
import { useState } from 'react';

export function Widget() {

    const [isWidgetOpen, setIsWidgetOpen] = useState(false);

    function toggleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen);
    }

    return (
        <div className="absolute right-5 bottom-5">

            {isWidgetOpen ? <p>Hello</p> : null}
            
            <button onClick={toggleWidgetVisibility} className="
                flex 
                items-center 
             
                bg-brand-500 
                rounded-full 
                px-3 h-12 
                text-white
                group"
            >
                <ChatTeardropDots className="w-6 h-6 " />

                <span className=" max-w-0 overflow-hidden group-hover:max-w-xl transition-all duration-500">Feedback</span>
            </button>
        </div>
        )
} 