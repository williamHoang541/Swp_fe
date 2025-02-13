import { useState } from "react";
import "./Injection.css";
import { Table } from "antd";

const Injection = () => {
  const [activeTab, setActiveTab] = useState("today");

  const statusMap = {
    pending: { label: "Chờ duyệt", className: "status_pending" },
    processing: { label: "Đang xử lý", className: "status_processing" },
    completed: { label: "Đã xong", className: "status_completed" },
  };

  const [data, setData] = useState([
    {
      id: "VN123",
      fullname: "Nguyen Van A",
      date: "15/02/2025",
      status: "pending",
    },
    {
      id: "VN234",
      fullname: "Nguyen Van B",
      date: "15/02/2025",
      status: "processing",
    },
    {
      id: "VN134",
      fullname: "Nguyen Van C",
      date: "15/02/2025",
      status: "completed",
    },
  ]);

  const [data1, setData1] = useState([
    {
      id: "VN123",
      fullname: "Nguyen Van A",
      date: "16/02/2025",
      status: "pending",
    },
    {
      id: "VN234",
      fullname: "Nguyen Van B",
      date: "17/02/2025",
      status: "processing",
    },
    {
      id: "VN134",
      fullname: "Nguyen Van C",
      date: "18/02/2025",
      status: "completed",
    },
  ]);

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
    },
  });

  const columns = [
    {
      title: "No.",
      width: "7%",
      render: (_, __, index) =>
        (tableParams.pagination.current - 1) * tableParams.pagination.pageSize +
        index +
        1,
    },
    {
      title: "Mã số",
      dataIndex: "id",
      render: (id) => id || "N/A",
      width: "10%",
    },
    {
      title: "Tên bé",
      dataIndex: "fullname",
      sorter: (a, b) => (a.fullname || "").localeCompare(b.fullname || ""),
      width: "20%",
      render: (fullname) => fullname || "N/A",
    },
    {
      title: "Ngày tiêm",
      dataIndex: "date",
      width: "20%",
      sorter: (a, b) => (a.date || "").localeCompare(b.date || ""),
      render: (date) => date || "N/A",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      width: "10%",
      render: (status) => (
        <span className={`status_label ${statusMap[status].className}`}>
          {statusMap[status].label}
        </span>
      ),
    },

    {
      title: "Chi tiết",
      width: "10%",
    },
  ];

  return (
    <div className="injection">
      <h2 className="injection_topic">Danh sách đăng ký tiêm</h2>
      {/* Tab Header */}
      <div className="injection_tab_container">
        <button
          className={`injection_tab_button ${
            activeTab === "today" ? "active" : ""
          }`}
          onClick={() => setActiveTab("today")}
        >
          Hôm nay
        </button>
        <button
          className={`injection_tab_button ${
            activeTab === "upcoming" ? "active" : ""
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Sắp tới
        </button>
      </div>

      {/* Tab Content */}
      <div className="injection_tab_content">
        {activeTab === "today" ? (
          <div>
            <Table
              columns={columns}
              rowKey={(record) => record.id}
              dataSource={data}
              pagination={{
                ...tableParams.pagination,
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "50"],
              }}
            />
          </div>
        ) : (
          <div>
          <Table
              columns={columns}
              rowKey={(record) => record.id}
              dataSource={data1}
              pagination={{
                ...tableParams.pagination,
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "50"],
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Injection;
