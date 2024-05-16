import { API_URL } from "@/app/constants";
import { formatToBillion } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export async function getPerson(id: string) {
    const json = await fetch(`${API_URL}/person/${id}`).then(
        async (response) => await response.json()
    );
    return json;
}

export default async function PersonDetailPage({
    params: { id },
}: {
    params: { id: string };
}) {
    const person = await getPerson(id);
    return (
        <div className="flex flex-col gap-12 w-9/12 mx-auto">
            <Image
                width={250}
                height={200}
                src={person.squareImage}
                alt={person.name}
                className="rounded-2xl"
            />
            <div className="flex flex-col mt-2 gap-2">
                <h1 className="text-white text-4xl font-semibold">{person.name}</h1>
                <p>Networth: {formatToBillion(person.netWorth)} Billion</p>
                <p>Country: {person.country}</p>
                <p>Industry: {person.industries.map((indestry: string) => indestry)}</p>
                <div className="py-2">
                    {person.bio.map((bio: string) => <p>{bio}</p>)}
                </div>
                <div>
                    {person.about.map((about: string) => <p>{about}</p>)}
                </div>
            </div>
        </div>
    );
}