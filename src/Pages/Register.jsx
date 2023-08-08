
import styled from "styled-components";
import slogan from "../assets/pants.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
//import { AuthContext } from "./Contex";

export default function Registe() {

    const [nome, setNome] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const navigate = useNavigate();


    function cadastro(e) {
        e.preventDefault();
        // se as senhas estão iguais ou nao 
        if (senha != confirmarSenha) {
            return alert("Senhas informadas estão divergentes!");
        }

        const url = `http://localhost:5000/cadastro`;
        // para quando tiver o deploy 
        // const = `${import.meta.env.VITE_API_URL}/cadastro`

        const dados = {
            nome: nome,
            email: email,
            senha: senha
        };
        const promise = axios.post(url, dados)
        setDisabled(true);
        promise.then(resposta => navigate('/signin'));
        promise.catch(resposta => {
            alert(resposta.response.data.message);
            setDisabled(false);
        })
    }
    return (
        <Total>
            <RegisteLogin>
                <Login to={'/signin'} >Entra</Login>
                <Register to={'/signup'}>Cadastra-se</Register>
            </RegisteLogin>
            <Slogan>
                <img src={slogan} />
            </Slogan>
            <SingInContainer>
                <form onSubmit={cadastro}>
                    <Input placeholder="Nome" type="text" required value={nome} onChange={(e) => setNome(e.target.value)} disabled={disabled} data-test="name" />
                    <Input placeholder="E-mail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled} data-test="email" />
                    <Input placeholder="Senha" type="password" autoComplete="new-password" required value={senha} onChange={(e) => setSenha(e.target.value)} disabled={disabled} data-test="password" />
                    <Input placeholder="Confirme a senha" type="password" autoComplete="new-password" required value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} disabled={disabled} data-test="conf-password" />
                    <button type='submit' disabled={disabled} data-test="sign-in-submit">
                        {disabled ? (
                            <ThreeDots width={32} height={21} border-radius={4.5} background-color="#A328D6" color="#FFFFFF" font-size={9} />
                        ) : (
                            <p>Criar conta</p>
                        )}
                    </button>
                </form>
            </SingInContainer>

        </Total>
    )
}

const Total = styled.div`
    width: 100%;
    height: 100%;
`
const RegisteLogin = styled.div`
    width: 100%;
    height: 18px;
    display: flex;
    justify-content: flex-end;
    margin-top: 60px;
    text-decoration: none;
`
const Login = styled(Link)`
    width: 80px;
    height: 18px;
    display: flex;
    margin-left: 50px;
    text-decoration: none;
    color: #9C9C9C;
    font-family: Lexend Deca;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const Register = styled(Link)`
    width: 90px;
    height: 18px;
    display: flex;
    margin-left: 10px;
    margin-right: 100px;
    text-decoration: none;
    color: #5D9040;
    font-family: Lexend Deca;
    font-size: 14px;
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
const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 128px;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

            button{
                color: wheat;
                width: 182px;
                height: 60px;
                border-radius: 10px;
                margin-top: 25px;
                border-radius: 12px;
                border: 1px solid rgba(120, 177, 89, 0.25);
                background: #FFF;
                box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
                background-color: #5D9040;
            }
    }
    
`
const Input = styled.input`
    width: 769px;
    height: 60px;
    margin-top: 25px;
    border-radius: 12px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    background: #FFF;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
`