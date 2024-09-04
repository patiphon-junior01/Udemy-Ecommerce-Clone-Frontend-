// pages/UserPageDetail
import React from 'react';
import { useState, useEffect } from "react";
import API from "../plugin/API/API"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function UserPageDetail() {
  const { id } = useParams();
  const [dataUser, SetdataUser] = useState({})
  const [Status, Setstatus] = useState(false)

  useEffect(() => {
    fetchWalletData()
  }, [])

  const fetchWalletData = async () => {
    try {
      const resultAcount = await API.getExample.getExampleOne(id);
      console.log(resultAcount?.response?.user)
      if (resultAcount?.response.status == "ok") {
        SetdataUser(resultAcount?.response?.user)
        Setstatus(true)
        return;
      }
      // SetdataUser(resultAcount?.response)
      Setstatus(false)
    } catch (err) {
      SetdataUser([])
      Setstatus(false)
      console.log(err)
    }
  };

  return (
    <div style={{ display: "flex", marginTop: "50px", justifyContent: "center" }}>
      {Status && (
        <ul>
          <li style={{ marginBottom: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "0px" }}>
              <img src={`${dataUser?.avatar}`} alt={dataUser?.username} style={{ width: "100px", objectFit: "contain", height: "100px", marginBottom: "10px" }} />
              <p style={{ marginBottom: "2px" }}>{dataUser?.fname} {dataUser?.lname}</p>
              <p style={{ marginBottom: "2px" }}>Username : {dataUser?.username}</p>
              <Link to={`/user/`} className="item-btn see-details-btn" style={{ textDecoration: "underline" }}>Back</Link>
            </div>
          </li>
        </ul>
      )}
    </div>
  )
}

export default UserPageDetail
