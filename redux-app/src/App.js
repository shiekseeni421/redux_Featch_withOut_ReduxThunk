import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Spin } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { featchTheData } from "./Store/Redux/featchSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.featchApp.List);
  const loading = useSelector((state) => state.featchApp.loading);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      dispatch(featchTheData(res.data));
    });
  }, []);

  console.log(list);

  return (
    <>
      <Spin tip="Loading..." spinning={!loading} delay={500}>
        <div style={{ margin: "20px" }}>
          <p className="Header_el">All Products</p>
          <Row gutter={[12, 12]}>
            {list?.map((item) => {
              return (
                <Col span={4} className="card">
                  <Card hoverable>
                    <img src={item.image} alt={item.title} className="img" />
                    <div style={{ textAlign: "center" }}>
                      <p className="price">Price: {item.price}</p>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Spin>
    </>
  );
}

export default App;
