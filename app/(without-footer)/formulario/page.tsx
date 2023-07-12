"use client"

import { Button } from '@/components/button/Button'
import './Formulario.css'
import * as Yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const schemaForm = Yup.object().shape({
    nome: Yup.string().required("Informe seu Nome Completo."),
    email: Yup.string().email("O email fornecido deve ser um email válido.").required("Informe seu Email."),
    portfolio: Yup.string().required("Informe a URL do seu portfólio."),
    motivo: Yup.string().required("Informe um motivo para participar da Jojos.").min(10, "A mensagem deve conter no mínimo 10 caracteres.")
})

export default function Formulario() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schemaForm),
      });

    const handleSubmitForm = () => {
        console.log("formulario enviado")
    }

    return (
        <section className='secao-formulario'>
            <h1 className='titulo-formulario'>Formulário de Vaga</h1>
            <form onSubmit={handleSubmit(handleSubmitForm)} className='formulario'>
                <div className='campo'>
                    <label htmlFor="nome" className='nome label'>Nome:</label>
                    <input type="text" className='input input-nome' id='nome' {...register('nome')}/>
                    {errors.nome ? (
                        <p>{errors.nome?.message}</p>
                    ): null}
                </div>
                <div className='campo'>
                    <label htmlFor="email" className='email label'>Email:</label>
                    <input type="text" className='input input-email' id='email' {...register('email')}/>
                    {errors.email ? (
                        <p>{errors.email?.message}</p>
                    ): null}
                </div>
                <div className='campo'>
                    <label htmlFor="portfolio" className='porfolio label'>Link para portfólio:</label>
                    <input type="text" className='input input-portfolio' id='portfolio' {...register('portfolio')}/>
                    {errors.portfolio ? (
                        <p>{errors.portfolio?.message}</p>
                    ): null}
                </div>
                <div className='campo'>
                    <label htmlFor="texto-motivo" className='texto-motivo label'>Por que você quer fazer parte da Jojos?</label>
                    <textarea className='input input-texto-motivo' id='texto-motivo' rows={5} {...register('motivo')}/>
                    {errors.motivo ? (
                        <p>{errors.motivo?.message}</p>
                    ): null}
                </div>
                <Button>Enviar Formulário</Button>
            </form>
        </section>
    )
}