import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, MessageSquare } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [otp, setOtp] = useState("");
  const [newPassword, setPassword] = useState("");
  const navigateTo = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8002/api/v1/user/reset-password",
        {
          otp,
          newPassword,
        },
        { withCredentials: true }
      );

      toast.success(data.message || "Password changed successfully");
      navigateTo("/login");
    } catch (error) {
      toast.error(data.message || "Error while changing password");
    }
  };

  return (
    <div className="h-screen grid lg:grid-cols-2 bg-slate-900 text-gray-300">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20
              transition-colors"
              >
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Enter your new password and otp</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">Otp</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MessageSquare className="size-6 text-primary" />
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-10 p-2 bg-slate-500 text-black`}
                  placeholder="Otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  New Password
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="password"
                  className={`input input-bordered w-full pl-10 p-2 bg-slate-500 text-black`}
                  placeholder="password"
                  value={newPassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome back!</h2>
          <p className="text-base-content/60">
            Log in to continue your conversations and catch up with your
            messages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
