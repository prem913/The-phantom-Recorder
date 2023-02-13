import { Alert, Snackbar } from '@mui/material'
import React, { useEffect } from 'react'

export default function SnackBar(props) {
    const {type,message,open,setOpen} = props;
    console.log("type: " + type)
    const handleClose = ()=>{
        setOpen({
            message:"",
            type:"info"
        })
    }
    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}
