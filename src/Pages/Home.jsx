import styled from "styled-components";
import slogan from "../assets/logo.png";
import bin from "../assets/bin.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
//import { AuthContext } from "./Contex";

export default function HomeLogged() {

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
                    <img src="" alt="" />
                    <Title></Title>
                    <Altor></Altor>
                    <Price></Price>
                </Unit>
            </SingInContainer>
            <Box>
                <BoxRanking>
                    Pessoas do rank
                </BoxRanking>
            </Box>
        </Total>
    )
};

const Unit = styled.div`
     width: 100%;
    height: 100%;
`

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
const Sale = styled(Link)`
    width: 150px;
    height: 22px;
    display: flex;
    margin-right: 60px;
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
  margin-top: 128px;
`
const TopForm = styled.form`
    display: flex;
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
                box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
                background-color: #5D9040;
                margin-left: 20px;
            }
`
const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

        div{
            width: 769px;
            height: 60px;
            margin-top: 25px;
            border-radius: 12px;
            border: 1px solid rgba(120, 177, 89, 0.25);
            box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
            background-color: #80CC74;   
        }
        button{
            color: wheat;
            width: 130px;
            height: 60px;
            border-radius: 10px;
            margin-top: 25px;
            border-radius: 12px;
            border: 1px solid rgba(120, 177, 89, 0.25);
            background: #FFF;
            box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
            margin-left: 20px;
        }
`
const Input = styled.input`
    width: 715px;
    height: 60px;
    margin-top: 25px;
    border-radius: 12px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    background: #FFF;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
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
