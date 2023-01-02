import React, { useEffect, useState } from 'react'
import './Explore.scss'
import axios from "axios";
import Popup from '../Popup'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'


function App() {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [goToR, isgoToR] = useState(false)
    const [count, setCount] = useState(0)
    const [post, setPost] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/posts').then((response) => {
            setPost(response.data);
        });
    }, [])


    return (
        <div className='explore__wrap wrapper'>
            <Sidebar />
            <div className="explore__content wrap__content">

                <div className="explore__wrapper__left">

                </div>

                <div className="explore__wrapper__left">
                    <div className="gellery__item__wrap">
                        <div className='gellery__item' onClick={() => { setShow2(true) }}>
                            {/* Photo */}
                            <img src="../images/explore/7/5.jpg" alt="" />
                            {/* Photo likes and coments */}
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes">
                                        <img src="../images/explore/heart.png" alt="" />
                                        56
                                    </li>
                                    <li className="gallery-item-comments">
                                        <img src="../images/explore/chat.png" alt="" />
                                        2
                                    </li>
                                </ul>
                            </div>
                            {/* What is this photo video or photo */}
                            <div className="gallery-item-type">
                                <span className="visually-hidden">
                                    <img src="../images/explore/photo.png" alt="" />
                                </span>
                            </div>
                        </div>
                        {show2 && <Popup props='../images/explore/7/5.jpg' />}
                    </div>
                    <div className="gellery__item__wrap">
                        <div className='gellery__item' onClick={() => { setShow(true) }}>
                            {/* Photo */}
                            <img src="../images/explore/2/1.jpg" alt="" />
                            {/* Photo likes and coments */}
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes">
                                        <img src="../images/explore/heart.png" alt="" />
                                        56
                                    </li>
                                    <li className="gallery-item-comments">
                                        <img src="../images/explore/chat.png" alt="" />
                                        2
                                    </li>
                                </ul>
                            </div>
                            {/* What is this photo video or photo */}
                            <div className="gallery-item-type">
                                <span className="visually-hidden">
                                    <img src="../images/explore/photo.png" alt="" />
                                </span>
                            </div>
                        </div>
                        {show && <Popup props='../images/explore/2/1.jpg' />}
                    </div>
                    <div className='gellery__item'>
                        {/* Photo */}
                        <img src="../images/explore/1/1.png" alt="" />
                        {/* Photo likes and coments */}
                        <div className="gallery-item-info">
                            <ul>
                                <li className="gallery-item-likes">
                                    <img src="../images/explore/heart.png" alt="" />
                                    56
                                </li>
                                <li className="gallery-item-comments">
                                    <img src="../images/explore/chat.png" alt="" />
                                    2
                                </li>
                            </ul>
                        </div>
                        {/* What is this photo video or photo */}
                        <div className="gallery-item-type">
                            <span className="visually-hidden">
                                <img src="../images/explore/photo.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className='gellery__item'>
                        {/* Photo */}
                        <img src="../images/explore/1/2.png" alt="" />
                        {/* Photo likes and coments */}
                        <div className="gallery-item-info">
                            <ul>
                                <li className="gallery-item-likes">
                                    <img src="../images/explore/heart.png" alt="" />
                                    56
                                </li>
                                <li className="gallery-item-comments">
                                    <img src="../images/explore/chat.png" alt="" />
                                    2
                                </li>
                            </ul>
                        </div>
                        {/* What is this photo video or photo */}
                        <div className="gallery-item-type">
                            <span className="visually-hidden">
                                <img src="../images/explore/photo.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className='gellery__item ffafd'>
                        {/* Photo */}
                        <img src="../images/explore/5/1.png" alt="" />
                        {/* Photo likes and coments */}
                        <div className="gallery-item-info">
                            <ul>
                                <li className="gallery-item-likes">
                                    <img src="../images/explore/heart.png" alt="" />
                                    56
                                </li>
                                <li className="gallery-item-comments">
                                    <img src="../images/explore/chat.png" alt="" />
                                    2
                                </li>
                            </ul>
                        </div>
                        {/* What is this photo video or photo */}
                        <div className="gallery-item-type">
                            <span className="visually-hidden">
                                <img src="../images/explore/photo.png" alt="" />
                            </span>
                        </div>
                    </div>







                </div>
                <div className="explore__wrapper__left">
                    <div className="gellery__item__wrap">
                        <div className='gellery__item' onClick={() => { setShow2(true) }}>
                            {/* Photo */}
                            <img src="../images/explore/7/5.jpg" alt="" />
                            {/* Photo likes and coments */}
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes">
                                        <img src="../images/explore/heart.png" alt="" />
                                        56
                                    </li>
                                    <li className="gallery-item-comments">
                                        <img src="../images/explore/chat.png" alt="" />
                                        2
                                    </li>
                                </ul>
                            </div>
                            {/* What is this photo video or photo */}
                            <div className="gallery-item-type">
                                <span className="visually-hidden">
                                    <img src="../images/explore/photo.png" alt="" />
                                </span>
                            </div>
                        </div>
                        {show2 && <Popup props='../images/explore/7/5.jpg' />}
                    </div>
                    <div className="gellery__item__wrap">
                        <div className='gellery__item' onClick={() => { setShow(true) }}>
                            {/* Photo */}
                            <img src="../images/explore/2/1.jpg" alt="" />
                            {/* Photo likes and coments */}
                            <div className="gallery-item-info">
                                <ul>
                                    <li className="gallery-item-likes">
                                        <img src="../images/explore/heart.png" alt="" />
                                        56
                                    </li>
                                    <li className="gallery-item-comments">
                                        <img src="../images/explore/chat.png" alt="" />
                                        2
                                    </li>
                                </ul>
                            </div>
                            {/* What is this photo video or photo */}
                            <div className="gallery-item-type">
                                <span className="visually-hidden">
                                    <img src="../images/explore/photo.png" alt="" />
                                </span>
                            </div>
                        </div>
                        {show && <Popup props='../images/explore/2/1.jpg' />}
                    </div>
                    <div className='gellery__item'>
                        {/* Photo */}
                        <img src="../images/explore/1/1.png" alt="" />
                        {/* Photo likes and coments */}
                        <div className="gallery-item-info">
                            <ul>
                                <li className="gallery-item-likes">
                                    <img src="../images/explore/heart.png" alt="" />
                                    56
                                </li>
                                <li className="gallery-item-comments">
                                    <img src="../images/explore/chat.png" alt="" />
                                    2
                                </li>
                            </ul>
                        </div>
                        {/* What is this photo video or photo */}
                        <div className="gallery-item-type">
                            <span className="visually-hidden">
                                <img src="../images/explore/photo.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className='gellery__item'>
                        {/* Photo */}
                        <img src="../images/explore/1/2.png" alt="" />
                        {/* Photo likes and coments */}
                        <div className="gallery-item-info">
                            <ul>
                                <li className="gallery-item-likes">
                                    <img src="../images/explore/heart.png" alt="" />
                                    56
                                </li>
                                <li className="gallery-item-comments">
                                    <img src="../images/explore/chat.png" alt="" />
                                    2
                                </li>
                            </ul>
                        </div>
                        {/* What is this photo video or photo */}
                        <div className="gallery-item-type">
                            <span className="visually-hidden">
                                <img src="../images/explore/photo.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <div className='gellery__item ffafd'>
                        {/* Photo */}
                        <img src="../images/explore/5/1.png" alt="" />
                        {/* Photo likes and coments */}
                        <div className="gallery-item-info">
                            <ul>
                                <li className="gallery-item-likes">
                                    <img src="../images/explore/heart.png" alt="" />
                                    56
                                </li>
                                <li className="gallery-item-comments">
                                    <img src="../images/explore/chat.png" alt="" />
                                    2
                                </li>
                            </ul>
                        </div>
                        {/* What is this photo video or photo */}
                        <div className="gallery-item-type">
                            <span className="visually-hidden">
                                <img src="../images/explore/photo.png" alt="" />
                            </span>
                        </div>
                    </div>







                </div>


            </div>
        </div>
    );
}

export default App;
