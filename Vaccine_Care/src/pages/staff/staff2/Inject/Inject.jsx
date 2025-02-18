import "./Inject.css"

const Inject = ({ onConfirm }) => {
  return (
    <div className="inject">
      <h3>Tiêm Vaccine</h3>
      <div className="inject-content">
        <p>
          <strong>Mã số:</strong> VN123
        </p>
        <p>
          <strong>Tên bé:</strong> Nguyen Van A
        </p>
        <p>
          <strong>Vắc xin:</strong> Sextaron
        </p>
      </div>
      <button className="inject-btn" type="submit" onClick={onConfirm}>
        Xác nhận đã tiêm
      </button>
    </div>
  );
};

export default Inject;
