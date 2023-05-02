import React from "react";
import "./aspirasi.css";
import { Col, Row, Card } from "antd";
import { ASPIRASI_DATA } from "./Constant";
import Gap from '../../component/gap/Gap';


const style = {
  background: "#0092ff",
  padding: "8px 0",
};

const AspirasiPage = () => {
  return (
    <>
      {/* HEADING-ASPIRASI */}
      <div className="judul2">
        <h1>
          <b>ASPIRASI MAHASISWA FIKTI</b>
        </h1>
      </div>

      {/* CARD CONTENT */}

      
        <Row className="cardkonten"
          gutter={{
            sm: 16,
          }}
        >
          <Gap height={40}/>
          {ASPIRASI_DATA.map((aspirasi) => (
            <Card
              key={aspirasi.id}
              className="cardaspirasi"
              hoverable
              style={{
                color: "#19345E",
              }}
              title={aspirasi.judul}
              bordered={false}
            >
              <Col className="kolom-isi" span={16}>
                <div>{aspirasi.isi}</div>
              </Col>
            </Card>
          ))}
        </Row>
      




    </>
  );
};

export default AspirasiPage;
