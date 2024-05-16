"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface PersonProps {
  id: number;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
}

export default function Person({
  id,
  name,
  squareImage,
  netWorth,
  industries,
}: PersonProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/persons/${id}`);
  };

  return (
    <div className="flex flex-col gap-5 cursor-pointer place-items-center relative">
      {squareImage !== "https:undefined" ? (
        <Image
          width={250}
          height={200}
          onClick={onClick}
          src={squareImage}
          alt={name}
          className="max-w-full max-h-full rounded-lg transition-opacity duration-300 ease-in-out opacity-70 hover:opacity-100"
        />
      ) : null}
      <Link
        href={`/persons/${id}`}
        className="block text-center hover:underline pt-2"
      >
        {name}
      </Link>
    </div>
  );
}
