import styled from "styled-components";
import { closeCircleOutline } from 'ionicons/icons';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./Contex";
import { AiFillCloseCircle } from 'react-icons/ai';


export default function Home() {

    const { name, token } = useContext(AuthContext);
    const [list, setList] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate();

    // pegando o produto pelo id
    useEffect(() => {
        const url = `${import.meta.env.VITE_API_URL}/products/${id}`

        const promise = axios.get(url);
        promise.then(response => {
            setList(response.data)
        })
            .catch(err => {
                alert(err.response.data);
            });

    }, []);

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
            setToken('');
            setName('')
            navigate("/");
        })
            .catch(resposta => {
                alert(resposta.response.data);
            });
    };

    return (
        <Total>
            <Above>
                <Welcome>Seja bem-vindo(a) {name}!</Welcome>
                {!token && (
                    <SaleExit>
                        <Sales to={'/'} >Home</Sales>
                        <Login_Register to={'/signin'} >Entrar/Cadastra-se</Login_Register>
                    </SaleExit>
                )}
                {token && (<SaleExit>
                    <Sales to={'/'} >Home</Sales>
                    <Exit onClick={Logout} >Sair</Exit>
                </SaleExit>)}
            </Above>
            <SingInContainer>
                {list.map(list => (
                    <Unit key={list.id}>
                        <img src={list.photo} alt="" />
                        <Information>
                            <Title>Titulo do livro: {list.name}</Title>
                            <Category>Categoria: {list.category}</Category>
                            <DescripionInf>Descrição do livro</DescripionInf>
                            <Descripion>{list.description} </Descripion>
                            <SellerName>Nome do vendedor: {list.users.name}</SellerName>
                            <Contact>Para comprar entre em contato com vendedor no telefone: {list.users.phone}</Contact>
                            <Price> Comprar por apenas R$ {(list.price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Price>
                        </Information>
                        <Link to={"/"}> <AiFillCloseCircle style={{ color: '#000000', fontSize: '50px', marginTop: '5px', marginRight: '5px', marginLeft: '-40px' }} /> </Link>
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
const Sales = styled(Link)`
    width: 140px;
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
const Login_Register = styled(Link)`
    width: 130px;
    height: 30px;
    display: flex;
    margin-left: -30px;
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
    margin-right: -30px;
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
    width: 800px;
    height: auto; 
    background-color: wheat;
    border-radius: 20px;
    display: flex;
    margin: 20px;
    
    img{
        width: 230px;
        border-radius: 20px;
        background-color: black;
        margin-top: 7px;
        margin-left: 10px;
        margin-bottom: 7px;
        margin-right: 7px;
    }
`
const Information = styled.div`
    width: 100vh;
    display: flex;
    flex-direction: column;
    margin-left: 19px;
    //background-color: red;
    margin-bottom: 7px;
`
const Title = styled.div`
    width: 100%;
    height: 20px;
    font-family: Lexend Deca;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #bd4470;
    display: flex;
    align-items: center;
    margin-top: 17px;
`
const Category = styled.div`
    width: 100%;
    height: 20px;
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: black;
    display: flex;
    align-items: center;
    margin-top: 10px;
`
const DescripionInf = styled.div`
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: black;
    margin-top: 20px;
    display: flex;
    align-items: center;
`
const Descripion = styled.div`
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: black;
    display: flex;
    align-items: center;
`
const SellerName = styled.div`
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: black;
    margin-top: 20px;
    display: flex;
    align-items: center;
`
const Contact = styled.div`
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: black;
    display: flex;
    align-items: center;
`
const Price = styled.div`
    width: 500px;
    height: 50px;
    //background-color: #bd4470;
    border-radius: 10px;
    font-family: Lexend Deca;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 7px;
    margin-top: 20px;
`

