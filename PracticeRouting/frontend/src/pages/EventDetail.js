import { useParams, Link } from "react-router-dom";

export default function EventDetailsPage() {
    const params = useParams();
    const eventId = params.id;

    return (
        <div>
            <h1>EventDetailsPage</h1>
            <p>{eventId}</p>
            <Link to="edit" relative="path">Edit</Link>
            <br />
            <Link to=".." relative="path">Back</Link>
        </div>
    )
}