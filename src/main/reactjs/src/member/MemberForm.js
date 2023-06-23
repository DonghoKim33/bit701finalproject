import React, {useState} from 'react';
import '../App.css';
import DaumPostcodeEmbed from "react-daum-postcode";
function MemberForm(props) {
    const [openPostcod, setOpenPostcode]=useState(false);
    const [myid,setMyid]=useState('');
    const [mypass,setMypass]=useState('');
    const [myaddress,setMyaddress]=useState('');
    const [myname,setMyname]=useState('');
    const [idcount,setIdcount]=useState(0);

    const onSubmitEvent=(e)=>{
        e.preventDefault();//기본 이벤트 무효화
    }
    return(
        <div>
            <form onSubmit={onSubmitEvent}>
                <table className={'table'} style={{width:'500px'}}>
                    <caption align={"top"}><b>회원가입</b></caption>
                    <tbody>
                        <tr>
                            <th style={{width:'100px',backgroundColor:'#b0e0e6'}}>이름</th>
                            <td>
                                <input type={'text'} className={'form-control'} placeholder={'이름입력'} required value={myname} onchang={(e)=>setMyname(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <th style={{width:'100px',backgroundColor:'#b0e0e6'}}>아이디</th>
                            <td ClassName={'input-group'}>
                                <input type={'text'} className={'form-control'} placeholder={'아이디'} required value={myid} onchange={(e)=>setMyid(e.target.value)}/>
                                <button type={'button'} className={'btn btn-outline-danger btn-sm'}>중복확인</button>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2} align={'center'}>
                                <button type={'submit'} className={'btn btn-outline-info'} style={{width:'100px'}}>가입하기</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default MemberForm;