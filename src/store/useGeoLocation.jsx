import axios from "axios";
import { useState } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState('');
    const getLocation = async () => {
        navigator.geolocation.getCurrentPosition(async pos => {
            const { latitude, longitude } = pos.coords;
            const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
            try {
                const allLocation = await axios.get(url);
                setLocation(allLocation.data);
            } catch (error) {
                console.log(error);
            }
        })
    }
    return { location, getLocation }
}
export default useGeoLocation;
