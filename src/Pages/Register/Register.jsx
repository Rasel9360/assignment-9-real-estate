import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet-async";


const Register = () => {
    const { createUser, logOut } = useContext(AuthContext)

    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(email, password, name, photo);

        // Password verification
        if (password.length < 6) {
            return toast.error('Password use must be 6 character')
        }

        if (/^(?=.*[A-Z])/gm.test(password) === false) {
            return toast.error("Uppercase letter is required")
        }

        if (/^(?=.*[a-z])/gm.test(password) === false) {
            return toast.error("Lowercase letter is required")
        }


        createUser(email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(result => {
                        console.log(result)
                        toast.success("Account created successfully!");
                        logOut()
                            .then(result => {
                                console.log(result)
                            })
                            .catch(err => console.error(err));
                    })
                    .catch((error) => console.error(error.message));
                console.log(result.user)

            })
            .catch(err => {
                console.error(err.message)
                toast.error("email already used please enter a valid email")
            })
        e.target.reset();
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 ">
                <h1 className="text-3xl text-black mt-5 font-serif text-center font-bold">Create An Account</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email Address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white text-xl bg-[#696CFF] hover:bg-[#4043f5]">Register</button>
                    </div>
                </form>
                <div>
                    <p className="text-center">Have already an account?<Link to='/login'><span className="btn btn-link">Login here</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;