import Banner from "../../component/Banner";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const properties = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-2xl my-10 lg:text-4xl text-center font-bold font-serif">Display Latest & Featured Properties {properties.length}
            </h1>
            <div>
                
            </div>
        </div>
    );
};

export default Home;