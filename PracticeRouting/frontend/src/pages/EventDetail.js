import { useLocation, Link, useParams } from "react-router-dom";

export default function EventDetailsPage() {
    const idParam = useParams().eventId;
    const location = useLocation();
    const { description } = location.state;

    return (
        <div>
            <h1>This is the Event Details Page for {idParam}</h1>
            <p>{description}</p>
            <Link to=".." relative="path">Back</Link>
        </div>
    )
}