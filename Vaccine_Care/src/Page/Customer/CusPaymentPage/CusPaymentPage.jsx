import React, { useState } from 'react';
import './CusPaymentPage.css';
import { Link } from 'react-router-dom';

function CusPaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("qr");

  const invoiceData = {
    id: "INV20250217",
    customer: "Đoàn Anh Khang",
    phone: "037477590",
    amount: 500000,
    description: "Thanh toán hóa đơn mua hàng",
  };

  // Sử dụng hình ảnh minh họa cho QR Code (thay URL này bằng ảnh QR của bạn)
  const qrImageUrl = "https://dhiway.com/wp-content/uploads/2021/09/Artboard-2-1.png";

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
            <div className="payment-page mt-4">
      {/* Thông tin hóa đơn */}
      <div className="invoice-card card mb-3 shadow">
        <div className="card-body">
          <h5 className="card-title mb-3">Thông tin hóa đơn</h5>
          <p>
            <strong>Mã hóa đơn:</strong> {invoiceData.id}
          </p>
          <p>
            <strong>Khách hàng:</strong> {invoiceData.customer}
          </p>
          <p>
            <strong>Số điện thoại:</strong> {invoiceData.phone}
          </p>
          <p>
            <strong>Số tiền:</strong> {invoiceData.amount.toLocaleString()} VND
          </p>
          <p>
            <strong>Nội dung:</strong> {invoiceData.description}
          </p>
        </div>
      </div>

      {/* Chọn phương thức thanh toán */}
      <div className="payment-method card mb-3 shadow">
        <div className="card-body">
          <h5 className="card-title mb-3">Chọn phương thức thanh toán</h5>
          <div className="payment-options">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="qr"
                name="paymentMethod"
                value="qr"
                checked={selectedMethod === "qr"}
                onChange={(e) => setSelectedMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="qr">
                Thanh toán qua mã QR
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="bank"
                name="paymentMethod"
                value="bank"
                checked={selectedMethod === "bank"}
                onChange={(e) => setSelectedMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="bank">
                Chuyển khoản ngân hàng
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="cash"
                name="paymentMethod"
                value="cash"
                checked={selectedMethod === "cash"}
                onChange={(e) => setSelectedMethod(e.target.value)}
              />
              <label className="form-check-label" htmlFor="cash">
                Thanh toán tiền mặt
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Hiển thị hình minh họa QR Code nếu chọn phương thức QR */}
      {selectedMethod === "qr" && (
        <div className="qr-code card mb-3 shadow">
          <div className="card-body text-center">
            <h5 className="card-title mb-3">Quét mã QR để thanh toán</h5>
            <img src={qrImageUrl} alt="QR Code" width="200" height="200" />
          </div>
        </div>
      )}

      {/* Nút xác nhận thanh toán */}
      <Link to ='/'className="BillPayment-flex text-center mt-3">
        <button className="btn btn-success btn-lg">
          Xác nhận đã thanh toán
        </button>
      </Link>
    </div>
            </div>

        </div>

    </div>

  );
}

export default CusPaymentPage;
