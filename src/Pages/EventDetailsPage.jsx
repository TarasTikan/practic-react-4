import { useFetchEvent } from "hooks/useFetchEvents"

export const EventDetailsPage = () => {
    const event = useFetchEvent()
    return(
        <>
        {event && (
            <div>
                <h2>{event.name}</h2>
                <p>{event.classifications[0].genre.name}</p>
                <p>{event.classifications[0].subGenre.name}</p>
            </div>
        )}
        </>
    )
}