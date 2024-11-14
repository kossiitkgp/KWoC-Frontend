type Props = {
  title: string,
  description: string
}


export const WhyCard = (props: Props) => {
  return (
    <div className="card-container" >
      <h1 className="card-title">{props.title}</h1>
      <p className="card-description">{props.description}</p>
    </div>
  )
}
