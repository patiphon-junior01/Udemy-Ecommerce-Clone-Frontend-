// pages/UserPage
import React from 'react';
import { useState, useEffect } from "react";
import API from "../plugin/API/API"
import { Link } from 'react-router-dom';

function UserPage() {
  const [dataUser, SetdataUser] = useState([])

  useEffect(() => {
    fetchWalletData()
  }, [])

  const fetchWalletData = async () => {
    try {
      const resultAcount = await API.getExample.getExample2();
      // console.log(resultAcount?.response)
      SetdataUser(resultAcount?.response)
    } catch (err) {
      SetdataUser([])
      console.log(err)
    }
  };

  return (
    <div style={{ display: "flex", marginTop: "50px", justifyContent: "center" }}>
      <ul>
        {
          dataUser.map((data, index) => {
            return (
              <li key={index} style={{ marginBottom: "30px" }}>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "0px" }}>
                  <img src={`${data?.avatar}`} alt={data?.username} style={{ width: "100px", objectFit: "contain", height: "100px", marginBottom: "10px" }} />
                  <p style={{ marginBottom: "2px" }}>{data?.fname} {data?.lname}</p>
                  <p style={{ marginBottom: "2px" }}>Username : {data?.username}</p>
                  <Link to={`/user/${data.id}`} className="item-btn see-details-btn" style={{ textDecoration: "underline" }}>See details</Link>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default UserPage
