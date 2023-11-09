import Panel from "../components/Panel";
import Github_Logo from "../assets/github-logo.png"
import Participants_icon from "../assets/group.png"
import PR_icon from "../assets/pull.png"

import "../styles/statistics.scss"

function Statistics(){
    return(
        <div>
        <h1 className="text-zinc-300 text-center mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl mt-12 lg:text-8xl">
            Previous Year's Statistics
        </h1>
        <div id="statistics_div">
            <Panel icon={Participants_icon} text="1200+ Participants"/>
            <Panel icon={Github_Logo} text="500k+ Lines of code"/>
            <Panel icon={PR_icon} text="397 Pull Requests"/>
        </div>
        </div>
    );
}

export default Statistics;