import './MonsterCard.css';
function MonsterCard({data, color, onClick}){
    return (
        <div style={{
            background: `linear-gradient(to top, white 0px, white 350px, ${color} 350px, ${color} 500px)` 
          }} className="presentation-card">
            <div className="card-header">
                <img src={data.image} alt="image de monstre"/>
            </div>
            <div className="card-body">
            <h2>{data.name && data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
                <p>{data.description}</p>
                <button onClick={() => onClick(data)}>See more</button>
            </div>
        </div>
    )
}


function FullCard({data, color, onClick}){
    return (
        <div className="presentation-card full-card">
            <div className="card-left" style={{
            background: `${color}` 
          }}>
                <button onClick={onClick} style={{
            background: `${color}` 
          }}>X</button>
                <img src={data.image} alt="image de monstre"/>
            </div>
            <div className="card-right">
            <h2>{data.name && data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
                <p>{data.description}</p>
                <span>Location in game:</span>
                <ul>{data.common_locations && data.common_locations.map((location, index) => <li key={index}>{location}</li>)}</ul>
                <span>Recoverable materials:</span>
                <ul>{data.drops && data.drops.map((material, index) => <li key={index}>{material}</li>)}</ul>
            </div>
        </div>
    )
}

export {MonsterCard, FullCard}