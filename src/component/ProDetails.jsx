import { useParams, useLoaderData } from 'react-router-dom';

const ProDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id)
    const properties = useLoaderData();
    const pro = properties.find(property => property.id === idInt);

    const { image, estate_title, price, status} = pro;
    
    console.log(idInt, pro)
    return (
        <div className='w-11/12 mx-auto mt-5'>
            <div>
                <img src={image} className='w-full object-cover object-center' alt="" />
            </div>
        </div>
    );
};

export default ProDetails;