import { h, useState } from 'fre'
import { A } from '../use-route'
import { post } from '../util/post'
import './login.css'

export default function Register() {
    const [name, setName] = useState("")
    const [pwd, setPwd] = useState("")

    function changeName(v){
        setName(v)
    }

    function changePwd(v){
        setPwd(v)
    }

    function login(){
        console.log(name, pwd)

        post("https://api.clicli.cc/login",{name, pwd}).then(res=>{
            console.log(res)
        })
    }
    return <div class="login">
        <li><h1>登录</h1></li>
        <li><input type="text" placeholder="昵称" onInput={(e)=>changeName(e.target.value)}/></li>
        <li><input type="text" placeholder="密码" onInput={(e)=>changePwd(e.target.value)}/></li>
        <li><button onClick={login}>注册</button></li>
        <li><A href="/">注册</A></li>
    </div>
}