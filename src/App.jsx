import React from 'react';
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div className='flex-center h-[100vh]'>
            <p className="text-cyan-800">Hello GSAP!</p>
        </div>
    )
}

export default App