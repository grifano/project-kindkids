import React from "react";

const EventDetail = async ({ params }: RouteParams) => {
  const { id } = await params;
  return (
    <div className="h-screen bg-primary-pink pt-40">
      <h1 className="text-5xl">EventDetail {id}</h1>
    </div>
  );
};

export default EventDetail;
