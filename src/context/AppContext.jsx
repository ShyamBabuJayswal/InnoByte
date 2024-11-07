import { createContext} from "react";


export const AppContext = createContext()

const AppContextProvider = (props) => {

    
    const handleBookNowClick = () => {
        window.open('https://api.whatsapp.com/send?phone=919007062180', '_blank');
    };
    const openInstagram = () => {
        window.open('https://www.instagram.com/kingsukhguesthouse/', '_blank');
    };
    
    const openFacebook = () => {
        window.open('https://www.facebook.com/100075774561245/videos/kingsukh-guest-house-barhanti-purulia/1380103232635384/', '_blank');
    };
    const openGoogleMap = () => {
        window.open('https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5863324,86.8597904,17z/data=!3m1!4b1!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D', '_blank');
    };
    
    const openYoutube = () => {
        window.open('https://www.youtube.com/watch?v=nVxvSMeWXuY', '_blank');
    };
   

    const openTwitter = () => {
        window.open('  https://x.com/TourismBengal/status/1407640974696742913', '_blank');
    };
    
    

    const value = {
       handleBookNowClick,
       openInstagram, 
       openFacebook,
       openGoogleMap,
       openYoutube,
       openTwitter

       

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider