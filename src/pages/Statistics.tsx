import Panel from "../components/Panel";
import Github_Logo from "../assets/github-logo.png"
import Participants_icon from "../assets/group.png"
import PR_icon from "../assets/pull.png"

import "../styles/statistics.scss"

function Statistics(){
    return(
        <div id="statistics_div">
            <Panel icon={Participants_icon} text="200 Participants"/>
            <Panel icon={Github_Logo} text="2000 Lines of code"/>
            <Panel icon={PR_icon} text="1500 Pull Requests"/>
        </div>
    );
}

export default Statistics;