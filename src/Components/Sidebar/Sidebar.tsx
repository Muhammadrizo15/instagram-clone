import React, { useEffect, useState, useRef } from 'react'
import './Sidebar.scss'
import { useLocation, Link } from 'react-router-dom'

function App() {
    let location = useLocation()

    const [home, IsHome] = useState(Boolean)
    const [profile, IsProfile] = useState(Boolean)
    const [explore, IsExplore] = useState(Boolean)
    const [inbox, IsInbox] = useState(Boolean)

    const [moreSetting, ismoreSettings] = useState(false)


    useEffect(() => {
        
        if (location.pathname == '/') {
            IsHome(true)
        } else if (location.pathname == '/profile') {
            IsProfile(true)
        } else if (location.pathname == '/explore') {
            IsExplore(true)
        } else if (location.pathname.includes('/inbox')) {
            IsInbox(true)
            console.log(inbox)
        }
    }, [])


    return (
        <div className="fixed">
            <div className='sidebar__wrap'>
                <div className="sidebar__content">
                    <Link to="/">
                        <img className='sidebar__instagram__logo' src="../images/logo.png" alt="" />
                    </Link>
                    <ul>
                        <Link to="/">
                            <li>
                                {/* homenotactive.png */}
                                {/* ./images/sidebar/home.png */}
                                <svg aria-label="Главная" className="_ab6-" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" style={home ? { fill: "#fff" } : { fill: "none" }}></path></svg>
                                <p>Главная</p>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <img src="../images/sidebar/search.png" alt="" />
                                <p>Поисковый запрос</p>
                            </li>
                        </Link>
                        <Link to="/explore">
                            <li>
                                <img src={explore ? "../images/sidebar/interestActive.png" : "../images/sidebar/interest.png"} alt="" />
                                <p>Интересное</p>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <img src="../images/sidebar/reels.png" alt="" />
                                <p>Reels</p>
                            </li>
                        </Link>
                        <Link to="/inbox">
                            <li>
                                {inbox ? <svg aria-label="Messenger" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 1.131a10.487 10.487 0 0 0-10.87 10.57 10.194 10.194 0 0 0 3.412 7.771l.054 1.78a1.67 1.67 0 0 0 2.342 1.476l1.935-.872a11.767 11.767 0 0 0 3.127.416 10.488 10.488 0 0 0 10.87-10.57 10.487 10.487 0 0 0-10.87-10.57Zm5.786 9.001-2.566 3.983a1.577 1.577 0 0 1-2.278.42l-2.452-1.84a.63.63 0 0 0-.759.002l-2.556 2.049a.659.659 0 0 1-.96-.874L8.783 9.89a1.576 1.576 0 0 1 2.277-.42l2.453 1.84a.63.63 0 0 0 .758-.003l2.556-2.05a.659.659 0 0 1 .961.874Z"></path></svg> : <svg aria-label="Messenger" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.739"></path><path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fillRule="evenodd"></path></svg>}
                                <p>Сообщения</p>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <img src="../images/sidebar/notification.png" alt="" />
                                <p>Уведомления</p>
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <img src="../images/sidebar/newpub.png" alt="" />
                                <p>Создать</p>
                            </li>
                        </Link>
                        <Link to="/profile">
                            <li>
                                {/*  */}
                                <img style={profile ? { border: "2px solid rgb(250, 250, 250)" } : { border: 0 }} className='sidebar__profile__image' src="../images/profileImage.jpg" alt="" />
                                <p>Профиль</p>
                            </li>
                        </Link>

                    </ul>
                    <div className="more__sidebar__end">
                        {
                            moreSetting && (
                                <div className='more__settings'>
                                    <ul>
                                        <li>
                                            <p>Настройки</p>
                                            <svg aria-label="Настройки" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        </li>
                                        <li>
                                            <p>Сохраненное</p>
                                            <svg aria-label="Сохраненное" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                                        </li>
                                        <li>
                                            <p>Переключить тему</p>
                                            <svg aria-label="Значок темы" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 16 16" width="24"><path d="M8.05 16C3.61 16 0 12.39 0 7.95 0 3.99 2.83.65 6.72 0c.49-.03.87.22.99.6.11.38-.05.78-.41 1-1.7.93-2.75 2.69-2.75 4.61 0 2.89 2.35 5.25 5.25 5.25a5.25 5.25 0 0 0 4.61-2.74c.19-.37.61-.54 1.01-.4.42.14.66.56.58 1.01A8.044 8.044 0 0 1 8.05 16zM5.8 1.32c-2.78.93-4.73 3.56-4.73 6.63 0 3.85 3.13 6.99 6.99 6.99 3.04 0 5.66-1.93 6.61-4.72a6.301 6.301 0 0 1-4.87 2.31c-3.48 0-6.31-2.83-6.31-6.31-.01-1.93.86-3.71 2.31-4.9zm9.54 7.89s0 .01 0 0c0 .01 0 0 0 0z" fill="currentColor"></path></svg>
                                        </li>
                                        <li>
                                            <p>Ваши действия</p>
                                            <svg aria-label="Ваши действия" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12 1.505a10.5 10.5 0 11-7.424 17.924" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><polyline fill="none" points="8.893 15.108 12 12 12.012 12.012 12.012 5.793" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><circle cx="7.24" cy="2.651" r="1.125"></circle><circle cx="3.515" cy="5.83" r="1.125"></circle><circle cx="1.636" cy="10.353" r="1.125"></circle><circle cx="2.01" cy="15.235" r="1.125"></circle></svg>
                                        </li>
                                        <li>
                                            <p>Сообщение о проблеме</p>
                                            <svg aria-label="Сообщение о проблеме" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path></svg>
                                        </li>
                                        <li>
                                            <p>Переключение между аккаунтами</p>
                                        </li>
                                        <li>
                                            <p>Выйти</p>
                                        </li>

                                    </ul>
                                </div>
                            )
                        }



                        <div className='sidebar__more__wrap' onClick={() => ismoreSettings(!moreSetting)}>
                            <img src="../images/Sidebar/more.png" alt="" />
                            <p>Ещё</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
