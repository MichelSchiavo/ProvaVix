import { useState } from 'react'
import { GetServerSideProps } from 'next'
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
} from '../../styles/Edit'
import { useForm, SubmitHandler } from "react-hook-form"
import { MdOutlineArrowBackIos } from 'react-icons/md'

import { api, getCEP } from '../../services/api'
import { UseUpdate } from '../../hooks/UseUpdate'
import { UseGetCEP } from '../../hooks/UseGetCEP'
import { AddressProps, EnterpriseProps } from '../../utils/types'


export default function Edit(props: EnterpriseProps) {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const onSubmit: SubmitHandler<EnterpriseProps> = data => UseUpdate(validCEP, cep, data, address, props.id)

  const [cep, setCep] = useState(props?.address.cep)
  const [validCEP, setValidCEP] = useState(true)
  const [address, setAddress] = useState<AddressProps>({
    data: {
      cep: props.address.cep,
      logradouro: props.address.street,
      bairro: props.address.district,
      localidade: props.address.city,
      uf: props.address.state
    }
  })

  function handleChangeAddress(newCep: string) {
    setCep(newCep);
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
          setAddress({data});
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
          <HeaderText>Editar empreendimento</HeaderText>
      </Header>

      <Main>
        <MainText>
          Informações
        </MainText>
        <MainForm onSubmit={handleSubmit(onSubmit)}>
          <MainSelect 
            {...register("status", { required: true })}
            defaultValue={props.status}
          >
            <MainOption value="Breve lançamento">Breve lançamento</MainOption>
            <MainOption value="Lançamento">Lançamento</MainOption>
            <MainOption value="Em obras">Em obras</MainOption>
            <MainOption 
              value="Pronto para morar"
              defaultValue={props.name}
            >
              Pronto para morar
            </MainOption>
          </MainSelect>
          <MainInput 
            {...register("name", { required: true })} 
            defaultValue={props.name}
            placeholder='Nome do empreendimento' 
          />
          <MainSelect 
            {...register("purpose", { required: true })}
            defaultValue={props.purpose}
          >
            <MainOption value="Residencial">Residencial</MainOption>
            <MainOption value="Comercial">Comercial</MainOption>
          </MainSelect>
          <MainInput 
            {...register("cep", { required: true })}
            placeholder='CEP' 
            defaultValue={props.address.cep}
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
            defaultValue={props.address.number} 
          />
          <MainSubmitInput type="submit" value='Editar' />
        </MainForm>
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug }: any = params
  const { data } = await api.get<EnterpriseProps>(`enterprises/${slug}`)

  return {
    props: data
  }
}