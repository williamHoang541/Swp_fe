import React from "react";
import "./Wait.css";

const Wait = ({onConfirm}) => {
  return (
    <div className="wait">
      <h3>Theo dõi sau tiêm</h3>
      <div className="wait-content">
        <p>
          <strong>Tên bé:</strong> Nguyen Van A
        </p>
        <p>
          <strong>Thời gian chờ:</strong> 30 phút
        </p>
        <div className="wait-notes">
          <label htmlFor="reactionNotes"><strong>Ghi chú phản ứng sau tiêm:</strong></label>
          <textarea id="reactionNotes" className="wait-textarea" placeholder="Nhập ghi chú..."></textarea>
        </div>
      </div>
      <button className="wait-btn" type="submit" onClick={onConfirm}>Xác nhận hoàn tất chờ</button>
    </div>
  );
};

export default Wait;
