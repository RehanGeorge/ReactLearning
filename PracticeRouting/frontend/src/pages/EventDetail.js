import { Suspense } from "react";
import { useRouteLoaderData, redirect, Await } from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

export default function EventDetailsPage() {
    const { event, events } = useRouteLoaderData('event-detail');

    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={event}>
                {loadedEvent => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={events}>
                    {loadedEvents => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
        </>
    )
}

async function loadEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch event.' }), {
            status: 500,
        });
    } else {
        const resData = await response.json();
        return resData.event;
    }
}

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');
  
    if (!response.ok) {
      throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
        status: 500,
      });
    } else {
      const resData = await response.json();
      return resData.events;
    }
  }
  

export async function loader({ request, params }) {
    const id = params.eventId;

    return {
        event: loadEvent(id),
        events: loadEvents(),
    };
}

export async function action({ params, request}) {
    const id = params.id;
    const method = request.method;
    console.log(id);
    const response = await fetch('http://localhost:8080/events/' + id, {
        method: method,
    });

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not delete event.' }), {
            status: 500,
        });
    }

    return redirect('/events');
}