import axios from "axios";
import { MessageSquare } from "lucide-react";
import { useContext, useState } from "react";
import { Context } from "../main";
import toast from "react-hot-toast";

const CreateCapsule = () => {
  const [title, setTitle] = useState("");
  const [memory, setMemory] = useState("");
  const [message, setMessage] = useState("");
  const [isPrivate, setIsPrivate] = useState(false); // Renamed to isPrivate
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleFileUpload = (e, setState) => {
    setState((prev) => [...prev, ...e.target.files]);
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!isAuthenticated) {
    toast.error("Please Login to create your capsule");
    return;
  }

  if (!title || !memory || !message) {
    toast.error("Please fill out all fields.");
    return;
  }

  if (new Date(time) < new Date()) {
    toast.error("Unlock date cannot be in the past");
    return;
  }

  const formData = new FormData();
  formData.append("title", title);
  formData.append("memory", memory);
  formData.append("message", message);
  formData.append("isPrivate", isPrivate); // Changed to isPrivate
  formData.append("unlockTime", time);

  // Log before appending files to ensure they exist
  console.log('Image Files:', image);
  console.log('Video Files:', video);

  // Append image files if they exist
  if (image.length > 0) {
    image.forEach((img) => formData.append("image", img));
  }

  // Append video files if they exist
  if (video.length > 0) {
    video.forEach((vid) => formData.append("video", vid));
  }

  // Log FormData content after appending
  for (let pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  const token = localStorage.getItem("authToken");

  if (!token) {
    toast.error("Authorization token not found. Please log in again.");
    return;
  }

  try {
    setLoading(true);
    await axios.post(
      "https://samayyatra.onrender.com/api/v1/capsule/create",
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("Congratulations! Your Capsule is created successfully.");
    setTitle("");
    setMemory("");
    setMessage("");
    setIsPrivate(false); // Reset to false
    setImage([]);
    setVideo([]);
    setTime("");
  } catch (error) {
    toast.error("Capsule creation failed.");
  } finally {
    setLoading(false);
  }
};


  const previewImages = image.map((img, index) => (
    <img
      key={index}
      src={URL.createObjectURL(img)}
      alt={`Preview ${index}`}
      className="w-16 h-16 object-cover rounded-md"
    />
  ));

  const previewVideos = video.map((vid, index) => (
    <video
      key={index}
      src={URL.createObjectURL(vid)}
      controls
      className="w-32 h-20 rounded-md"
    />
  ));

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-900 text-gray-300">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Create Capsule</h1>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">Title</span>
              </label>
              <input
                type="text"
                className="input text-black p-2 input-bordered w-full pl-10 bg-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter title for your memories"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">Memories</span>
              </label>
              <input
                type="text"
                className="input text-black p-2 input-bordered w-full pl-10 bg-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Some memories related to it?"
                value={memory}
                onChange={(e) => setMemory(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-lg">Message</span>
              </label>
              <input
                type="text"
                className="input text-black p-2 input-bordered w-full pl-10 bg-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Message for older self?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-lg">Images</span>
              </label>
              <input
                type="file"
                name="image"
                className="input text-black p-2 input-bordered w-full bg-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={(e) => handleFileUpload(e, setImage)}
                multiple
              />
              <div className="flex gap-2 mt-2">{previewImages}</div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-lg">Videos</span>
              </label>
              <input
                type="file"
                name="video"
                className="input text-black p-2 input-bordered w-full bg-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                onChange={(e) => handleFileUpload(e, setVideo)}
                multiple
              />
              <div className="flex gap-2 mt-2">{previewVideos}</div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-lg">Choose one</span>
              </label>
              <div className="flex gap-4 items-center">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="privacy"
                    value="private"
                    className="radio radio-primary"
                    onChange={() => setIsPrivate(true)} // Changed to isPrivate
                    checked={isPrivate}
                  />
                  <span>Private</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="privacy"
                    value="public"
                    className="radio radio-primary"
                    onChange={() => setIsPrivate(false)} // Changed to isPrivate
                    checked={!isPrivate}
                  />
                  <span>Public</span>
                </label>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-lg">Unlock Date</span>
              </label>
              <input
                type="date"
                className="input text-black p-2 input-bordered w-full bg-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <div className="form-control mt-4">
              <button
                type="submit"
                className="btn btn-primary w-full p-3 bg-primary text-white font-medium hover:bg-primary/80 transition-colors"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Capsule"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-800 to-purple-900">
        <h2 className="text-4xl font-bold text-white text-center">
          {title ? `Preview: ${title}` : "Store Your Memories Securely"}
        </h2>
      </div>
    </div>
  );
};

export default CreateCapsule;
