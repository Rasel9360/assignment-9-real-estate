import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <h1 className="text-3xl text-black mt-5 font-serif text-center font-bold">Please Login</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white text-xl bg-[#696CFF] hover:bg-[#4043f5]">Login</button>
                    </div>
                </form>
                <div>
                    <p className="text-center">New on our platform? <Link to='/register'><span className="btn btn-link">Create an account</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;