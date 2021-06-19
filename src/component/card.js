function Card(props){
    return <div style={{height:'100%'}} className='p-3 rounded border '>
        <img src={props.imageSrc} width='100%' alt='' />
        <div className='p-3'>
            <h3>{props.title}</h3>
            <p className='text-muted'>{props.description}</p>
            <h2>{props.price}</h2>
        </div>
    </div>
}
export default Card 