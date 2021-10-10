import { useState } from "react"
import { useRouter } from 'next/router'

import { 
  Header,
  HeaderText,
  Main, MainText,
  MainForm,
  MainSelect,
  MainOption,
  MainInput,
  MainSubmitInput,
  MainAddress,
  MainSecondText
} from "../styles/Register"
import { useForm, SubmitHandler } from "react-hook-form"
import { MdOutlineArrowBackIos } from 'react-icons/md'

import { getCEP } from "../services/api"
import { UseRegister } from "../hooks/UseRegister"
import { UseGetCEP } from "../hooks/UseGetCEP"
import { EnterpriseProps, AddressProps } from "../utils/types"

export default function Register() {
  const router = useRouter()
  const [cep, setCep] = useState('')
  const [validCEP, setValidCEP] = useState(false)
  const [address, setAddress] = useState<AddressProps>({
    data :{
      cep: '', 
      logradouro: '', 
      bairro: '', 
      localidade: '', 
      uf: ''
    }
  })
  const { register, handleSubmit } = useForm()
  const onSubmit: SubmitHandler<EnterpriseProps> = data => UseRegister(validCEP, cep, data, address)

  function handleChangeAddress(newCep: string) {
    setCep(newCep)
    getCepAddress(newCep)
  }

  function getCepAddress(newCep: string) {
    if (UseGetCEP(newCep)) {
      try {
        getCEP.get(`${newCep}/json/`).then(({data}: AddressProps) => {
          if (data.erro) {
            alert('Seu CEP está inválido, favor preencher com um válido ou deixe este campo vazio.')
            setValidCEP(false)
            setCep('')
            return
          }
          setAddress({data})
          setValidCEP(true)
          return
        })
      } catch (err) {
        console.log(err)
      }
    }
    setValidCEP(false)
  }
  
  return (
    <>
      <Header>
        <MdOutlineArrowBackIos
          onClick={() => router.push('/')}
          style={{
            marginRight: 16,
            color: '#4F46BB',
            cursor: 'pointer',
            fontSize: 24
          }}
        />
        <HeaderText>
          Cadastro de empreendimento
        </HeaderText>
      </Header>
      
      <Main>
        <MainText>
          Informações
        </MainText>
        <MainForm onSubmit={handleSubmit(onSubmit)}>
          <MainSelect {...register("status", { required: true })}>
            <MainOption value="Breve lançamento">Breve lançamento</MainOption>
            <MainOption value="Lançamento">Lançamento</MainOption>
            <MainOption value="Em obras">Em obras</MainOption>
            <MainOption value="Pronto para morar">Pronto para morar</MainOption>
          </MainSelect>
          <MainInput 
            {...register("name", { required: true })} 
            placeholder='Nome do empreendimento' 
          />
          <MainSelect {...register("purpose", { required: true })}>
            <MainOption value="Residencial">Residencial</MainOption>
            <MainOption value="Comercial">Comercial</MainOption>
          </MainSelect>
          <MainInput 
            {...register("cep", { required: true })} 
            placeholder='CEP' value={cep} 
            onChange={event => handleChangeAddress(event.target.value)} 
          />
            <MainAddress>
              {validCEP && (
                <>
                  <MainSecondText>{address.data.logradouro}</MainSecondText>
                  <MainSecondText>{address.data.bairro}</MainSecondText>
                  <MainSecondText>{address.data.localidade}</MainSecondText>
                  <MainSecondText>{address.data.uf}</MainSecondText>
                </>
              )}
            </MainAddress>
          <MainInput 
            {...register("address.number", { required: true })} 
            placeholder='Número' 
          />
          <MainSubmitInput type="submit" value='Cadastrar'/>
        </MainForm>
      </Main>
    </>
  )
}