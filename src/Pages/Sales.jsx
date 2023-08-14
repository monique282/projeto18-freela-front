import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./Contex";
import { trashOutline } from 'ionicons/icons';
import { pauseCircleOutline } from 'ionicons/icons';
import { caretForwardCircleOutline } from 'ionicons/icons';
import { ThreeDots } from "react-loader-spinner";

<ion-icon name="caret-forward-circle-outline"></ion-icon>

export default function Sale() {

    const { name, token, setToken, setName } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(false);
    const [nameL, setNameL] = useState('');
    const [description, setDescription] = useState('');
    const [prince, setPrince] = useState('');
    const [photos, setPhotos] = useState('');
    const [addSaleForm, setAddSaleForm] = useState(false);
    const [list, setList] = useState([]);
    const [atualization, setAtualization] = useState(false);
    const [category, setCategory] = useState('')

    const navigate = useNavigate();

    // pegando o produto que foi o usuario que postou usando o token
    useEffect(() => {

        const url = `${import.meta.env.VITE_API_URL}/productUsers`
        const promise = axios.get(url, {
            headers: { authorization: `Bearer ${token}` }
        })
        promise.then(response => {
            console.log(response.data)
            setList(response.data)
        })
        promise.catch(err => {
            // alert(err.response.data);
        });
        setAtualization(false)
        // const urlUsers = `${import.meta.env.VITE_API_URL}/products/${}`
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
            setToken('');
            setName('')
            navigate("/");
        })
            .catch(resposta => {
                alert(resposta.response.data);
            });
    };

    function register(e) {
        e.preventDefault();

        //para quando tiver o deploy 
        const url = `${import.meta.env.VITE_API_URL}/registeProduct`

        const confi = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        // dados a ser enviados para o back
        const data = {
            name: nameL,
            description: description,
            price: prince,
            category: category,
            photo: photos
        };
        console.log(category)
        console.log(photos)
        const promise = axios.post(url, data, confi)
        setDisabled(true);
        promise.then(() => {
            setAddSaleForm(false)
            alert("Produto adicionada para venda")
            setAtualization(true)
        });
        promise.catch(response => {
            alert(response.response.data);
            setDisabled(false);
        });
    };


    // atualização do status para false ou true
    function UpdateBreak(id) {
        const url = `${import.meta.env.VITE_API_URL}/productBreak/${id}`
        const promise = axios.get(url)
        promise.then(response => {
            alert(" Venda pausada");
            setAtualization(true);
        })
        promise.catch(err => {
            // alert(err.response.data);
        });
    }

    function UpdateUnpause(id) {
        const url = `${import.meta.env.VITE_API_URL}/productUnpause/${id}`
        const promise = axios.get(url)
        promise.then(response => {
            alert("Venda despausada");
            setAtualization(true);
        })
        promise.catch(err => {
            // alert(err.response.data);
        });
    }

    function Delete(id) {
        const url = `${import.meta.env.VITE_API_URL}/productDelete/${id}`
        const promise = axios.delete(url)
        promise.then(response => {
            alert("Produto deletado");
            setAtualization(true);
        })
        promise.catch(err => {
            // alert(err.response.data);
        });
    }

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
            <Categories>
                <All onClick={() => setAtualization(true)}> Todos </All>
                <Affairs onClick={() => Filtering('affairs')} >Romances</Affairs>
                <Adventure onClick={() => Filtering('adventure')} >Aventura</Adventure>
                <Bibliography onClick={() => Filtering('bibliography')} >Bibliografia</Bibliography>
                <ScienceFiction onClick={() => Filtering('sciencebibliographyFiction')} > Ficção Científica </ScienceFiction>
                <Thriller onClick={() => Filtering('thriller')} >Suspense</Thriller>
                <Others onClick={() => Filtering('others')}>Outros</Others>
            </Categories>
            <RightSide>
                <AddSales type="button" onClick={() => setAddSaleForm(true)}>
                    Adicionar Venda
                </AddSales>
            </RightSide>


            {!addSaleForm && token && (
                <>
                    {list.length === 0 && (
                        <SingInContainer>
                            <UnitNotToken >
                                Você não tem nenhum produto cadastrado para venda.
                            </UnitNotToken>
                        </SingInContainer>
                    )}
                    {list.length > 0 && (
                        list.map(list => (
                            <Box>
                                <Unit key={list.id}>
                                    <img src={list.photo} alt="" />
                                    <Title>{list.name}</Title>
                                    <Price>R$ {(list.price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Price>
                                    <Title>
                                        {list.status === true && (
                                            <TitleVend>Venda ativa</TitleVend>
                                        )}
                                        {list.status === false && (
                                            <TitlePause>Venda pausada</TitlePause>
                                        )}
                                    </Title>
                                </Unit>
                                <Stops onClick={() => { Delete(list.id) }}> Apagar<ion-icon icon={trashOutline} style={{ color: '#000000', width: '100px', height: '100px', marginTop: '0px', marginRight: '5px', marginLeft: '0px' }} /></Stops>
                                <Stop onClick={() => { UpdateBreak(list.id) }}>Pausar Venda <ion-icon icon={pauseCircleOutline} style={{ color: '#000000', width: '100px', height: '100px', marginTop: '0px', marginRight: '5px', marginLeft: '0px' }} /></Stop>
                                <Stop onClick={() => { UpdateUnpause(list.id) }}>Despausar Venda <ion-icon icon={caretForwardCircleOutline} style={{ color: '#000000', width: '100px', height: '100px', marginTop: '0px', marginRight: '5px', marginLeft: '0px' }} /></Stop>
                            </Box>
                        ))
                    )}
                </>
            )}
            {addSaleForm && token && (
                <>
                    <RegisterSales>
                        <form onSubmit={register}>
                            <Input placeholder="Nome do livro" type="text" required value={nameL} onChange={(e) => setNameL(e.target.value)} disabled={disabled} />
                            <Input placeholder="Descrição do livro" type="text" required value={description} onChange={(e) => setDescription(e.target.value)} disabled={disabled} />
                            <Input placeholder="Preço" type="text" required value={prince} onChange={(e) => setPrince(e.target.value)} disabled={disabled} />
                            <ArrangingCategories>
                                <Catego onClick={() => setCategory("affairs")}>Romance</Catego>
                                <Catego onClick={() => setCategory("adventure")}>Aventura</Catego>
                                <Catego onClick={() => setCategory("bibliography")}>Bibliografia</Catego>
                                <Catego onClick={() => setCategory("sciencebibliographyFiction")}>Ficção Científica</Catego>
                                <Catego onClick={() => setCategory("thriller")}>Suspense</Catego>
                                <Catego onClick={() => setCategory("others")}>Outros</Catego>
                            </ArrangingCategories>
                                    <InputPhoto
                                        placeholder="Foto"
                                        type="text"
                                        required
                                        value={photos}
                                        onChange={(e) => setPhotos(e.target.value)}
                                        disabled={disabled} />
                            <AddSale type="submit" disabled={disabled}>
                                {disabled ? (
                                    <ThreeDots width={32} height={21} border-radius={4.5} background-color="#d540e9" color="#FFFFFF" font-size={9} />
                                ) : (
                                    <p>Criar venda</p>
                                )}
                            </AddSale>
                        </form>
                    </RegisterSales>
                    {list.length === 0 && (
                        <SingInContainer>
                            <UnitNotToken>
                                Você não tem nenhum produto cadastrado para venda.
                            </UnitNotToken>
                        </SingInContainer>
                    )}
                    <Upside>
                        {list.length > 0 && (
                            list.map(list => (
                                <Box>
                                    <Unit key={list.id}>
                                        <img src={list.photo} alt="" />
                                        <Title>{list.name}</Title>
                                        <Price>R$ {(list.price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Price>
                                        <Title>
                                            {list.status === true && (
                                                <TitleVend>Venda ativa</TitleVend>
                                            )}
                                            {list.status === false && (
                                                <TitlePause>Venda pausada</TitlePause>
                                            )}
                                        </Title>
                                    </Unit>
                                    <Stops onClick={() => Delete(list.id)}> Apagar</Stops>
                                    <Stop onClick={() => { UpdateBreak(list.id) }}>Pausar Venda </Stop>
                                    <Stop onClick={() => { UpdateUnpause(list.id) }}>Despausar Venda </Stop>
                                </Box>
                            ))
                        )}
                    </Upside>
                </>)}
            {!token && (
                <SingInContainer>
                    <UnitNotToken >
                        Você precisa fazer login para ter acesso a essa pagina, obrigado(a)!
                    </UnitNotToken>
                </SingInContainer>
            )}
        </Total >
    )
};

const Catego = styled.div`
    margin-left: 10px;
    margin-top: 11px;
    width: 120px;
    height: 50px; 
    text-align: center;
    font-size: 15px;
    border: 1px solid rgba(216, 47, 232, 0.916);
    background: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(216, 47, 232, 0.916);
  
`
const ArrangingCategories = styled.div`
    display: flex;
    width: 800px;
    margin-left: 10px;
    
`
const Stops = styled.div`
    margin-top: 30px;
    width: 150px;
    height: 100px;
    display: flex;
    color: black ; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: -10px;
    background-color: #ffffff;
    border-radius: 12px;
`

const Stop = styled.div`
    margin-top: 30px;
    width: 150px;
    height: 100px;
    display: flex;
    color: black ; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 10px;
    background-color: #ffffff;
    border-radius: 12px;
`
const Box = styled.div`
    display: flex;
`
const UnitNotToken = styled.div`
    width: 800px;
    height: 100px;
    border-radius: 10px;
    margin-top: 25px;
    border-radius: 12px;
    background-color: #ffffff;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`
const Upside = styled.div`
    margin-top: -200px;
`
const RightSide = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
`
const Photo = styled.div`
    display: flex;
`
const AddSales = styled.button`
    color: #ffffff;
    width: 140px;
    height: 60px;
    border-radius: 10px;
    margin-top: 25px;
    border-radius: 12px;
    border: 1px solid rgb(230, 68, 225);
    box-shadow: 0px 4px 24px 0px rgb(230, 68, 225);
    background-color: #d540e9;
`
const AddSale = styled.button`
    color: #ffffff;
    width: 769px;
    height: 60px;
    border-radius: 10px;
    margin-top: 25px;
    border-radius: 12px;
    border: 1px solid rgb(230, 68, 225);
    box-shadow: 0px 4px 24px 0px rgb(230, 68, 225);
    background-color: #d540e9;
`
const AddPhoto = styled.button`
    width: 69px;
    height: 60px;
    margin-top: 10px;
    border-radius: 12px;
    border: 1px solid rgba(216, 47, 232, 0.916);
    background-color: #d540e9;
    color: #ffffff;
    box-shadow: 0px 4px 10px 0px rgba(216, 47, 232, 0.916);
    outline: none;
    padding: 15px;
    font-size: 35px;
    margin-left: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`
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
const Exit = styled(Link)`
    width: 90px;
    height: 22px;
    display: flex;
    margin-left: -30px;
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
    justify-content: space-between;
    color: black;
`
const All = styled(Link)`
    margin-left: 20px;
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
    flex: 1; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    box-sizing: border-box;
    overflow: auto; 
`
const Unit = styled.div`
    width: 400px;
    height: auto; 
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    margin: 20px;
    margin-top: 0px;
    
    img{
        width: 100px;
        border-radius: 20px;
        background-color: black;
        margin-top: 7px;
        margin-left: 10px;
        margin-bottom: 7px;
        margin-right: 7px;
    }
`
const RegisterSales = styled.section`
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
const InputPhoto = styled.input`
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
    margin-left: 0px;
`
const Price = styled.div`
    width: 500px;
    height: 50px;
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
const Title = styled.div`
    width: 500px;
    height: 20px;
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #bd4470;
    display: flex;
    align-items: center;
    margin-top: 17px;
    margin-left: 10px;
`
const TitleVend = styled.p`
    color: #4aee0a;
`
const TitlePause = styled.p`
    color: #ee1d0a;
`