import { useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Context } from "../main.jsx";
import axios from "axios";
import PrivateCard from "../components/PrivateCard.jsx";

const Profile = () => {
  const { user } = useContext(Context);
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCapsules = async () => {
      const token = localStorage.getItem("authToken"); // Retrieve token from localStorage
      if (!token) {
        setError("No authorization token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const { data } = await axios.get(
          "https://samayyatra.onrender.com/api/v1/capsule/mycapsules",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Use token in Authorization header
            },
          }
        );

        setCapsules(data.myCapsules || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch capsules. Please try again later.");
        setLoading(false);
      }
    };

    fetchCapsules();
  }, []);

  const handleDelete = async (capsuleId) => {
    toast.custom((t) => (
      <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <p className="mb-3">Are you sure you want to delete this capsule?</p>
        <div className="flex justify-end space-x-3">
          <button
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md"
            onClick={async () => {
              toast.dismiss(t.id); // Dismiss the toast
              try {
                const response = await axios.delete(
                  `https://samayyatra.onrender.com/api/v1/capsule/delete/${capsuleId}`,
                  { withCredentials: true }
                );
                toast.success("Capsule deleted successfully");
                setCapsules(capsules.filter((capsule) => capsule._id !== capsuleId));
              } catch (err) {
                console.error("Delete Error:", err.response?.data || err.message);
                toast.error("Failed to delete capsule");
              }
            }}
          >
            Yes, Delete
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)} // Cancel action
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="bg.jpg"
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>

      <div className="relative z-10 flex items-center justify-center flex-col gap-16">
        <div className="mt-28 flex flex-col items-center">
          <img src="profile.jpeg" alt="avatar" className="rounded-full w-40" />
          <p className="text-slate-500 mt-2">@samay</p>
        </div>

        <div className="text-3xl text-slate-400">
          <p className="mb-4 border p-2 bg-gray-700 rounded-sm">
            Name: <span>{user.name}</span>
          </p>
          <p className="mb-4 border p-2 bg-gray-700 rounded-sm">
            Email: <span>{user.email}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-5">
        <hr className="border-t relative border-gray-300 w-[80%]" />
      </div>

      <div className="relative text-white p-10 md:p-20 flex flex-wrap items-center justify-center max-w-full mx-auto z-10 bg-opacity-50">
        <p className="relative text-3xl mb-10 font-bold">My Capsules</p>

        {error && (
          <div className="text-red-500 mb-5">{error}</div> // Display error message
        )}

        {loading ? (
          <div className="text-white mt-10">Loading...</div> // Show loading state
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-4 mt-5 mb-8">
            {capsules.length > 0 ? (
              capsules.map((capsule, index) => (
                <div key={index}>
                  <PrivateCard
                    title={capsule.title}
                    user={user}
                    createdAt={capsule.createdAt}
                    unlockTime={capsule.unlockTime}
                    handleDelete={() => handleDelete(capsule._id)}
                    id = {capsule._id}
                  />
                </div>
              ))
            ) : (
              <div className="text-white mt-10">No Data Found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
