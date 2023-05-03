import {RouterOutputs} from '@/utils/api';
import {Button, Space, Table} from 'antd';
import Column from 'antd/es/table/Column';
import dayjs from 'dayjs';

type FlightTableProps = {
    data: RouterOutputs["flight"]["getAll"]
}


export default function FlightTable(props: FlightTableProps) {
    const { data } = props;
    return(
        <Table dataSource={data}>
              <Column title="Nom Vol" dataIndex="volType" key="vol"  />
              <Column
                title="Heure de Depart"
                dataIndex="startTime"
                key="startTime"
                render={(_, { startTime }) => <span>{dayjs(startTime).format('HH:mm')}</span>}
              />
              <Column
                title="Heure d'Arrivee"
                dataIndex="endTime"
                key="endTime"
                render={(_, { endTime }) => <span>{dayjs(endTime).format('HH:mm')}</span>}
              />
              <Column
                title="Date de Depart "
                dataIndex="startDate"
                key="startDate"
                render={(_, { endTime }) => <span>{dayjs(endTime).format('ddd, mm YY')}</span>}
              />
              <Column
                title="Date d'Arrivee "
                dataIndex="endDate"
                key="endDate"
                render={(_, { endDate }) => <span>{dayjs(endDate).format('ddd, mm YY')}</span>}
              />
              <Column
                title="Action"
                key="action"
                render={(_: any, record: any) => (
                  <Space size="middle">
                    <Button>Delete</Button>
                  </Space>
                )}
              />
            </Table>
    );
}