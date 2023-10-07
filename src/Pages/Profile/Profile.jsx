import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, photoURL, email, phoneNumber, uid, address } = user;
  return (
    <div className="flex justify-center items-center px-5 md:px-10 lg:px-36 py-5 md:py-28 shadow-lg mx-auto">
      <div className="card w-[700px] bg-base-100 shadow-xl">
        <div className="p-10">
          <h1 className="text-2xl font-semibold">Your Profile Info:</h1>
          <h1>
            <span className="text-red-500">*</span>Please Update Your
            Information for better experience
          </h1>
        </div>
        <figure>
          <div className="avatar">
            <div className="w-[300px] mask mask-squircle">
              <img src={photoURL} />
            </div>
          </div>
        </figure>

        <div className="card-body space-y-4">
          <h2 className="card-title">Name: {displayName}</h2>
          <p>User Id : {uid}</p>
          <p>Email : {email}</p>
          <p>Phone : {phoneNumber ? phoneNumber : ""}</p>
          <p className="">Address: {address ? address : ""}</p>
          <p>Occupation {""}</p>
          <p>Region: {""}</p>
          <p>City: {""}</p>
          <p>Language: {""}</p>
          <p>Marital Status: {""}</p>
          <p>Birth Year: {""}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
