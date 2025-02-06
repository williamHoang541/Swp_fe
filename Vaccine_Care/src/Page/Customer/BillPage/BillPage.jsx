import React, { useState } from 'react'
import HeaderGuest from '../../../components/login/Header-Guest/HeaderGuest'
import "./BillPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import tiemle from '../../../assets/HomePage/tiemle.png'
import tiemtheogoi from '../../../assets/HomePage/tiemtheogoi.png'
import tuvanmuitiem from '../../../assets/HomePage/tuvanmuitiem.png'
import FooterGuest from '../../../components/login/Footer-Guest/FooterGuest';
import { Link } from 'react-router-dom';




function BillPage() {

     

  return (
    <div className='HomePage-Allcontainer'>
      {/* header */}
      <HeaderGuest/>
      {/* Body-homepage */}

      <div className="HomePage-main-container">
             <div className='container'>
              <div className='row'>
                <div className='col-12 mt-152 BookingPage-titletitle'>
                <div className="BookingPage-heading-protected-together">
          Hóa đơn
        </div>
                </div>
              </div>
             </div>
    </div>

        {/* Đặt Lịch */}
        <div className='BookingPage-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                    <div className='Footer-input'>
                    <div className="bg-shadow">
        <input
      type="text"
      className="BillPage-single-input"
      placeholder="Mã hóa đơn"
    />
        <button className="submit-btn">
          <span className="send">Thanh toán</span>
        </button>
      </div>
                    </div>
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

export default BillPage
