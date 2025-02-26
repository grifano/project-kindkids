import React from "react";
import Button from "./Button";
import Image from "next/image";

interface KidBigCardProps {
  kidProfile: KidsProfile;
}

const KidBigCard: React.FC<KidBigCardProps> = ({ kidProfile }) => {
  return (
    <div className="image-corner group relative min-h-[41.25rem] text-white shadow-xxlarge lg:min-h-[51.25rem]">
      {/* Content Block */}
      <div className="relative z-30 flex h-full flex-col items-center justify-end gap-6 p-5 lg:p-20">
        <h2 className="font-lora text-[2rem] font-medium leading-tight lg:text-[2.5rem]">
          {kidProfile.pageTitle}
        </h2>
        <p className="text-lg">{kidProfile.pageDescription}</p>
        <div className="flex w-full justify-end">
          <Button
            variant="link"
            label="Read full story"
            url={`/profile/${kidProfile.id}`}
          />
        </div>
      </div>
      {/* Kid Photo */}
      <Image
        src={kidProfile.coverImageSRC}
        alt={kidProfile.name}
        width={640}
        height={820}
        className="absolute left-0 top-0 z-10 h-full w-full object-cover lg:saturate-0 lg:transition-all lg:duration-300 lg:group-hover:saturate-150"
      />
      {/* Image Overlay */}
      <div className="gradient-black-overlay absolute left-0 top-0 z-20 h-full w-full"></div>
    </div>
  );
};

export default KidBigCard;
