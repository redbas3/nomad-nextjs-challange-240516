import { API_URL } from "@/app/constants";
import PersonFinancial from "@/components/person-financial";
import PersonInfo from "@/components/person-info";
import { formatToBillion } from "@/lib/utils";
import Image from "next/image";
import { Suspense } from "react";

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
    <div className="w-8/12 mx-auto">
      <Suspense fallback={<div>Loading person info...</div>}>
        <PersonInfo id={{ id }} />
      </Suspense>
      <Suspense fallback={<div>Loading person financial assets...</div>}>
        <PersonFinancial id={{ id }} />
      </Suspense>
    </div>
  );
}
