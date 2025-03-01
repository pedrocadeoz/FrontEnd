import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useHistory, useParams } from 'react-router-dom'
import './CadastroTema.css';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../service/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/UserReducer';
import { toast } from 'react-toastify';


function CadastroTema() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector < UserState, UserState["tokens"]> (
        (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        nome: '',
        descricao: ''
    })

    useEffect(() => {
        if (token === "") {
            toast.error("Você precisa estar logado.", {
                position: "top-right", 
                autoClose: 2000, 
                hideProgressBar: false, 
                closeOnClick: true, 
                pauseOnHover: false, 
                draggable: false, 
                theme: "dark", 
                progress: undefined, 
            });
            history.push("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
            
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            setTema({
                ...tema,
                postagem: [{}]
            })
            put(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado com sucesso!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'dark',
                progress: undefined
            });
        } else {
            post(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado com sucesso!',{
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'dark',
                progress: undefined
            });
        }
        back()

    }

    function back() {
        history.push('/temas')
    }

    return (
        <Container maxWidth="sm" className="topoTema">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">Formulário de cadastro tema</Typography>
                <TextField value={tema.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} 
                id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} 
                id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;