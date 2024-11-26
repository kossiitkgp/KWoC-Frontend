import { useState } from "react"
import { Project } from "../util/types"
import OrgDashModal from "./OrgDashModal"

function ListItem({ item } : {item : Project}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isReject, setIsReject] = useState<boolean>(false);
    const [actProj, setACtProject] = useState<Project>({} as Project);

    const closeModal = () => setIsOpen(false);
    const openModal = (isReject: boolean) => {
        setIsOpen(true);
        setIsReject(isReject);
        setACtProject(item);
    }
    return (
        <div className="ls-comp">
            <h3 className="ls-comp-name">{item.name}</h3>
            <div className="ls-comp-tags">
                {
                    item.tags.map((ele) => (
                        <div className="ls-comp-tag">
                            {ele}
                        </div>
                    ))
                }
            </div>
            <p className="ls-comp-desc">{item.description}</p>
            <div className="ls-comp-prs">Total Pulls: {item.pull_count}</div>
            <div className="ls-comp-mentor">
                Mentor: 
                <a href={'https://github.com/' + item.mentor.username}>
                    {'@'+item.mentor.name}
                </a>
            </div>
            <div className="ls-comp-mentor-b">
                Secondary Mentor: 
                <a href={'https://github.com/' + item.secondary_mentor.username}>
                    {'@'+item.secondary_mentor.name}
                </a>
            </div>
            <div className="ls-comp-pull">{item.pull_count}</div>
            <div className="ls-comp-info-btn">
                <a className="ls-btn-repo ls-btn" href={item.repo_link}>View Project</a>
                <a className="ls-btn-readme ls-btn" href={item.readme_link}>ReadMe</a>
                <a className="ls-btn-comm ls-btn" href={item.comm_channel}>Join Channel</a>
            </div>
            <div className="ls-status-mark">
                {item.status_remark && (
                    item.project_status ? 
                    <div className="ls-status-accept">Accepted</div> :
                    <div className="ls-status-reject">Rejected</div>
                )}
            </div>
            <div className="ls-compo-action-btn">
                {!item.status_remark ? (
                    <>
                        <button className="approve-btn" onClick={() => openModal(false)}>Accept</button>
                        <button className="reject-btn" onClick={() => openModal(true)}>Reject</button>
                    </>
                ) : (
                    item.project_status ? (
                        <>
                            <button className="review-btn"  onClick={() => openModal(false)}>Review</button>
                            <button className="reject-btn" onClick={() => openModal(true)}>Reject</button>
                        </>
                    ) : (
                        <>
                            <button className="approve-btn" onClick={() => openModal(false)}>Accept</button>
                            <button className="review-btn" onClick={() => openModal(true)}>Review</button>
                        </>
                    )
                )}

            </div>
            {isOpen && <OrgDashModal isReject={isReject} onClose={closeModal} project={actProj}/>}
        </div>
    )
}

export default ListItem