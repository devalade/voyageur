import Barcode from "react-barcode";

export function FlightCard() {
    return (
        <div className="w-72 font-semibold p-4 rounded-xl bg-gray-50 text-gray-700">
            <div className="flex items-center justify-between">
                <span className="py-1 px-2 font-medium rounded-sm bg-orange-600 text-orange-100 text-xs">Economy </span>
                <span className="text-xs">UK - BD</span>
            </div>
            <div className="mt-4">
                <h4>6 Flight Tickets</h4>
                <div className="grid grid-cols-2 font-medium gap-y-3 mt-3 ">
                    <FlightDetail title={"Passager"} value={"Math Done"} />
                    <FlightDetail title={"Date"} value={"24 Juin 2023"} />
                    <FlightDetail title={"Vol"} value={"202972878"} />
                    <FlightDetail title={"Portail"} value={"A"} />
                    <FlightDetail title={"Type de vol"} value={"Direct"} />
                    <FlightDetail title={"Siège"} value={"12 - 15"} />
                </div>
            </div>
            <div className=" relative border-t-4 border-gray-800 border-dashed mt-4">
                <span className="absolute w-6 h-6 bg-gray-900 rounded-full -left-4 -translate-x-1/2 -translate-y-1/2 "></span>
                <span className="absolute w-6 h-6 bg-gray-900 rounded-full -right-10 -translate-x-1/2 -translate-y-1/2 "></span>
            </div>
            <div className="  flex  ">
                <Barcode   displayValue={false} value="barcode-example" />
            </div>
        </div>
    );
}

type FlightDetailProps  = {
    title: string;
    value: string;
}

function FlightDetail(props: FlightDetailProps) {
    const { title, value } = props;
    return (
        <div className=" flex-grow">
            <p className="text-[8px] text-gray-600">{title}</p>
            <p className="text-[11px] text-gray-800">{value}</p>
        </div>
    );
}
