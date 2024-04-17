import { Link } from "react-router-dom";


const Properties = ({ properties }) => {
    const { id, image, estate_title, price, status } = properties;
    return (
        <div>
            <div className="rounded-md shadow-lg border mb-10">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-80" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide font-serif">{estate_title}</h2>
                    </div>
                    <div className="flex justify-between text-orange-500">
                        <h3 className="text-lg font-serif font-bold">Status : {status}</h3>
                        <h3 className="text-lg font-serif font-bold">Status : {price}</h3>
                    </div>
                    <Link to={`/cart/${id}`}>
                        <button type="button" className="btn flex items-center justify-center w-full p-3 tracking-wide rounded-md bg-[#696CFF] text-white font-serif font-bold">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Properties;