import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "@/redux/Slice/authSlice"
import { AppDispatch } from "@/redux/store"
import { useRouter } from "next/router"
const RegisterPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
type data = {
    username: string
    email: string
    pass: string
}



    const [inputState, setInputState] = useState<data>({
        username: '',
        email: '',
        pass: ''
    })  
    const Submited = async (event: any) => {
        event.preventDefault();
        try {
            const data = await dispatch(register(inputState));
                localStorage.setItem('accessToken', data.payload.accessToken)
                localStorage.setItem('refreshToken', data.payload.refreshToken)
                router.push('/project/home')
                console.log('assxa')
            } catch (error){
                return;
            }
      };

    const inputOnChange = (event: any) => {
        // event.preventDefault()
        setInputState({
            ...inputState,
            [event.target.name]: event.target.value
        })
    }



    // useEffect(() => {
    //     if (!halo) {
    //       router.push("/auth/login");
    //     }
    //   }, [halo, router]);

    return (
        <div>
        <form onSubmit={Submited} >
        <input
            className="appearance-none w-72 px-3 py-2 leading-tight text-gray-700 border border-gray-400 rounded focus:outline-none focus:border-blue-500 mr-5"
            type="text"
            name="username"
            placeholder='Username'
            value={inputState.username}
            onChange={inputOnChange}
        />
        <input
            className="appearance-none w-72 px-3 py-2 leading-tight text-gray-700 border border-gray-400 rounded focus:outline-none focus:border-blue-500 mr-5"
            type="email"
            placeholder='Email'
            name="email"
            value={inputState.email}
            onChange={inputOnChange}
        />
        <input
        minLength={8}
            className="appearance-none w-72 px-3 py-2 leading-tight text-gray-700 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
            type="password"
            placeholder='Password'
            name="pass"
            value={inputState.pass}
            onChange={inputOnChange}
        />

         <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 ml-4">
    Submit
  </button>
  </form>
    </div>
    )
    
}

export default RegisterPage