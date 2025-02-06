import React, { useState } from 'react'
import HeaderGuest from '../../components/login/Header-Guest/HeaderGuest'
import "./HomePage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Phone from '../../assets/HomePage/phoneHome.png'
import Shingrix from '../../assets/HomePage/Shingrix.png'
import Prevenar from '../../assets/HomePage/Prevenar.png'
import Menactra from '../../assets/HomePage/Menactra.png'
import Gardasil from '../../assets/HomePage/Gardasil.png'
import Hexaxim from '../../assets/HomePage/Hexaxim.png'
import BCG from '../../assets/HomePage/BCG.png'
import tiemle from '../../assets/HomePage/tiemle.png'
import tiemtheogoi from '../../assets/HomePage/tiemtheogoi.png'
import tuvanmuitiem from '../../assets/HomePage/tuvanmuitiem.png'
import FooterGuest from '../../components/login/Footer-Guest/FooterGuest';
import { Link } from 'react-router-dom';




function HomePage() {

     
  const vaccineData = [
    {
      name: "Vắc xin Shingrix (Bỉ)",
      description: "Vắc xin Shingrix được dùng để phòng bệnh zona thần kinh và các biến chứng như đau dây thần kinh sau zona. Vắc xin này...",
      price: "1,500,000 VND",
      image: Shingrix,
      
    },
    {
      name: "Vắc xin Prevenar 13",
      description: "Mỗi năm, các bệnh gây ra do khuẩn phế cầu đang đe dọa tính mạng hàng tỷ người trên thế giới: Gần 1 triệu ca...",
      price: "1,500,000 VND",
      image: Prevenar,
    },
    {
      name: "Vắc xin Menactra (Mỹ)",
      description: "Bệnh viêm màng não, nhiễm khuẩn huyết và viêm phổi do não mô cầu khuẩn là bệnh truyền nhiễm, lây truyền...",
      price: "1,500,000 VND",
      image: Menactra,
    },
    {
      name: "Vắc xin Gardasil 9 (Mỹ)",
      description: "Vắc xin Gardasil 9 là vắc xin thế hệ mới đầu tiên phòng ngừa hiệu quả 9 chủng virus HPV gây hàng loạt bệnh nguy...",
      price: "1,500,000 VND",
      image: Gardasil,
    },    {
      name: "Vắc xin Hexaxim (Pháp)",
      description: "Bạch hầu, ho gà, uốn ván, viêm gan B, bại liệt và Các bệnh viêm phổi, viêm màng não do H.influenzae týp B là 6...",
      price: "1,500,000 VND",
      image: Hexaxim,
    },    {
      name: "Vắc xin BCG (Việt Nam)",
      description: "Bé tiêm lao bị sai vị trí, vết thương mưng mủ có sao không? Vắc xin lao có tiêm chung với vắc xin 6 trong...",
      price: "1,500,000 VND",
      image: BCG,
    },   
  ];
  return (
    <div className='HomePage-Allcontainer'>
      {/* header */}
      <HeaderGuest/>
      {/* Body-homepage */}

      <div className="HomePage-main-container">
             <div className="flex-column-eb">
        <div className="background">
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

        <div className='HomePage-Danhmuc'>
             <div className='HomePage-tilte'>
        <div className='HomePage-dm'>Danh mục Vaccine</div>
        <div className='HomePage-dm'>Xem tất cả</div>
            </div>
             <div className='container'>
        <div className='row'>
          <div className='col-12'>
<div className="latest-project">
      {vaccineData.map((vaccine, index) => (
        <div className="card New1" key={index}>
          <img src={vaccine.image} className="card-img-top" alt={vaccine.name} />
          <div className="card-body">
            <span className="handheld-hydraulic-iron">{vaccine.name}</span><br />
            <span className="straightening-repairing-iron">{vaccine.description}</span>
            <button className="frame">
              <span className="learn-more">{vaccine.price}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
          </div>

        </div>

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
        <div className='HomePage-DichVu'>
        <div className='HomePage-tilte'>
        <div className='HomePage-dm'>Danh mục dịch vụ</div>
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
<FooterGuest/>
    </div>
  )
}

export default HomePage
