import { useContext, useState } from "react";
import { Eye, EyeOff, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios"; 
import { Context } from "../main";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const {setIsAuthenticated}  = useContext(Context)
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);
   await axios.post(
        "http://localhost:8002/api/v1/user/signup",
        { name, email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      
      setName("");
      setEmail("");
      setPassword("");
      toast.success( "Account created successfully!");
      setIsAuthenticated(true)
      navigateTo("/");
    } catch (error) {
      const message = "An unexpected error occurred. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-900 text-gray-300">
      {/* Left Side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
                group-hover:bg-primary/20 transition-colors"
              >
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Account</h1>
              <p className="text-base-content/60">
                Get started with your free account
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Full Name
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className="input text-black p-2 input-bordered w-full pl-10 bg-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-lg">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className="input input-bordered p-2 bg-slate-400 text-black w-full pl-10 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered p-2 text-white bg-slate-400 w-full pl-10 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-yellow-400" />
                  ) : (
                    <Eye className="size-5 text-yellow-400" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`btn btn-primary w-full ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join our community</h2>
          <p className="text-base-content/60">
            Connect with friends, share moments, and stay in touch with your
            loved ones.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
