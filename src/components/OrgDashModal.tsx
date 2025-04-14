import { useState } from "react";
import "../styles/OrgDashModal.css"
import { BACKEND_URL } from "../util/constants";
import { useAuthContext } from "../util/auth";
import { Project } from "../util/types";

function OrgDashModal({ isReject, onClose, project } : {isReject : boolean, onClose : () => void, project: Project}) {
    const authContext = useAuthContext();
    const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const [review, setReview] = useState<string>(project.status_remark!);

    const onBtnClick = () => {
        fetch(`${BACKEND_URL}/project/`, {
            method: "PUT",
            headers: {
				'Bearer' : `${authContext.jwt} `
			},
            body: JSON.stringify({
                ...project,
                "project_status": !isReject,
                "status_remark": review,
            })
        }).then((resp) => {
            if(resp.ok){
                project.project_status = !isReject;
                project.status_remark = review;
                onClose();
            }
        })
    }
    return (
        <div className="modal-main" onClick={handleWrapperClick}>
            <div className="modal-wrapper">
                <div className="modal-content">
                    <div className="modal-title">
                        Why do you want to {isReject ? "reject" : "approve"} the project?
                    </div>
                    <div className="modal-inp">
                        <textarea className="modal-textarea" placeholder="Enter your review..." onChange={(e) => setReview(e.target.value)}>
                            {project.status_remark}
                        </textarea>
                    </div>
                    <div className="modal-btn">
                        <button className="modal-cancel" onClick={onClose}>Cancel</button>
                        {isReject ? <button className="reject-btn" onClick={onBtnClick}>Reject</button> : <button className="approve-btn" onClick={onBtnClick}>Approve</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrgDashModal