import React from 'react';
import '../App.css';
import {NavLink} from "react-router-dom";

function Menu(props) {
    const loginStatus = sessionStorage.getItem('loginok');

    return (
        <div>
            <ul className={'menu'}>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/member/form"}>회원가입</NavLink>
                </li>
                <li>
                    <NavLink to={"/member/list"}>회원목록</NavLink>
                </li>
                <li>
                    <NavLink to={"/board/list/1"}>게시판</NavLink>
                </li>

                    {loginStatus === 'yes' ? (
                        <li style={{width:'250px',backgroundColor:'darkcyan',color:'white',cursor:'pointer'}}>
                            <NavLink to={'/'}
                        onClick={()=>{
                            let b = window.confirm("로그아웃하겠습니까?")
                            if(b) {
                                // 세션 값 제거
                                sessionStorage.removeItem('loginok');
                                sessionStorage.removeItem('myid');
                                sessionStorage.removeItem('myname');
                                // 페이지 재로드하여 "/"로 이동
                                window.location.reload();
                            }else {
                                alert("ㅗ")
                            }
                        }}>로그아웃&nbsp;&nbsp;&nbsp;
                                <b style={{color:'yellow'}}>{sessionStorage.myname}({sessionStorage.myid})님</b></NavLink>
                        </li>) : (
                            <li>
                                <NavLink to={'/login'}>로그인</NavLink>
                            </li>
                    )}

            </ul>
        </div>
    );
}

export default Menu;