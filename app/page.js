'use client'
import Image from "next/image";
import { useState,useEffect } from "react";
import { firestore } from '@/firebase';
import { Box, Typography } from "@mui/material";
import { deleteDoc } from "firebase/firestore";

export default function Home() {
    const [inventory, setInventory] = useState([])
    const [open, setOpen] = useState(false)
    const [itemName, setItemName] = useState('')

    const updateInventory = async () => {
        const snapshot = query(collection(firestore, 'inventory'))
        const docs = await getDocs(snapshot)
        const inventoryList = []
        docs.forEach((doc) => {
            inventoryList.push({
                name: doc.id,
                ...doc.data(),
                })
            })
            setInventory(inventoryList)
            console.log(inventoryList)
}

useEffect(() => {
    updateInventory()
}, []) 

const addItem = async(item) => {
    const docRef = doc(collection(firestore, 'inventiry'), item)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
        const {quanity} = docSnap.data()
        await setDoc(docRef,{quanity: quantity + 1})
    }
    else{
        await setDoc(docRef, {quanity: 1})
    }

    await updateInventory()
}

const removeItem = async(item) => {
    const docRef = doc(collection(firestore, 'inventiry'), item)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
        const {quantity} = docSnap.data()
        if (quanity === 1){
            await deleteDoc(docRef)
        }
        else {
            await setDoc(docRef,{quanity: quantity - 1})
        }
    }

    await updateInventory()
}
     
    return (
    <Box>
        <Typography variants="h1">Inventory Management </Typography>
        {inventory.forEach((item)=> {
            console.log(item)
                return(
                <box>
                {item.name}
                {item.count}
                </box>
                )
        })}
    </Box>
    )
}
