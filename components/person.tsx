"use client";

import { formatToBillion } from "@/lib/utils";
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
    <Link href={`/persons/${id}`} className="flex flex-col relative transition-transform duration-300 hover:scale-105 pb-3">
      {squareImage !== "https:undefined" ? (
        <Image
          width={250}
          height={200}
          onClick={onClick}
          src={squareImage}
          alt={name}
          className="max-w-full max-h-full rounded-md"
        />
      ) : null}
      <h1 className="text-md pt-2 px-1">{name}</h1>
      <p className="text-xs opacity-80 px-1">{formatToBillion(netWorth)} Billion / {industries.map(indestry => indestry)} </p>
    </Link >
  );
}
