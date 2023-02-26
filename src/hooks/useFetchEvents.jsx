import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchEventById } from "Services/servicesApi";


export const useFetchEvent = () => {
 const [event, setEvent] = useState(null);

 const { id } = useParams();

 useEffect(() => {
   fetchEventById(id).then(setEvent);
 }, [id]);

 return event;
};


