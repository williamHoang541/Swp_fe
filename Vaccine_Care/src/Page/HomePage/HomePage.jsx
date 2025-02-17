import React, { useState } from 'react'
import "./HomePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Phone from '../../assets/HomePage/phoneHome.png'
import tiemle from '../../assets/HomePage/tiemle.png'
import tiemtheogoi from '../../assets/HomePage/tiemtheogoi.png'
import tuvanmuitiem from '../../assets/HomePage/tuvanmuitiem.png'
import { Link } from 'react-router-dom';
import { vaccineData } from '../../components/data/vaccineData';

function HomePage() {

  return (
    <div className='HomePage-Allcontainer'>
      {/* header */}

      {/* Body-homepage */}

      <div className="HomePage-main-container">
             <div className="flex-column-eb">
        <div className="background-1">
          <div className="svg">
            <div className="svg-fill">
              <div className="svg-1" />
            </div>
          </div>
        </div>
        <div className="background-2">
          <div className="stethoscope">
            <div className="stethoscope-fill">
              <div className="stethoscope-3" />
            </div>
          </div>
        </div>
        <div className="background-4">
          <div className="svg-5">
            <div className="svg-fill-6">
              <div className="svg-7" />
            </div>
          </div>
        </div>
             </div>

             <div className='container'>
              <div className='row'>
                <div className='col-12 mt-152'>
                <div className="HomPage-heading-protected-together">
          Chăm sóc bé, từng mũi <br/> tiêm trọn vẹn!
        </div>
        <div className="welcome-software-management">
          "Chào mừng bạn đến với [Tên phần mềm]! Đây là nơi giúp bạn quản lý
          lịch tiêm chủng của bé một cách dễ dàng và hiệu quả. Hãy đồng hành
          cùng chúng tôi để bảo vệ sức khỏe toàn diện cho bé yêu qua từng mũi
          tiêm. "
        </div>
        <div className="hotline-24-7">Đường dây nóng: 24/7</div>

        <div className='HomePage-Hotline'>
        <button className="HomPage-Hotlinelink">
          <img src={Phone} className="HomePage-iconPhone" />
        <span className="phone-number"> 0374277590</span>
        </button>
<Link to='/booking'>
        <button  className="HomPage-datlich">
          <span className="lien-he">Đặt Lịch</span>
        </button>
        </Link>
        </div>

                </div>
              </div>

             </div>

    </div>

       {/* Danh mục vaccine */}
<div className="HomePage-Danhmuc container">
      <div className="HomePage-tilte row">
        <div className="col-6">
          <h2 className="HomePage-dm">Danh mục Vaccine</h2>
        </div>
        <div className="col-6 text-end">
          <Link to="/vaccine-list" className="HomePage-dm">Xem tất cả</Link>
        </div>
      </div>

      <div className="row">
        {vaccineData.slice(0, 6).map((vaccine) => (
          <div className="col-lg-4 col-md-6 col-12 mb-4" key={vaccine.id}>
            <div className="HomePage-card card">
              <div className="HomePage-card-actions">
                <Link to={`/vaccine/${vaccine.id}`} className="HomePage-card-btn btn" title="Xem chi tiết">
                  👁️
                </Link>
                <Link to={`/vaccine/${vaccine.id}`} className="HomePage-card-image">
                  <img src={vaccine.image} className="card-img-top" alt={vaccine.name} />
                </Link>
              </div>

              <div className="HomePage-card-body card-body">
                <h3 className="HomePage-card-title">{vaccine.name}</h3>
                <Link to={`/vaccine/${vaccine.id}`} className="btn btn-primary textdetail">
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

        {/* Video chăm sóc */}
           <div className='HomePage-videocontainer'>
<div className='container'>
      <div className='row'>
        <div className='col-12'>
        <iframe
  className="HomePage_video"
  src="https://www.youtube.com/embed/F3EDggy99v0?si=0jomCH3bM-cTFR-c"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
        </div>
      </div>

    </div>
          </div>

        {/* Danh mục dịch vụ */}
        <div className='HomePage-DichVu container'>
        <div className='HomePage-tilte row '>
        <div className="col-6">
        <h2 className='HomePage-dm'>Danh mục dịch vụ</h2>
            </div>
            </div>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='HomePage-Danhmuc-Background'>
                  <div className='HomePage-Danhmuc-content'>
                    <img src={tiemtheogoi} className='HomePage-Danhmuc-img'></img>
                    <div className='HomePage-Danhmuc-title'>Tiêm theo gói</div>
                  </div>
                  <div className='HomePage-Danhmuc-content'>
                    <img src={tiemle} className='HomePage-Danhmuc-img'></img>
                    <div className='HomePage-Danhmuc-title'>Tiêm lẻ</div>
                  </div>
                  <div className='HomePage-Danhmuc-content'>
                    <img src={tuvanmuitiem} className='HomePage-Danhmuc-img'></img>
                    <div className='HomePage-Danhmuc-title'>Tư vấn mũi tiêm</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
{/* <FooterGuest/> */}
    </div>
  )
}

export default HomePage
