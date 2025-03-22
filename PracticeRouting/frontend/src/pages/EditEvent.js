import { useRouteLoaderData, redirect } from 'react-router-dom';

import EventForm from '../components/EventForm';

export default function EditEventPage() {
    const data = useRouteLoaderData('event-detail');
    const event = data.event;

    return (
        <EventForm event={event} />
    )
};

export async function action({ request, params }) {
    const data = await request.formData();

    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    };

    const response = await fetch(`http://localhost:8080/events/${params.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventData),
    });

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not save event.' }), {
            status: 500,
        });
    }

    return redirect('/events');
}