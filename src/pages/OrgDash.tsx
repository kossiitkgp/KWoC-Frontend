import { useEffect, useState } from 'react'
import ListItem from '../components/ListItem'
import DetailsViewer from '../components/DetailsViewer'
import { Project } from '../util/types'
import { BACKEND_URL, PAGENATION_LEN, ROUTER_PATHS } from '../util/constants'
import '../styles/OrgDash.css'
import { useAuthContext } from '../util/auth'
import { useNavigate } from 'react-router-dom'

function OrgDash() {
	const navigate = useNavigate();
	const authContext = useAuthContext();
	const [allData, setAllData] = useState<Project[]>([]);
	const [filterData, setFilterData] = useState<Project[]>([]);
	const [currPage, setCurrPage] = useState<Project[]>([]);
	const [pgNo, setPgNo] = useState<number>(0);

	const [selItem, setSelItem] = useState<Project>({} as Project);

	useEffect(() => {
		if (!authContext.isAuthenticated) {
		  navigate(ROUTER_PATHS.HOME);
		}
	
		if (authContext.userData.type === "student") {
		  navigate(ROUTER_PATHS.STUDENT_DASHBOARD);
		}
	
		if (authContext.userData.type === "mentor") {
		  navigate(ROUTER_PATHS.MENTOR_DASHBOARD);
		}

		if(authContext.userData.type !== "organiser"){
			navigate(ROUTER_PATHS.HOME);
		}
	  }, [authContext]);

	  useEffect(() => {
		fetch(`${BACKEND_URL}/project/all`, {
			method: "GET",
			headers: {
				'Bearer' : `${authContext.jwt} `
			}
		}).then((res) => {
			if(res.ok){
				res.json().then((res) => setAllData(res as Project[]));
			}
		});
	  }, [])

	useEffect(() => {
		const fItems = allData.filter((item) => !item.isProjectReview);
		setFilterData(fItems);
		setPgNo(1);
		setSelItem(fItems[0]);
	}, []);

	useEffect(() => {
		const startidx = (pgNo - 1) * PAGENATION_LEN;
		const endidx = Math.min(startidx + PAGENATION_LEN, filterData.length);
		setCurrPage(filterData.slice(startidx, endidx));
	}, [pgNo, filterData]);

	const showAll = () => {
		const fItems = allData.filter((item) => !item.isProjectReview);
		setFilterData(fItems);
		setPgNo(1);
		setSelItem(fItems[0]);
	}

	const showAccept = () => {
		const fItems = allData.filter((item) => item.isProjectReview && item.isProjectApprove);
		setFilterData(fItems);
		setPgNo(1);
		setSelItem(fItems[0]);
	}

	const showReject = () => {
		const fItems = allData.filter((item) => item.isProjectReview && !item.isProjectApprove);
		setFilterData(fItems);
		setPgNo(1);
		setSelItem(fItems[0]);
	}

	const nextPage = () => {
		if(pgNo < filterData.length / PAGENATION_LEN) setPgNo(pgNo + 1);
	}

	const prevPage = () => {
		if(pgNo >= 2) setPgNo(pgNo - 1);
	}
	return (
		<div className='org-dash-main'>
			<div className="org-dash-left">
				<div className="org-dash-title">Mentor Projects</div>
				<div className="org-dash-type-btn">
					<div className="org-dash-btn-all">
						<button onClick={() => showAll()}>Review</button>
					</div>
					<div className="org-dash-btn-accept">
						<button onClick={() => showAccept()} className='approve-btn'>Approved</button>
					</div>
					<div className="org-dash-btn-rej">
						<button onClick={() => showReject()} className='reject-btn'>Rejected</button>
					</div>
				</div>
				<div className="org-dash-view">
					<div className="org-dash-table">
						<table className="org-dash-table-tab">
							{currPage.map((value) => (
								<ListItem item={value} onClick={setSelItem}/>
							))}
						</table>
					</div>
					<div className="org-dash-table-nav">
						<button className='org-dash-table-back' onClick={() => prevPage()}>&lt;</button>
						<div className="org-dash-table-info">
							Showing {(pgNo - 1) * PAGENATION_LEN + 1} - {Math.min(pgNo * PAGENATION_LEN, filterData.length)} of {filterData.length}
						</div>
						<button className='org-dash-table-next' onClick={() => nextPage()}>&gt;</button>
					</div>
				</div>
			</div>
			<div className="org-dash-right">
				{selItem && <DetailsViewer item={selItem}/>}
			</div>
		</div>
  	)
}

export default OrgDash