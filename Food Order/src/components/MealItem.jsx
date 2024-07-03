export default function MealItem(props) {
    return (
        <div className="meal-item">
            <article>
                <img src={`http://localhost:3000/${props.image}`} alt={props.name} />
                <h3>{props.name}</h3>
                <p className="meal-item-price">{props.price}</p>
                <p className="meal-item-description">{props.description}</p>
                <p className="meal-item-actions">
                    <button>Add to Cart</button>
                </p>
            </article>
        </div>
    )
}