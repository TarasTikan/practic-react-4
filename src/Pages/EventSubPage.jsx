import { useFetchEvent } from "hooks/useFetchEvents";
import { Link } from "react-router-dom";


export const EventsSubPage = () => {
 const event = useFetchEvent();
console.log(event)

 return (
  <>
   {event && (
    <div>
     <h2>{event.name}</h2>
     <img width="300px" src={event.images[0].url} alt={event.name} />
     <Link to="details">More details</Link>
    </div>
   )}
  </>
 );
};



