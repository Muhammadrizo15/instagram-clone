import React, { useEffect } from 'react'
import './Home.scss'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'

function App() {

  function likePost() {
    let like = document.querySelector('.like')
    let unlike = document.querySelector('.unlike')
    like?.classList.remove('display-none')
    unlike?.classList.add('display-none')

  }


  return (
    <div className='home__wrap wrapper'>
      <Sidebar />
      <div className="home__content ">
        <div className="posts__and__stories__wrap">
          <div className="posts__and__storis">
            <div className="user user__active__with__stories">
              <img src="../images/users/1.jpg" alt="" />
              <p>Ayubkhan</p>
            </div>
            <div className="user">
              <img src="../images/users/2.jpg" alt="" />
              <p>Ayubkhan</p>
            </div>
            <div className="user">
              <img src="../images/users/3.jpg" alt="" />
              <p>Ayubkhan</p>
            </div>
            <div className="user">
              <img src="../images/users/4.jpg" alt="" />
              <p>Ayubkhan</p>
            </div>
            <div className="user">
              <img src="../images/users/5.jpg" alt="" />
              <p>Ayubkhan</p>
            </div>
          </div>
          <div className="posts">
            <div className="post">
              <div className="user which__user__this__post">
                <Link to="/profile">
                  <div className='which__user__this__post__info'>
                    <img src="../images/users/1.jpg" alt="" />
                    <p>Ayubkhan</p>
                  </div>
                </Link>

                <div className="icon__with__padding">
                  <svg aria-label="Дополнительно" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                </div>
              </div>
              <div className="posts__image">
                <img src="../images/explore/7/1.jfif" alt="" />
              </div>
              <div className="posts__option">
                <div className='post__like__coment__send'>
                  <div className='icon__with__padding'>
                    <svg aria-label="нравится" className='display-none like' color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    <svg aria-label="Не Нравится" color="#fff" fill="#fff" onClick={() => likePost()} className=' unlike' height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                  </div>
                  <div className='icon__with__padding'>
                    <svg aria-label="Комментировать" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <div className='icon__with__padding'>
                    <svg aria-label="Поделиться публикацией" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                  </div>
                </div>
                <div className='icon__with__padding post__save'>
                  <svg aria-label="Сохранить" color="#fff" fill="#fff" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                </div>
              </div>
              <div className="posts__info">
                <p className='howmany__licked__this__post'><span>13 531</span>  отметок "Нравится"</p>
                <p><span>beny.jdm</span> Clean as your heart 🤍</p>
                <a href="#">Посмотреть все комментарии (9)</a>
                <p className='date__of__publicated'>5 дней назад</p>
              </div>
              <div className="reply__coment">
                <div className="icon__with__padding">
                  <svg aria-label="Смайлик" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                </div>
                <input type="text" placeholder='Добавьте комментарий...' />
                <button>Опубликовать</button>
              </div>
            </div>
            <div className="post">
              <div className="user which__user__this__post">
                <div className='which__user__this__post__info'>
                  <img src="../images/users/2.jpg" alt="" />
                  <p>Ayubkhan</p>
                </div>
                <div className="icon__with__padding">
                  <svg aria-label="Дополнительно" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                </div>
              </div>
              <div className="posts__image">
                <img src="../images/explore/7/2.jfif" alt="" />
              </div>
              <div className="posts__option">
                <div className='post__like__coment__send'>
                  <div className='icon__with__padding'>
                    <svg aria-label="нравится" className='display-none like' color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    <svg aria-label="Не Нравится" color="#fff" fill="#fff" onClick={() => likePost()} className=' unlike' height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                  </div>
                  <div className='icon__with__padding'>
                    <svg aria-label="Комментировать" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <div className='icon__with__padding'>
                    <svg aria-label="Поделиться публикацией" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                  </div>
                </div>
                <div className='icon__with__padding post__save'>
                  <svg aria-label="Сохранить" color="#fff" fill="#fff" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                </div>
              </div>
              <div className="posts__info">
                <p className='howmany__licked__this__post'><span>13 531</span>  отметок "Нравится"</p>
                <p><span>beny.jdm</span> Clean as your heart 🤍</p>
                <a href="#">Посмотреть все комментарии (9)</a>
                <p className='date__of__publicated'>5 дней назад</p>
              </div>
              <div className="reply__coment">
                <div className="icon__with__padding">
                  <svg aria-label="Смайлик" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                </div>
                <input type="text" placeholder='Добавьте комментарий...' />
                <button>Опубликовать</button>
              </div>
            </div>
            <div className="post">
              <div className="user which__user__this__post">
                <div className='which__user__this__post__info'>
                  <img src="../images/users/1.jpg" alt="" />
                  <p>Ayubkhan</p>
                </div>
                <div className="icon__with__padding">
                  <svg aria-label="Дополнительно" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                </div>
              </div>
              <div className="posts__image">
                <img src="../images/explore/7/1.jfif" alt="" />
              </div>
              <div className="posts__option">
                <div className='post__like__coment__send'>
                  <div className='icon__with__padding'>
                    <svg aria-label="нравится" className='display-none like' color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    <svg aria-label="Не Нравится" color="#fff" fill="#fff" onClick={() => likePost()} className=' unlike' height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                  </div>
                  <div className='icon__with__padding'>
                    <svg aria-label="Комментировать" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <div className='icon__with__padding'>
                    <svg aria-label="Поделиться публикацией" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                  </div>
                </div>
                <div className='icon__with__padding post__save'>
                  <svg aria-label="Сохранить" color="#fff" fill="#fff" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                </div>
              </div>
              <div className="posts__info">
                <p className='howmany__licked__this__post'><span>13 531</span>  отметок "Нравится"</p>
                <p><span>beny.jdm</span> Clean as your heart 🤍</p>
                <a href="#">Посмотреть все комментарии (9)</a>
                <p className='date__of__publicated'>5 дней назад</p>
              </div>
              <div className="reply__coment">
                <div className="icon__with__padding">
                  <svg aria-label="Смайлик" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                </div>
                <input type="text" placeholder='Добавьте комментарий...' />
                <button>Опубликовать</button>
              </div>
            </div>
            <div className="post">
              <div className="user which__user__this__post">
                <div className='which__user__this__post__info'>
                  <img src="../images/users/3.jpg" alt="" />
                  <p>Ayubkhan</p>
                </div>
                <div className="icon__with__padding">
                  <svg aria-label="Дополнительно" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                </div>
              </div>
              <div className="posts__image">
                <img src="../images/explore/7/3.jpg" alt="" />
              </div>
              <div className="posts__option">
                <div className='post__like__coment__send'>
                  <div className='icon__with__padding'>
                    <svg aria-label="нравится" className='display-none like' color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    <svg aria-label="Не Нравится" color="#fff" fill="#fff" onClick={() => likePost()} className=' unlike' height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                  </div>
                  <div className='icon__with__padding'>
                    <svg aria-label="Комментировать" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <div className='icon__with__padding'>
                    <svg aria-label="Поделиться публикацией" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                  </div>
                </div>
                <div className='icon__with__padding post__save'>
                  <svg aria-label="Сохранить" color="#fff" fill="#fff" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                </div>
              </div>
              <div className="posts__info">
                <p className='howmany__licked__this__post'><span>13 531</span>  отметок "Нравится"</p>
                <p><span>beny.jdm</span> Clean as your heart 🤍</p>
                <a href="#">Посмотреть все комментарии (9)</a>
                <p className='date__of__publicated'>5 дней назад</p>
              </div>
              <div className="reply__coment">
                <div className="icon__with__padding">
                  <svg aria-label="Смайлик" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                </div>
                <input type="text" placeholder='Добавьте комментарий...' />
                <button>Опубликовать</button>
              </div>
            </div>
            <div className="post">
              <div className="user which__user__this__post">
                <div className='which__user__this__post__info'>
                  <img src="../images/users/1.jpg" alt="" />
                  <p>Ayubkhan</p>
                </div>
                <div className="icon__with__padding">
                  <svg aria-label="Дополнительно" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                </div>
              </div>
              <div className="posts__image">
                <img src="../images/explore/7/4.jfif" alt="" />
              </div>
              <div className="posts__option">
                <div className='post__like__coment__send'>
                  <div className='icon__with__padding'>
                    <svg aria-label="нравится" className='display-none like' color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    <svg aria-label="Не Нравится" color="#fff" fill="#fff" onClick={() => likePost()} className=' unlike' height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                  </div>
                  <div className='icon__with__padding'>
                    <svg aria-label="Комментировать" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                  </div>
                  <div className='icon__with__padding'>
                    <svg aria-label="Поделиться публикацией" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                  </div>
                </div>
                <div className='icon__with__padding post__save'>
                  <svg aria-label="Сохранить" color="#fff" fill="#fff" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                </div>
              </div>
              <div className="posts__info">
                <p className='howmany__licked__this__post'><span>13 531</span>  отметок "Нравится"</p>
                <p><span>beny.jdm</span> Clean as your heart 🤍</p>
                <a href="#">Посмотреть все комментарии (9)</a>
                <p className='date__of__publicated'>5 дней назад</p>
              </div>
              <div className="reply__coment">
                <div className="icon__with__padding">
                  <svg aria-label="Смайлик" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                </div>
                <input type="text" placeholder='Добавьте комментарий...' />
                <button>Опубликовать</button>
              </div>
            </div>
          </div>
        </div>
        <div className="other__accaunt__and__followers">
          <div className="own__accaunt">
            <img src="../images/profileImage.jpg" alt="" />
            <div>
              <h4>muhammadrizo20.04</h4>
              <p>Muhammadrizo</p>
            </div>
            <span>Переключиться</span>
          </div>
          <div className="recomentded__info">
            <p>Рекомендации для вас</p>
            <a href="#">Все</a>
          </div>
          <div className="recomended__accaunts">
            <div className="recomended__account__wrap">
              <div className="recomended__accaunt">
                <div className='recomended__user__main__info'>
                  <img src="../images/users/1.jpg" alt="" />
                  <div className='who__is__this__user'>
                    <h4>m1racleo</h4>
                    <span>
                      Рекомендации для вас
                    </span>
                  </div>
                </div>
                <button>
                  Подписаться
                </button>
              </div>
            </div>
            <div className="recomended__account__wrap">
              <div className="recomended__accaunt">
                <div className='recomended__user__main__info'>
                  <img src="../images/users/2.jpg" alt="" />
                  <div className='who__is__this__user'>
                    <h4>amv_viper</h4>
                    <span>
                      Рекомендации для вас
                    </span>
                  </div>
                </div>
                <button>
                  Подписаться
                </button>
              </div>
            </div>
            <div className="recomended__account__wrap">
              <div className="recomended__accaunt">
                <div className='recomended__user__main__info'>
                  <img src="../images/users/3.jpg" alt="" />
                  <div className='who__is__this__user'>
                    <h4>zerox_ae</h4>
                    <span>
                      Рекомендации для вас
                    </span>
                  </div>
                </div>
                <button>
                  Подписаться
                </button>
              </div>
            </div>
            <div className="recomended__account__wrap">
              <div className="recomended__accaunt">
                <div className='recomended__user__main__info'>
                  <img src="../images/users/1.jpg" alt="" />
                  <div className='who__is__this__user'>
                    <h4>m1racleo</h4>
                    <span>
                      Рекомендации для вас
                    </span>
                  </div>
                </div>
                <button>
                  Подписаться
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
