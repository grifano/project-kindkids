import React from "react";

const Profile = async ({ params }: RouteParams) => {
  const { id } = await params;

  return (
    <div className="h-screen bg-primary-lightBlue pt-40">
      <h1 className="text-5xl">Profile Kid {id}</h1>
    </div>
  );
};

export default Profile;
