import { useState } from "react";
import { Project } from "../util/types"
import OrgDashModal from "./OrgDashModal";

function DetailsViewer({item} : {item : Project}) {
    if(!item.name) return (
        <div></div>
    );
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isReject, setIsReject] = useState<boolean>(false);

    const closeModal = () =>  setIsOpen(false);
    const openModal = (isRej: boolean) => {
        setIsOpen(true);
        setIsReject(isRej);
    }

    return (
        <div className="org-dash-viewer-main">
            <div className="org-dash-viewer-header">
                Project Details
            </div>
            <div className="org-dash-viewer-det">
                <div className="org-dash-name">
                    Name: {item.name}
                </div>
                <div className="org-dash-url">
                    URL: <a href={item.repo_link} target="_blank">{item.repo_link}</a>
                </div>
                <div className="org-dash-a-mentor">
                    Mentor Name: {item.mentor.name}
                </div>
                <div className="org-dash-b-mentor">
                    Secondary Mentor Name: {item.secondary_mentor.name}
                </div>
                <div className="org-dash-desc">
                    Description: {item.description}
                </div>
                <div className="org-dash-tags">
                    Tags: {item.tags && item.tags.map((item) => (
                        <div className="org-dash-tag">{item}</div>
                    ))}
                </div>
                <div className="org-dash-comm">
                    Comm Channel: {item.comm_channel}
                </div>
                <div className="org-dash-pull">
                    Pull Requests: {item.pull_count}
                </div>
                {item.status_remark && 
                    <div className="org-dash-review">
                        {item.project_status ? <div className="org-dash-approve">Approved</div> : <div className="org-dash-reject">Rejected</div>}
                    </div>
                }
            </div>
            {!item.status_remark && <div className="org-dash-det-btn">
                <div className="org-dash-det-btn-accept">
                    <button className="approve-btn" onClick={() => openModal(false)}>Approve</button>
                </div>
                <div className="org-dash-det-btn-reject">
                    <button className="reject-btn" onClick={() => openModal(true)}>Reject</button>
                </div>
            </div>}
            {item.status_remark && <div className="org-dash-det-btn">
                <div className="org-dash-det-btn-accept">
                    <button>Review</button>
                </div>
                <div className="org-dash-det-btn-reject">
                {item.project_status ? <button className="reject-btn" onClick={() => openModal(true)}>Reject</button> : <button className="approve-btn" onClick={() => openModal(false)}>Approve</button>}
                </div>
            </div>}
            {isOpen && <OrgDashModal isReject={isReject} onClose={closeModal}/>}
        </div>
    )
}

export default DetailsViewer