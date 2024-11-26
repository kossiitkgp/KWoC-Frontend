import { useState } from "react";
import "../styles/OrgDashModal.css"
import { BACKEND_URL } from "../util/constants";
import { useAuthContext } from "../util/auth";

function OrgDashModal({ isReject, onClose, msg, projectId } : {isReject : boolean, onClose : () => void, msg: string | null, projectId: number}) {
    const authContext = useAuthContext();
    const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const [review, setReview] = useState<string>("");

    const onBtnClick = () => {
        fetch(`${BACKEND_URL}/project/updt_status`, {
            method: "POST",
            headers: {
				'Bearer' : `${authContext.jwt} `
			},
            body: JSON.stringify({
                "id": projectId,
                "project_status": !isReject,
                "status_remark": review,
            })
        }).then((resp) => {
            if(resp.ok) onClose();
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
                            {msg}
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