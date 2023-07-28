import ItemBox from './itemTemplates/ItemBox.js'
import './style.css';


function ProductArea() {
    const monitors: MonitorArray = [
        {id: 1, name: 'ASUS ExpertCenter C2223HE', price: 270, brand: 'Asus', size: 21.45, hdmi: 1, dp: 0, vga: 0, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/displays-desktops/monitors/business/asus-expertcenter-c2223he/"},
        {id: 2, name: 'Designo MX279HS', price: 240, brand: 'Asus', size: 27, hdmi: 2, dp: 0, vga: 1, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/displays-desktops/monitors/designo/designo-mx279hs/"},
        {id: 3, name: 'ASUS VZ279HEG1R', price: 200, brand: 'Asus', size: 27, hdmi: 1, dp: 0, vga: 1, dvi: 0, usb: 0, aux: 0, link: "https://www.asus.com/de/displays-desktops/monitors/gaming/vz279heg1r/"},
        {id: 4, name: 'TUF Gaming VG32UQA1A', price: 670, brand: 'Asus', size: 31.5, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 2, aux: 1, link:"https://www.asus.com/de/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg32uqa1a/"},
        {id: 5, name: 'TUF Gaming VG258QM', price: 515, brand: 'Asus', size: 24.5, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 0, aux: 1, link: "https://www.asus.com/de/displays-desktops/monitors/tuf-gaming/tuf-gaming-vg258qm/"},
        {id: 6, name: 'INZONE M9', price: 1000, brand: 'Sony', size: 27, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 3, aux: 1, link: "https://www.sony.de/electronics/gaming-monitore/inzone-m9"},
        {id: 7, name: 'LG 27GP850P-B', price: 320, brand: 'LG', size: 27, hdmi: 2, dp: 1, vga: 0, dvi: 0, usb: 2, aux: 1, link: "https://www.lg.com/de/monitore/lg-27gp850p-b"},
    ];

    return (
        <div className="Product-area">
            {monitors.map(monitor => <ItemBox values={monitor}/>)}
        </div>
   );
}

export default ProductArea;