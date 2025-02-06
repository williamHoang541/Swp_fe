import React, { useState } from 'react'
import HeaderGuest from '../../components/login/Header-Guest/HeaderGuest'
import "./LoginPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Phone from '../../assets/Login/Tabpanel.png'
import FooterGuest from '../../components/login/Footer-Guest/FooterGuest';
import { Link } from 'react-router-dom';




function LoginPage() {

     
  return (
    <div className='HomePage-Allcontainer'>
      {/* header */}
      <HeaderGuest/>
      {/* Body-Regis */}
      <div className="HomePage-main-container">
             <div className="flex-column-eb">
             </div>
             <div className='container mt-5'>
              <div className='row mt-152'>
                <div className='col-6 '>
                <div className='Regis-from'>
                    <div className='Regis-title'>Mời bạn đăng nhập:</div>
                    <div className='Regis-input'>
                        <div className='Regis-info'>Tên:</div>
                        <input
                          type="text"
                          className="Regis-single-input"
                          placeholder="Nhập tên"/>
                    </div>
                    <div className='Regis-input'>
                        <div className='Regis-info'>Mật khẩu:</div>
                        <input
                          type="text"
                          className="Regis-single-input"
                          placeholder="Nhập mật khẩu"/>
                    </div>
                    <div className='Regis-input'>
                    <Link to='/successregis'><button className='Regis-button mt-4'>
                        Gửi
                    </button></Link>
                    </div>
                    <div className='Regis-input'>
                    <div className='Login-flex'>
                        <div className='Login-text'>Bạn quên mật khẩu ?</div>
                        <Link to='/register' className='Login-text'>Đăng ký tài khoản</Link>
                    </div>
                    </div>
                </div>
                </div>

                <div className='col-6 Regis-kkk'>
                    <div className='Regis-introContainer'>
                                  <img src={Phone} className="Regis-icon" />
                        <div className='Regis-intro'>
                        "Chào mừng bạn đến với [Tên ứng dụng/quản lý tiêm chủng]!Hãy tạo tài khoản ngay hôm nay để dễ dàng theo dõi lịch tiêm chủng và bảo vệ sức khỏe toàn diện cho con yêu. Chỉ vài bước đơn giản, bạn sẽ có trong tay giải pháp quản lý thông minh và an toàn.Cùng chúng tôi xây dựng tương lai khỏe mạnh cho thế hệ mai sau!"
                        </div>
                        <div className='Regis-intro-khangdoan'>-Khang Đoàn-</div>
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

export default LoginPage