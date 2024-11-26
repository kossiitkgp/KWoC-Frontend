import { Project } from "../util/types"

function ListItem({ item, onClick } : {item : Project, onClick: (item: Project) => void}) {
    return (
        <tr className="ls-comp" onClick={() => onClick(item)}>
            <td className="ls-comp-name">{item.name}</td>
            <td className="ls-comp-mentor">{item.mentor.name}</td>
            <td className="ls-comp-pull">{item.pull_count}</td>
        </tr>
    )
}

export default ListItem