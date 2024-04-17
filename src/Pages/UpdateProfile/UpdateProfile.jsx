import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext)


    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
            .then(result => {
                console.log(result);
                toast.success('Update your profile successfully')
            })
            .catch((error) => {
                console.log(error);
                toast.error("Error! Please try again later")
            });
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-base-200">
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className="lg:flex justify-center gap-10 items-center">
                <div className="flex lg:min-w-[512px] lg:min-h-[376px] flex-col justify-center p-6 shadow-xl rounded-xl sm:px-12 bg-base-100  dark:text-gray-800">
                    <img src={user.photoURL} alt="" className="w-32 border-2 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl sm:text-2xl font-serif font-bold">{user.displayName}</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">{user.email || 'Email not found'}</p>
                        </div>
                    </div>
                </div>
                <div className="card shrink-0 w-full max-w-lg shadow-xl bg-base-100 ">
                    <h1 className="text-3xl text-black mt-5 font-serif text-center font-bold">Update Your Profile</h1>
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-white text-xl bg-[#696CFF] hover:bg-[#4043f5]">Save Change</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;