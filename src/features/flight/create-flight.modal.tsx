import {Modal, Input, Select, Button, Form, DatePicker, Row, Col} from "antd";
import { InputNumber } from 'antd';
import {api, RouterOutputs} from '@/utils/api';
import dayjs from 'dayjs';

type CreateFlightProps = {
    open: boolean;
    onClose: () => void;
}

export default function CreateFlightModal(props: CreateFlightProps) {
    const { open, onClose } = props;
    const allCity = api.city.getAll.useQuery();
    const createFlight = api.flight.create.useMutation().mutate;

    function onFinish(values: RouterOutputs['flight']['create']) {
        createFlight({
            startTime: dayjs(values.startTime).toDate(),
            endTime: dayjs(values.endTime).toDate(),
            startDate: dayjs(values.startDate).toDate(),
            endDate: dayjs(values.endDate).toDate(),
            departureCityId: values.departureCityId,
            destinationCityId: values.destinationCityId,
            volType: values.volType,
            numberOfSeat: values.numberOfSeat,
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
                    name="basic"
                    labelAlign="left"
                    layout="vertical"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    style={{ maxWidth: 600 }}
                    colon={false}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                  {/* Insérer les informations ayant rapport a l'ajout */}
                  <Form.Item
                    label="NomVol"
                    name="vol"
                    rules={[{ required: true , message: "Please enter the name of the flight!" }]}
                  >
                    <Input />
                  </Form.Item>
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
                      <Form.Item label="Heure D'arrivée" name="endDate">
                        <DatePicker style={{ width: '100%' }} picker="time" />
                      </Form.Item>
                    </Col>
                </Row>
                <Row gutter={12}>
                    <Col span={12}>
                      <Form.Item label="Ville de départ" name="departureCityId">
                        <Select
                            placeholder="Sélectionnez une ville"
                        >
                            {allCity.data !== undefined &&  allCity.data.map(city => (<Select.Option key={city.id} value={city.id}>{`${city.name} ${city.countryName}` }</Select.Option>))}
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Ville d'arrivée" name="destinationCityId">
                        <Select
                            placeholder="Sélectionnez une ville"
                            style={{ width: '100%' }}
                            loading={allCity.isLoading}
                        >
                            {allCity.data !== undefined &&  allCity.data.map(city => (<Select.Option key={city.id} value={city.id}>{`${city.name} ${city.countryName}`}</Select.Option>))}
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
