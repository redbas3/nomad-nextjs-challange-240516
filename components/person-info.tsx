import { getPerson } from "@/app/persons/[id]/page";
import { formatToBillion } from "@/lib/utils";
import Image from "next/image";

export default async function PersonInfo({
  id: { id },
}: {
  id: { id: string };
}) {
  const person = await getPerson(id);
  return (
    <div className="flex flex-col gap-12 p-10 bg-slate-900 rounded-xl">
      <Image
        width={250}
        height={200}
        src={person.squareImage}
        alt={person.name}
        className="rounded-lg"
      />
      <div className="flex flex-col mt-2 gap-2">
        <h1 className="text-white text-4xl font-semibold">{person.name}</h1>
        <p>Networth: {formatToBillion(person.netWorth)} Billion</p>
        <p>Country: {person.country}</p>
        <p>Industry: {person.industries.map((indestry: string) => indestry)}</p>
        <div className="py-2">
          {person.bio.map((bio: string, index: number) => (
            <p key={index}>{bio}</p>
          ))}
        </div>
        <div>
          {person.about.map((about: string, index: number) => (
            <p key={index}>{about}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
