import kidsDB from "@/constants/kidsDB";
import React from "react";

const Profile = async ({ params }: RouteParams) => {
  const { id } = await params;

  const kidProfile = kidsDB.find((kid) => kid.id === id);

  if (!kidProfile) {
    return <div>Profile not found</div>;
  }

  const { pageTitle, pageDescription } = kidProfile;

  return (
    <div className="h-screen bg-primary-lightBlue pt-40">
      <h1 className="text-5xl">{pageTitle}</h1>
      <p>{pageDescription}</p>
    </div>
  );
};

export default Profile;
