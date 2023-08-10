import styled from "styled-components";
import slogan from "../assets/logo.png";
import bin from "../assets/bin.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
//import { AuthContext } from "./Contex";

export default function Home() {

    //const { setAuth } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();

        const url = `${import.meta.env.VITE_API_URL}/`
        const promise = axios.post(url);
        setDisabled(true);
        promise.then(resposta => {
            console.log(resposta)
        });
        promise.catch(resposta => {
            alert(resposta.response.data.message);
            setDisabled(false);
        });
    }
    return (
        <Total>
            <Above>
                <Welcome>Seja bem-vindo(a), Pessoa!</Welcome>
                <SaleExit>
                    <Sale to={'/'} >Venda seu produro</Sale>
                    <Login to={'/signin'} >Entrar</Login>
                    <Register to={'/signup'}>Cadastra-se</Register>
                    <Exit>Sair</Exit>
                </SaleExit>
            </Above>
            <Categories>
                <Affairs>Affairs</Affairs>
                <Adventure>Adventure</Adventure>
                <Bibliography>Bibliography</Bibliography>
                <ScienceFiction> ScienceFiction </ScienceFiction>
                <Thriller>Thriller</Thriller>
                <Others>Others</Others>
            </Categories>
            <SingInContainer>
                <Unit>
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fjamboeditora.com.br%2Fproduto%2Fordem-paranormal-rpg%2F&psig=AOvVaw0t-0Vy0No6JGkjyodkTILt&ust=1691783168051000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiolcjt0oADFQAAAAAdAAAAABAE" alt="" />
                    <Title>Ordem Paranormal</Title>
                    <Category>Ficção</Category>
                    <Price>R$ 24,99</Price>
                </Unit>
            </SingInContainer>
        </Total>
    )
};

const Total = styled.div`
    width: 100%;
    height: 100%;
    //background-color: #bd4470;
    background: linear-gradient(to bottom, #bd4470, #5dc1a3);
`
const Above = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    background-color: #7a2e4a;
   // background: linear-gradient(to right, #ed6b9b, #85f6d4);
    
`
const SaleExit = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    font-size: 20px;
`
const Welcome = styled.div`
    width: 100%;
    color: #ffffff;
    font-family: Lexend Deca;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    margin-left: 100px;
    text-decoration: none;
    justify-content: flex-start;
    margin-top: 17px;
`
const Login = styled(Link)`
    width: 69px;
    height: 18px;
    display: flex;
    margin-left: 10px;
    text-decoration: none;
    color: #ffffff;
    font-family: Lexend Deca;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 17px;
`
const Register = styled(Link)`
    width: 89px;
    height: 30px;
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    text-decoration: none;
    color: #ffffff;
    font-family: Lexend Deca;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 17px;
`
const Sale = styled(Link)`
    width: 150px;
    height: 22px;
    display: flex;
    margin-right: 13px;
    text-decoration: none;
    color: #ffffff;
    font-family: Lexend Deca;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 17px;
`
const Exit = styled(Link)`
    width: 90px;
    height: 22px;
    display: flex;
    margin-left: 10px;
    margin-right: 0px;
    text-decoration: none;
    color: #ffffff;
    font-family: Lexend Deca;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 17px;
`
const Categories = styled.div`
     width: 100%;
     display: flex;
     margin-top: 30px;
    // background-color: #e92121;
     justify-content: space-between;
     color: black;
`
const Affairs = styled(Link)`
    margin-left: 20px;
    color: black;

`
const Adventure = styled(Link)`
    color: black;

`
const Bibliography = styled(Link)`
    color: black;

`
const ScienceFiction = styled(Link)`
    color: black;

`
const Thriller = styled(Link)`
    color: black;

`
const Others = styled(Link)`
    margin-right: 20px;
    color: black;

`
const SingInContainer = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    //background-color: red;
`
const Unit = styled.div`
    width: 250px;
    height: 400px;
    background-color: wheat;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    img{
        width: 230px;
        height: 470px;
        border-radius: 20px;
        background-color: black;
        margin-top: 7px;
    }
`
const Title = styled.div`
    width: 100%;
    height: 20px;
    font-family: Lexend Deca;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #bd4470;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7px;
`
const Category = styled.div`
    width: 100%;
    height: 20px;
    font-family: Lexend Deca;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #bd4470;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Price = styled.div`
    width: 100%;
    height: 20px;
    font-family: Lexend Deca;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7px;
    margin-bottom: 7px;
`
const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 57px;
`
const BoxRanking = styled.div`
    width: 1017px;
    height: 100%;
    border-radius: 10px;
    border-radius: 24px 24px 0px 0px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    background: #FFF;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
`
