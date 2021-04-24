import React, { useEffect, useState } from 'react'
import Card from './Card'
import './ListCard.css'
import { db } from '../../firebase.js'
const ListCard = () => {
    const [links, setLinks] = useState([])
    useEffect(() => {
             db.collection("task")
                .onSnapshot((querySnapshot) => {
                    const docs = []
                    querySnapshot.forEach((doc)=>{
                            docs.push({...doc.data(),id:doc.id})
                    })
                    setLinks(docs)
                    console.log(docs)
                });
    }, [])

    return (
        <div className="listCard">
            <div className="listCard__head">
                <span>Id</span>
                <span>Title</span>
                <span>Link</span>
            </div>
            { links.map((item) => (
                <Card key={item.id} title={item.title} link={item.link} />
            ))}
        </div>
    )
}

export default ListCard
