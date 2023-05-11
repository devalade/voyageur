import {api, RouterOutputs} from '@/utils/api';
import {Button, Space, Table, Tag} from 'antd';
import dayjs from 'dayjs';
import {useState} from "react";
import EditFlightModal from "@/features/flight/edit-flight.modal";
import {formatDate, formatTime} from "@/utils/function";

type BookedFlightTableProps = {
    data: RouterOutputs["bookedFlight"]["getAll"]
}


export default function BookedFlightTable(props: BookedFlightTableProps) {
    const {data} = props;

    return (
        <>
            <Table dataSource={data}>
                <Table.Column title="Siège" dataIndex="seat" key="id"/>
                <Table.Column
                    title="Type de vol"
                    render={(_, record: RouterOutputs['bookedFlight']['getAll'][number]) => <span><Tag color="magenta">{record.flight.volType}</Tag></span>}
                    key="id"
                />
                <Table.Column
                    title="Temps de départ"
                    render={(_, record: RouterOutputs['bookedFlight']['getAll'][number]) => <span>{formatTime(record.flight.startTime)}</span>}
                    key="id"
                />
                <Table.Column
                    title="Temps d'arrivé"
                    render={(_, record: RouterOutputs['bookedFlight']['getAll'][number]) => <span>{formatTime(record.flight.endTime)}</span>}
                    key="id"
                />
                <Table.Column
                    title="Date de départ"
                    render={(_, record: RouterOutputs['bookedFlight']['getAll'][number]) => <span>{formatDate(record.flight.endTime)}</span>}
                    key="id"
                />
                <Table.Column
                    title="Date d'arrivée"
                    render={(_, record: RouterOutputs['bookedFlight']['getAll'][number]) => <span>{formatDate(record.flight.endDate)}</span>}
                    key="id"
                />
                <Table.Column
                    title="Vol"
                    render={(_, record: RouterOutputs['bookedFlight']['getAll'][number]) => <span>{record.flight.departureCity.name + ' - ' + record.flight.destinationCity.name }</span>}
                    key="id"
                />
            </Table>
        </>
    );
}
