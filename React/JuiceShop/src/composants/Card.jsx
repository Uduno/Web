import '../styles/Card.css'
export default function Card({data, addToCart}){
    
    const handleAddToCart = () => {
        addToCart(data);
      };

    return(
        <div className="card">
            <div className="can">
                <div className="can_pack" style={{'--canpack': `url(${data.pack})`}}></div>
                <img src={data.fruit} alt="fruit" />
            </div>
            <p>{data.name}</p>
            <p>$1.50</p>
            <div className="button" onClick={handleAddToCart}>+</div>
        </div>
    )
}