import React from 'react';
import './formAspirasi.css';
import { 
  Button, 
  Form, 
  Input, 
  Select,
  Row,
  Col,
  message,
} from 'antd';
import { useState, useEffect } from 'react';
import logo2 from '../../assets/logo-polkesma.jpg';

const { TextArea } = Input;

const FormAspirasi = () => {

  // useEffect(() => {
  //   alert("Welcome to our page!");
  // }, []);
  
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };


  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Terima Kasih! Aspirasi kamu telah kami terima.',
    });
  };

  return (
    <>

    {/* HEADING */}
      <div className='heading'>
        <h1> Form Pengaduan Aspirasi</h1>
        <h2>FIBER OPTIK</h2>
      </div>
      <br/><br/><br/><br/>

      {/* FORM */}

      <Row>
      <Col span={12} className="kolom1">
      <Form className="formall"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 15,
      }}
      layout="vertical"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 800,
      }}
    >

      <Form.Item
      label="Nama"
      name="nama"
      rules={[
        {
          required: true,
          message: 'Please input your name.',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="NPM"
      name="npm"
      rules={[
        {
          required: true,
          message: 'Please input your npm.',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Kelas"
      name="kelas"
      rules={[
        {
          required: true,
          message: 'Please input your class.',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Domisili"
      name="domisili"
      rules={[
        {
          required: true,
          message: 'Please fill out the option.'
        },
      ]}
    >
    <Select
          placeholder="Pilih domisili kampus anda"
          allowClear
        >
          <Option value="depok">Depok</Option>
          <Option value="kalimalang">Kalimalang</Option>
          <Option value="karawaci">Karawaci</Option>
          <Option value="salemba">Salemba</Option>
        </Select>
        </Form.Item>

        <Form.Item
        label="Kategori Aspirasi"
        name="kategoriAsp"
        rules={[
          {
            required: true,
            message: 'Please fill out the option.'
          },
        ]}
        >
          <Select
          placeholder="Pilih kategori aspirasi yang ingin disampaikan"
          allowClear
          >
            <Option value="pelKampus">Pelayanan Kampus</Option>
            <Option value="pemKampus">Pembelajaran Kampus</Option>
            <Option value="bem">BEM</Option>
            <Option value="fasilitas">Fasilitas</Option>
          </Select>
        </Form.Item>


        <Form.Item label="Aspirasi/Kritik/Saran">
          <TextArea 
          rows={4}
          placeholder="Silahkan tulis aspirasi yang ingin disampaikan" />
        </Form.Item>

        <p><b>Terima Kasih!</b></p>
        <p>*Kerahasiaan informasi akan dijamin. Begitupun dengan data yang kami terima.</p>


        {contextHolder}

        <Button 
        type="primary" 
        htmlType="submit"
        onClick={success}
        >
        Submit
      </Button>
        </Form>
      </Col>


        <Col span={12} className="kolom2">
          <img 
          src={logo2}
          alt='logo-polkesma'
          id='logo2'
          >
          </img>
          <h2><b>Bidang Polkesma</b></h2>
          <p>Form FIBER OPTIK (FIKTI Bersuara Opini Terkini) merupakan sebuah wadah aspirasi dibawah naungan Bidang POLKESMA BEM FIKTI UG bagi mahasiswa FIKTI Universitas Gunadarma untuk menyampaikan berbagai keresahan, pengaduan, aspirasi, hingga pertanyaan yang kalian miliki. </p>
        </Col>

        </Row>
        <br/>

    </>
  );
}

export default FormAspirasi;
