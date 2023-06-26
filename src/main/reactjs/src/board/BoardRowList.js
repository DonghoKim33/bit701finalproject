import React from 'react';
import {NavLink} from "react-router-dom";
import noimage from '../image/noimage.png';
function BoardRowList(props) {
    const photourl1=process.env.REACT_APP__SMALL_BOARDURL1;
    const photourl2=process.env.REACT_APP__SMALL_BOARDURL2;

    const {idx,no,row,currentPage}=props;
    return (
        <tr>
            <td>{no-idx}</td>
            <td>
                <NavLink to={`/board/detail/${row.num}/${currentPage}`} style={{textDecoration:'none',color:'black',cursor:'pointer'}}>
                    {row.photo?
                        <img alt="" src={`${photourl1}${row.photo}${photourl2}`} />
                     :
                        <img alt="" src={noimage} style={{width:'40px',marginRight:'10px'}}/>
                    }
                    <b>{row.subject}</b>
                </NavLink>
            </td>
            <td>{row.myname}</td>
            <td>{row.writeday}</td>
            <td>{row.readcount}</td>
        </tr>
    );
}

export default BoardRowList;