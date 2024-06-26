export default function Product(props) {
    console.log(props.image);

    return (
        <div className="meal-item">
            <div>
                <img src={props.image} alt={props.name} />
                <h3>{props.name}</h3>
                <div className="meal-item-price">{props.price}</div>
                <div className="meal-item-description">{props.description}</div>
            </div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}