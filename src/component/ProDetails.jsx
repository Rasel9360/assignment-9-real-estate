import { Helmet } from 'react-helmet-async';
import { useParams, useLoaderData } from 'react-router-dom';

const ProDetails = () => {
    const properties = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const pro = properties.find(property => property.id === idInt);

    const { image, estate_title, price, status, description, location, area, segment_name, facilities } = pro;

    console.log(idInt, pro)
    return (
        <div className='w-11/12 mx-auto mt-1 shadow-lg border rounded-lg'>
            <Helmet>
                <title>Property Details</title>
            </Helmet>
            <div>
                <img src={image} className='w-full object-cover object-center lg:h-[500px]' alt="" />
            </div>
            <div className='p-5 lg:p-10'>
                <div className="my-5">
                    <h2 className="text-3xl font-semibold tracking-wide font-serif">{estate_title}</h2>
                </div>
                <div className='mb-5'>
                    <p className='font-sans text-justify'>{description}</p>
                </div>
                <hr />
                <div className='flex col-span-2 lg:col-span-4 justify-around text-center my-6'>
                    <div>
                        <h3 className='font-serif text-lg '>Location</h3>
                        <p className='text-lg font-bold'>{location}</p>
                    </div>
                    <div>
                        <h3 className='font-serif text-lg '>Apartment Size
                        </h3>
                        <p className='text-lg font-bold'>{area}</p>
                    </div>
                    <div>
                        <h3 className='font-serif text-lg '>Segment Name</h3>
                        <p className='text-lg font-bold'>{segment_name}</p>
                    </div>
                    <div>
                        <h3 className='font-serif text-lg '>Status</h3>
                        <p className='text-lg font-bold'>{status}</p>
                    </div>
                </div>
                <hr />
                <div className='mt-6 space-y-5'>
                    <h1 className='text-2xl font-serif font-bold '>Facilities</h1>
                    <div className='flex gap-20 font-bold text-xl text-green-500'>
                        {facilities.map((item, index) => <h3 className='p-3 rounded-md bg-green-300 bg-opacity-35' key={index}>{item}</h3>)}
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='text-2xl font-serif font-bold text-orange-500'>Price : {price}</h1>
                </div>
            </div>
        </div>
    );
};

export default ProDetails;