import { Layout, Menu, theme, Modal, Input, Select, Button, Form, DatePicker } from "antd";
import {api} from '@/utils/api';
import dayjs from 'dayjs';

type CreateFlightProps = {
    open: boolean;
    onClose: () => void;
} 

export default function CreateFlightModal(props: CreateFlightProps) {
    const { open, onClose } = props;
    const createFlight = api.flight.create.useMutation().mutate;

    function onSelect() {}

    function onFinish(values: any) {
        createFlight({
            startTime: dayjs(values.startTime).toDate(),
            endTime: dayjs(values.endTime).toDate(),
            startDate: dayjs(values.startDate).toDate(),
            endDate: dayjs(values.endDate).toDate(),
            departureCity: values.departureCity,
            destinationCity: values.destinationCity,
            volType: values.volType,
        });
        onClose();
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
                  labelCol={{ flex: '110px' }}
                  labelAlign="left"
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
                  <Form.Item label="Date de Départ" name="startTime">
                    <DatePicker />
                  </Form.Item>
                  <Form.Item label="Date D'arrivée" name="startTime">
                    <DatePicker />
                  </Form.Item>
                  <Form.Item label="Heure de Départ" name="startTime">
                    <DatePicker picker="time" />
                  </Form.Item>
                  <Form.Item label="Heure D'arrivée" name="startTime">
                    <DatePicker picker="time" />
                  </Form.Item>
                  <Form.Item label="Ville de départ" name="departureCity">
                    <Select
                      defaultValue="cotonou"
                      style={{ width: 120 }}
                      onChange={onSelect}
                      options={[
                        { value: "cotonou", label: "Cotonou" },
                        { value: "ouagadougou", label: "Ouagadougou" },
                        { value: "lagos", label: "Lagos" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item label="Ville d'arrivée" name="destinationCity">
                    <Select
                      defaultValue="lagos"
                      style={{ width: 120 }}
                      onChange={onSelect}
                      options={[
                        { value: "cotonou", label: "Cotonou" },
                        { value: "ouagadougou", label: "Ouagadougou" },
                        { value: "lagos", label: "Lagos" },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item label="Type de Vol" name="volType">
                    <Select
                      defaultValue="Direct"
                      style={{ width: 120 }}
                      onChange={onSelect}
                      options={[
                        {value: "Direct", label: "Direct"} ,
                        {value: "Escale", label: "Escale"}
                        ]}
                    />
                  </Form.Item>
                </Form>
              </div>
            </Modal>
    )
}