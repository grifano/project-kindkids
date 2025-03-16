import Image from "next/image";
import { title } from "process";
import React, { FC } from "react";

interface Layout01 {
  title: string;
  subTitle: string;
  imageUrl: string;
  imageAlt: string;
  isReverse?: boolean;
}

const Layout01: FC<Layout01> = ({
  title,
  subTitle,
  imageUrl,
  imageAlt,
  isReverse,
}) => {
  return isReverse ? (
    <article className="flex flex-col-reverse items-center gap-4 text-center md:grid md:grid-cols-2 md:text-left lg:gap-12">
      <div>
        <h3 className="title-h3">{title}</h3>
        <p className="text-medium mt-2 md:mt-6">{subTitle}</p>
      </div>
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={616}
        height={616}
        layout="responsive"
        className="rounded-large"
      />
    </article>
  ) : (
    <article className="flex flex-col items-center gap-4 text-center md:grid md:grid-cols-2 md:text-left lg:gap-12">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={616}
        height={616}
        layout="responsive"
        className="rounded-large"
      />
      <div>
        <h3 className="title-h3">{title}</h3>
        <p className="text-medium mt-2 md:mt-6">{subTitle}</p>
      </div>
    </article>
  );
};

export default Layout01;
