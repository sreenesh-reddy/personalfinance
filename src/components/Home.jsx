
import { useEffect, useState } from 'react';
import { auth, db } from './firebase/firebase';

import Navbar from '../newComponents/Navbar'
import HHome from '../newComponents/HHome'

import {useNavigate } from 'react-router-dom';
import useSignout from '../hooks/useSignout';

export default function Home() {
    const nav = new useNavigate()
    const { signout } = useSignout()
    const authinfo = JSON.parse(localStorage.getItem('auth'))
    useEffect(() => {
        if (auth.currentUser !== null || authinfo?.userId !== null) { nav('/') } else { nav('/auth') }
    }, [])


    return (
        <>
    <Navbar/>
    <HHome/>
        </>
    );
}