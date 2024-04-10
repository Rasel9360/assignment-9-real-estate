import Banner from "../../component/Banner";
import { useLoaderData } from "react-router-dom";
import Properties from "../../component/Properties";

const Home = () => {
    const properties = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-2xl mt-10 lg:text-4xl text-center font-bold font-serif">Display Latest & Featured Properties
            </h1>
            <p className="lg:w-2/4 mx-auto text-center mb-10 mt-3 font-serif">From modern urban apartments to charming countryside estates, our selection offers a diverse range of properties to suit every lifestyle and preference
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
                {
                    properties.map(pro => <Properties key={pro.id} properties={pro}></Properties>)
                }
            </div>
        </div>
    );
};

export default Home;