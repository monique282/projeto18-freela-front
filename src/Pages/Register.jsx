
import styled from "styled-components";
import slogan from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { AuthContext } from "./Contex";

export default function Registe() {

    const [name, setName] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();


    function register(e) {
        e.preventDefault();

        // se as senhas estão iguais ou nao 
        if (password !== confirmPassword) {
            return alert("Senhas informadas estão divergentes!");
        };

        const url = `http://localhost:5000/signup`;
        //para quando tiver o deploy 
        // const url = `${import.meta.env.VITE_API_URL}/signup`

        // dados a ser enviados para o back
        const data = {
            name: name,
            email: email,
            cpf: cpf,
            phone: phone,
            password: password,
            confirmPassword: confirmPassword
        };

        const promise = axios.post(url, data)
        setDisabled(true);
        promise.then(() => navigate('/signin'));
        promise.catch(err => {
            alert(err.response.data);
            setDisabled(false);
        });

    }
    return (
        <Total>
            <RegisteLogin>
                <Sales to={'/'} >Home</Sales>
                <Login to={'/signin'} >Entra</Login>
                <Register to={'/signup'}>Cadastra-se</Register>

            </RegisteLogin>
            <Slogan>
                <img src={slogan} />
            </Slogan>
            <SingUpContainer>
                <form onSubmit={register}>
                    <Input placeholder="Name" type="text" required value={name} onChange={(e) => setName(e.target.value)} disabled={disabled} />
                    <Input placeholder="E-mail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} />
                    <Input placeholder="CPF" type="text" required value={cpf} onChange={(e) => setCpf(e.target.value)} disabled={disabled} />
                    <Input placeholder="Telefone de contato" type="text" required value={phone} onChange={(e) => setPhone(e.target.value)} disabled={disabled} />
                    <Input placeholder="Password" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled} />
                    <Input placeholder="Confirm password" type="password" autoComplete="new-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} disabled={disabled} />
                    <button type="submit" disabled={disabled}>
                        {disabled ? (
                            <ThreeDots width={32} height={21} border-radius={4.5} background-color="#d540e9" color="#FFFFFF" font-size={9} />
                        ) : (
                            <p>Criar conta</p>
                        )}
                    </button>
                </form>
            </SingUpContainer>

        </Total>
    )
};

const Total = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
`
const RegisteLogin = styled.div`
    width: 100%;
    height: 18px;
    display: flex;
    justify-content: flex-end;
    margin-top: 60px;
    text-decoration: none;
`
const Sales = styled(Link)`
    width: 80px;
    height: 18px;
    display: flex;
    margin-left: 20px;
    text-decoration: none;
    color: #9C9C9C;
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Login = styled(Link)`
    width: 80px;
    height: 18px;
    display: flex;
    margin-left: 20px;
    text-decoration: none;
    color: #9C9C9C;
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Register = styled(Link)`
    width: 200px;
    height: 30px;
    display: flex;
    margin-left: 10px;
    margin-right: 100px;
    text-decoration: none;
    color: #d540e9;
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Slogan = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 17px;
`
const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

            button{
                color: wheat;
                width: 769px;
                height: 60px;
                border-radius: 10px;
                margin-top: 25px;
                border-radius: 12px;
                border: 1px solid rgb(230, 68, 225);
                background: #FFF;
                box-shadow: 0px 4px 24px 0px rgb(230, 68, 225);
                background-color: #d540e9;
            }
    } 
`
const Input = styled.input`
    width: 769px;
    height: 60px;
    margin-top: 10px;
    border-radius: 12px;
    border: 1px solid rgba(216, 47, 232, 0.916);
    background: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(216, 47, 232, 0.916);
    outline: none;
    padding: 15px;
    font-size: 15px;
`