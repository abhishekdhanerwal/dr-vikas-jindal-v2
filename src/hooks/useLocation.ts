export const useLocation = () => {
    const openMap = () => {
        const mapURL = "https://www.google.com/maps/place/Dr.+Vikas+Jindal/@28.5446982,77.1233091,19z/data=!3m1!4b1!4m6!3m5!1s0x390d1d9e90b003b7:0xbd96b634f820dc79!8m2!3d28.544697!4d77.1239528!16s%2Fg%2F11x5kp2zyd?entry=ttu";
          // Open in new tab on desktop
          window.open(mapURL, "_blank");
      };

      return {
        openMap
      }
}