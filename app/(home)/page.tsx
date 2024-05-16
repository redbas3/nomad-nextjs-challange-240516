import Person, { PersonProps } from "@/components/person";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

async function getPersons() {
  const json = await fetch(API_URL).then(
    async (response) => await response.json()
  );
  return json;
}

export default async function Home() {
  const persons = await getPersons();
  return (
    <div className="grid grid-cols-person-list gap-5 cursor-pointer w-11/12 mx-auto max-w-4xl">
      {persons.map((person: PersonProps) => (
        <Person key={person.id} {...person} />
      ))}
    </div>
  );
}
