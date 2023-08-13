import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./Contex";

export default function Home() {

    const { name, token, setToken } = useContext(AuthContext);
    const [list, setList] = useState([]);
    const [atualization, setAtualization] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/products`

        const promise = axios.get(url);
        promise.then(response => {
            setList(response.data)
        })
            .catch(err => {
                alert(err.response.data);
            });
    }, [atualization]);

    // essa parte vai deslogar a pessoa
    function Logout() {

        const url = `${import.meta.env.VITE_API_URL}/logout`
        const confi = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const promise = axios.delete(url, confi);
        promise.then(resposta => {
            // apagar o local storage
            localStorage.clear();
            setAtualization(true);
            setToken('');
        })
            .catch(resposta => {
                alert(resposta.response.data);
            });
    }

    // serva para fazer a filtragem do que vai aparecer na tela por categoria
    function Filtering(param) {
        const url = `${import.meta.env.VITE_API_URL}/filtering/${param}`
        
        const promise = axios.get(url);
        promise.then(response => {
         setList(response.data)
        })
            .catch(response => {
                alert(response.response.data);
            });
    }

    return (
        <Total>
            <Above>
                <Welcome>Seja bem-vindo(a) {name}!</Welcome>
                {!token && (
                    <SaleExit>
                        <Sale to={'/sales'} >Seus produtos</Sale>
                        <Login to={'/signin'} >Entrar</Login>
                        <Register to={'/signup'}>Cadastra-se</Register>
                    </SaleExit>)}
                {token && (<SaleExit>
                    <Sale to={'/'} >Venda seu produto</Sale>
                    <Exit onClick={Logout} >Sair</Exit>
                </SaleExit>)}
            </Above>
            <Categories>
                <All onClick={() => setAtualization(true)}> Todos </All>
                <Affairs onClick={() => Filtering('affairs')} >Romances</Affairs>
                <Adventure onClick={() => Filtering('adventure')} >Aventura</Adventure>
                <Bibliography onClick={() => Filtering('bibliography')} >Bibliografia</Bibliography>
                <ScienceFiction onClick={() => Filtering('scienceFiction')} > Ficção Científica </ScienceFiction>
                <Thriller onClick={() => Filtering('thriller')} >Suspense</Thriller>
                <Others onClick={() => Filtering('others')}>Outros</Others>
            </Categories>
            <SingInContainer>

                {list.map(list => (
                    <Unit to={`/detailed/${list.id}`} key={list.id}>
                        <img src={list.photo} alt="" />
                        <Title>{list.name}</Title>
                        <Category>{list.category}</Category>
                        <Price>R$ {(list.price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Price>
                    </Unit>
                ))}
            </SingInContainer>
        </Total>
    )
};


const Total = styled.div`
    min-height: 100vh; 
    background: linear-gradient(to bottom, #bd4470, #5dc1a3);
    display: flex;
    flex-direction: column; 
    overflow: hidden; 
`
const Above = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    background-color: #7a2e4a; 
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
    color: #000000;
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
    color: #000000;
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
    color: #000000;
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
    color: #000000;
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
    color: #000000;
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
     justify-content: space-between;
     color: black;
`
const All = styled(Link)`
    margin-left: 20px;
    color: black;
`
const Affairs = styled(Link)`
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
    flex: 1; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto; 
`
const Unit = styled(Link)`
    width: 250px;
    height: auto; 
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    
    
    img{
        width: 230px;
        border-radius: 20px;
        background-color: black;
        margin-top: 7px;
    }
`
const Title = styled.div`
    width: 100%;
    height: 20px;
    font-family: Lexend Deca;
    font-size: 18px;
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

