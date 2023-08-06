import { inctance } from "@/axios"
import { useDispatch } from "react-redux"
import { getMe } from "@/redux/Slice/authSlice"
import { AppDispatch } from "@/redux/store"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { getRefresh } from "@/redux/Slice/authSlice"
const Home = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    useEffect(() => {
    const checkAuth = async () => {

  
        const accessToken = localStorage.getItem('accessToken')
        const refreshToken = localStorage.getItem('refreshToken')

        let data
        if(accessToken){
            data = await dispatch(getMe()); // проблема
            console.log(data, 'data')
            if(data.hasOwnProperty('error')){
                checkRefresh(refreshToken)
            } 
        }
        if(!accessToken || !refreshToken){
            router.push('/auth/login') // проблема
        }
    }
    const checkRefresh = async (refreshToken: any) => {
        const obj = {
            refreshToken: refreshToken
        } 
    
        const data = await dispatch(getRefresh(obj)) // тут
        if(data.hasOwnProperty('error')){
            router.push('/auth/login') // тут
            return;
        } else {
            localStorage.setItem('accessToken', data.payload.newAccessToken)
        }

    }
    
    }, [])
    return (
        <div>
            <input type="text" />
            <input type="text" />
        </div>
    )
}

export default Home