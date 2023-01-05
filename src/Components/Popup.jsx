import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Popup(props) {

    const [show, setShow] = useState(true)
    const [goToR, isgoToR] = useState(false)

    let image = props.postimage
    console.log(props);
    // console.log(ChangePopup);
    console.log(image);

    return (
        <div className="popup">
            <div className="popupdetailfwpruhwe" onClick={() => { setShow(false) }} style={show ? null : { display: 'none' }}>
                <div className="modfdfsdafasal-content" style={{ zIndex: 9879789789789 }}>
                    <div className="modal-content model-content-fooo popup__post">
                        <div className="closepopupicon" onClick={props.ChangePopup}>
                            <svg aria-label="Закрыть" className="closepopup" color="#ffffff" fill="#ffffff" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Закрыть</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
                        </div>
                        <div className="post__image">
                            <img src={image} alt="" />
                        </div>
                        <div className="post__options__wrap">
                            <div className="owner__post">
                                <div className='owner__post__info'>
                                    <img src="../images/users/3.jpg" alt="" />
                                    <p className='fw600'>sumi_says_</p>
                                    <span className='dott'>•</span>
                                    <span>Подписаться</span>
                                </div>
                                <svg aria-label="Дополнительно" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                            </div>
                            <div className="post__comment__wrap">
                                <div className="post__comment">
                                    <img src="../images/users/3.jpg" alt="" />
                                    <div className='post__comment__text'>
                                        <div className="post__comment__message">
                                            <Link to="/profile" className='fw600'>
                                                itach.chapter
                                            </Link>
                                            <p>Check website in bio</p>
                                        </div>
                                        <span>3 ч.</span>
                                    </div>
                                </div>
                                <div className="post__comment">
                                    <img src="../images/users/3.jpg" alt="" />
                                    <div className='post__comment__text'>
                                        <div className="post__comment__message">
                                            <p>
                                                <Link to="/profile" className='fw600'>
                                                    itach.chapter
                                                </Link>
                                                A decir verdad, ser pobre es difícil, ganar dinero también lo es. Desde que perdí mi trabajo debido a la pandemia, la vida no ha sido fácil para mí. No hay forma de alimentarme a mí y a mi familia. ♥♥♥ Hasta que encontré una publicación de un joven sobre cómo ganó $22,000 invirtiendo en bitcoin con @Lisa_trade_home_67. No tenía idea sobre Bitcoin, así que envié un mensaje privado a la plataforma que está a cargo de una señora (Lisa ♥♥♥), para obtener más información sobre cómo funciona. Después de la maravillosa y satisfactoria explicación, invierto $800 que tomé prestados. Para mi mayor sorpresa recibí $7,400.60 luego de 3 días de inversión. Vengo de una familia muy pobre en San Miguelito, Panamá. Ganar dinero no ha sido fácil, pero desde que comenzó a invertir con esta plataforma, obtuvo una gran cantidad de ganancias y ganó $ 63,000. Recomiendo mucho esta plataforma, envíale un mensaje a @Lisa_trade_home_67 para que pueda comenzar a obtener buenos ingresos. ¡No pierdas esta oportunidad!
                                            </p>
                                        </div>
                                        <span>3 ч.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="post__likes__and__saves__wrap">
                                <div className="post__likes__and__saves">
                                    <div className="post__like__com__send">
                                        <div className="icon__with__padding">
                                            <svg aria-label="Нравится" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                        </div>
                                        <div className="icon__with__padding">
                                            <svg aria-label="Комментировать" className="_ab6-" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                        </div>
                                        <div className="icon__with__padding">
                                            <svg aria-label="Поделиться публикацией" className="_ab6-" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                        </div>
                                    </div>
                                    <div className="icon__with__padding">
                                        <svg aria-label="Сохранить" className="_ab6-" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                                    </div>
                                </div>
                                <div className="how__many__user__licked__this__post">
                                    <p>Нравится <Link to="/profile" className='fw600'>Muhammadrizo20.04</Link> и другим</p>
                                    <span className='when__this__post__publicated'>2 дней назад</span>
                                </div>
                            </div>
                            <div className="post__send__coment">
                                <div className="icon__with__padding">
                                    <svg aria-label="Смайлик" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                </div>
                                <input type="text" placeholder='Добавьте комментарий...' />
                                <button>Опубликовать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;