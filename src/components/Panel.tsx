import '../styles/panel.scss'

function Panel(props:any){
    return(
    <div className="Panel">
        <img src={props.icon} alt=""/>
        <p>{props.text}</p>
    </div>
    );
}

export default Panel;