import { Helmet } from "react-helmet-async";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const Contact = () => {
    return (
        <div className="my-10 w-11/12 mx-auto">
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <section className="py-6 shadow-lg rounded-lg">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x-2">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold font-serif ">Get in touch</h1>

                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Bay's Park Heights, Level-5, Plot-2, Road No-9, Dhanmondi R/A, Dhaka, Bangladesh</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>+880 1#######</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>contact@nrholding.com</span>
                            </p>
                        </div>
                    </div>
                    <form noValidate="" className="flex flex-col py-6 space-y-3 md:py-0 md:px-6">
                        <p className="pt-2 pb-4 text-2xl font-serif font-bold">Fill in the form to start a conversation</p>
                        <label className="block">
                            <span className="mb-2 text-xl font-semibold">Full name</span>
                            <input type="text" placeholder="Enter Your Name" required className="block w-full rounded-md shadow-sm outline-none border-2 p-3 " />
                        </label>
                        <label className="block">
                            <span className="mb-2 text-xl font-semibold">Email address</span>
                            <input type="email" placeholder="leroy@jenkins.com" required className="block w-full rounded-md shadow-sm outline-none border-2 p-3 " />
                        </label>
                        <label className="block">
                            <span className="mb-2 text-xl font-semibold">Message</span>
                            <textarea rows="3" className="block w-full rounded-md shadow-sm outline-none border-2 p-3 "></textarea>
                        </label>
                        <div className="flex justify-center items-center">
                            <button className="btn text-white font-bold text-xl hover:bg-[#696CFF] bg-[#696CFF] w-3/12">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
            {/* Map */}
            <div className="mt-10">
                <MapContainer style={{width: '100%', height: '500px', borderRadius: "10px"}} center={[23.74717877404751, 90.38044440909313]} zoom={17} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[23.74677698103868, 90.38056989560032]}>
                        <Popup>
                            NR Holding
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Contact;