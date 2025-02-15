import "./Booking.css";
import { useState } from "react";
import { Table } from "antd";

const Booking = () => {
  const [data, setData] = useState([
    {
      id: "VN123",
      fullname: "Nguyen Van A",
      date: "15/02/2025",
      vaccine: "Sextaron",
    },
  ]);

  const columns = [
    {
      title: "Mã số",
      dataIndex: "id",
      render: (id) => id || "N/A",
      width: "10%",
    },
    {
      title: "Tên bé",
      dataIndex: "fullname",
      width: "20%",
      render: (fullname) => fullname || "N/A",
    },
    {
      title: "Ngày tiêm",
      dataIndex: "date",
      width: "15%",
      render: (date) => date || "N/A",
    },
    {
      title: "Vắc xin",
      dataIndex: "vaccine",
      width: "20%",
      render: (vaccine) => vaccine || "N/A",
    },
  ];
  return (
    <div className="booking">
      <h3> Đặt Lịch Tiêm</h3>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey={(record) => record.id}
      />
    </div>
  );
};

export default Booking;
