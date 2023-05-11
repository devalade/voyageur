import {Modal, Input, Select, Button, Form, DatePicker, Row, Col, InputNumber} from "antd";
import {api, RouterOutputs} from '@/utils/api';
import dayjs from 'dayjs';
import {useEffect} from "react";
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

type EditFlightProps = {
    open: boolean;
    onClose: () => void;
    flightId?: string;
}

const dateFormat = 'YYYY-MM-DD';

export default function EditFlightModal(props: EditFlightProps) {
    const { open, onClose, flightId } = props;
    const [form] = Form.useForm<RouterOutputs['flight']['create']>();
    const allCity = api.city.getAll.useQuery();
    const oneCity = api.flight.getOne.useQuery({ id: flightId ?? '' })
    const updateFlight = api.flight.update.useMutation().mutate;

    useEffect(() => {
        console.log({ endDate: dayjs(oneCity.data?.endTime).format('HH:mm:ss') });
        if(oneCity.data !== null) {

            console.log({
                startTime: dayjs(oneCity.data?.startTime).format('HH:mm:ss'),
                endTime: dayjs(oneCity.data?.endTime).format('HH:mm:ss'),
                startDate: dayjs(oneCity.data?.startDate).format(dateFormat),
                endDate: dayjs(oneCity.data?.endDate).format(dateFormat),
            });

            form.setFieldsValue({
                startTime: dayjs(oneCity.data?.startTime),
                endTime: dayjs(oneCity.data?.endTime),
                startDate:  dayjs(oneCity.data?.endTime),
                endDate: dayjs(oneCity.data?.endDate),
                departureCityId: oneCity.data?.departureCityId,
                destinationCityId: oneCity.data?.destinationCityId,
                volType: oneCity.data?.volType,
                numberOfSeat: oneCity.data?.numberOfSeat,
            });
        }
    }, [oneCity]);





    function onFinish(values: RouterOutputs['flight']['create']) {
        updateFlight({
            id: oneCity.data?.id as unknown as string,
            startTime: dayjs(values.startTime).toDate(),
            endTime: dayjs(values.endTime).toDate(),
            startDate: dayjs(values.startDate).toDate(),
            endDate: dayjs(values.endDate).toDate(),
            departureCityId: values.departureCityId,
            destinationCityId: values.destinationCityId,
            volType: values.volType as unknown as string,
            numberOfSeat: oneCity.data?.numberOfSeat as unknown as number,

        },
            {
            onSuccess() {
                onClose();
            }
        });
    }
    return (
        <Modal
              open={open}
              title="Créer un vol"
              footer={[
                <Button key="back" onClick={onClose}>
                  Annuler
                </Button>,
                <Button
                    form='form'
                    htmlType='submit'
                    key="submit"
                    type="primary"
                //   loading={loading}
                //   onClick={onSubmit}
                >
                  Créer
                </Button>,
              ]}
            >
              <div className="space-y-4">
                <Form
                    id='form'
                    form={form}
                    name="basic"
                    labelAlign="left"
                    layout="vertical"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    style={{ maxWidth: 600 }}
                    colon={false}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                  {/* Insérer les informations ayant rapport a l'ajout */}
                    <Row gutter={12} style={{ width: '100%' }}>
                        <Col span={12}>
                          <Form.Item label="Date de Départ" name="startDate">
                              <DatePicker style={{ width: '100%' }} />
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item label="Date D'arrivée" name="endDate">
                              <DatePicker style={{ width: '100%' }} />
                          </Form.Item>
                        </Col>
                  </Row>
                <Row gutter={12}>
                    <Col span={12}>
                      <Form.Item label="Heure de Départ" name="startTime">
                          <DatePicker picker="time" style={{ width: '100%' }} />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Heure D'arrivée" name="endTime">
                        <DatePicker style={{ width: '100%' }} picker="time"  />
                      </Form.Item>
                    </Col>
                </Row>
                <Row gutter={12}>
                    <Col span={12}>
                      <Form.Item label="Ville de départ" name="departureCityId">
                        <Select
                            placeholder="Sélectionnez une ville"
                        >
                            {allCity.data !== undefined &&  allCity.data.map(city => (<Select.Option value={city.id}>{city.name + ' - ' + city.countryName }</Select.Option>))}
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Ville d'arrivée" name="destinationCityId">
                        <Select
                            placeholder="Sélectionnez une ville"
                            style={{ width: '100%' }}
                            defaultValue="lagos"
                            loading={allCity.isLoading}
                        >
                            {allCity.data !== undefined &&  allCity.data.map(city => (<Select.Option key={city.id} value={city.id}>{city.name + ' - ' + city.countryName }</Select.Option>))
                            }
                        </Select>
                      </Form.Item>
                    </Col>
                </Row>
                <Row gutter={12}>
                    <Col span={12}>
                        <Form.Item label="Type de Vol" name="volType">
                            <Select
                                placeholder="Sélectionnez le type de vol"
                                style={{ width: '100%' }}
                            >
                                <Select.Option value={'Direct'}>Direct</Select.Option>
                                <Select.Option value={'Escale'}>Escale</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Nombre de siège" name="numberOfSeat">
                            <InputNumber style={{ width: '100%' }} min={1} max={500}  />
                        </Form.Item>
                    </Col>
                </Row>
                </Form>
              </div>
            </Modal>
    )
}
