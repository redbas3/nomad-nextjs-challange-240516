import { API_URL } from "@/app/constants";
import { formatToDollor } from "@/lib/utils";

interface financialAssetProp {
  exchange: string;
  ticker: string;
  companyName: string;
  numberOfShares: number;
  exerciseOptionPrice: number;
  sharePrice: number;
  currencyCode: string;
  exchangeRate: number;
  interactive: Boolean;
  currentPrice: number;
}

async function getPerson(id: string) {
  const json = await fetch(`${API_URL}/person/${id}`).then(
    async (response) => await response.json()
  );
  return json;
}

export default async function PersonFinancial({
  id: { id },
}: {
  id: { id: string };
}) {
  const person = await getPerson(id);
  return (
    <div className="p-10 bg-slate-900 rounded-xl mt-16">
      <h2 className="text-3xl pb-4">Financial Assets</h2>
      <div className="grid grid-cols-person-list gap-4 ">
        {person.financialAssets?.map(
          (financial: financialAssetProp, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-1 border border-white border-opacity-40 rounded-md px-3 py-2"
            >
              <p>Ticker: {financial.ticker}</p>
              <p>Shares: {formatToDollor(financial.numberOfShares)}</p>
              {financial.exerciseOptionPrice ? (
                <p>Excerie: ${financial.exerciseOptionPrice}</p>
              ) : null}
            </div>
          )
        )}
      </div>
    </div>
  );
}
