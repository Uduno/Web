
export default function Case({value, onClick}){
    return(
        <div className="case" onClick={onClick}>
            {value}
        </div>
    )
}