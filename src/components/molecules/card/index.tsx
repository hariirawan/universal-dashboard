import React from "react";
import Card from "antd/lib/card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { EllipsisOutlined, SolutionOutlined } from "@ant-design/icons";
import "./style.scss";

export default function MOCard(props: any) {
  return (
    <Card className="mo-card">
      <Row gutter={16} align="middle">
        <Col>
          <div className="card-icon">
            <SolutionOutlined style={{ fontSize: "25px" }} />
          </div>
        </Col>
        <Col>
          <h3>Hallo</h3>
          <div>123456</div>
        </Col>
      </Row>
      <Row></Row>
    </Card>
  );
}
