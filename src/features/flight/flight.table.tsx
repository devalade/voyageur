import {api, RouterOutputs} from '@/utils/api';
import {Button, Space, Table} from 'antd';
import dayjs from 'dayjs';
import {useState} from "react";
import EditFlightModal from "@/features/flight/edit-flight.modal";

type FlightTableProps = {
    data: RouterOutputs["flight"]["getAll"]
}


export default function FlightTable(props: FlightTableProps) {
    const { data } = props;
    const [open, setOpen] = useState<boolean>(false);
    const [flightId, setFlightId] = useState<string | undefined>();
    const deleteFlight = api.flight.delete.useMutation().mutate;

    function onOpen(id: string) {
        setFlightId(id);
        setOpen(true);
    }

    function onClose() {
        setOpen(false);
    }

    return(
        <>
            <EditFlightModal open={open} onClose={onClose} flightId={flightId} />
            <Table dataSource={data}>
                  <Table.Column title="Nom Vol" dataIndex="volType" key="vol"  />
                  <Table.Column
                    title="Heure de Depart"
                    dataIndex="startTime"
                    key="startTime"
                    render={(_, record: RouterOutputs['flight']['getAll'][number]) => <span>{dayjs(record.startTime).format('HH:mm')}</span>}
                  />
                  <Table.Column
                    title="Heure d'Arrivee"
                    dataIndex="endTime"
                    key="endTime"
                    render={(_, record: RouterOutputs['flight']['getAll'][number]) => <span>{dayjs(record.startTime).format('HH:mm')}</span>}
                  />
                  <Table.Column
                    title="Date de Depart "
                    dataIndex="startDate"
                    key="startDate"
                    render={(_, record: RouterOutputs['flight']['getAll'][number]) => <span>{dayjs(record.endTime).format('ddd, mm YY')}</span>}
                  />
                  <Table.Column
                    title="Date d'Arrivee "
                    dataIndex="endDate"
                    key="endDate"
                    render={(_, record: RouterOutputs['flight']['getAll'][number]) => <span>{dayjs(record.endDate).format('ddd, mm YY')}</span>}
                  />
                  <Table.Column
                    title="Action"
                    key="action"
                    render={(_: any, record: RouterOutputs['flight']['getAll'][number]) => (
                      <Space size="middle">
                        <Button type="link" onClick={() => onOpen(record.id)}  >Modifier</Button>
                        <Button onClick={() => deleteFlight( { id: record.id })}>Delete</Button>
                      </Space>
                    )}
                  />
            </Table>
        </>
    );
}
