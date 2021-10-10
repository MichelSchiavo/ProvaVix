import type { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { 
  Header,
  HeaderText,
  HeaderButton,
  ButtonText,
  SearchContainer,
  Label,
  SearchArea,
  LoadMoreButton
}  from '../styles/Home'
import plusImage from '../../public/mais.svg'
import { api } from '../services/api'

import { EnterpriseProps } from '../utils/types'
import { EnterpriseContainer } from '../components/Enterprise'
import { useEffect, useState } from 'react'

import { FiSearch } from 'react-icons/fi'

interface HomeProps {
  arr: EnterpriseProps[];
}

export default function Home({ arr }: HomeProps) {
  const [actualList, setActualList] = useState<EnterpriseProps[]>(arr)
  const [search, setSearch] = useState('')
  const [val, setVal] = useState(10)
  const router = useRouter()

  const newList:EnterpriseProps[] = [];

  useEffect(() => {
    if (search === '') {
      setActualList(arr)
      return
    }

    const newArr = [...newList]
    actualList.forEach((data) => {
      if (data.name.toLowerCase().includes(search.toLowerCase())) {
        newArr.push(data)
      }
    })
    setActualList(newArr)

  } ,[search])

  function handleChangeListLimit() {
    setVal(val + 10)
  }

  return (
    <>
      <Header>
        <HeaderText>
          Empreendimentos
        </HeaderText>
          <HeaderButton 
            onClick={() => router.push('/register')}
          >
            <ButtonText>
              Adicionar
            </ButtonText>
            <Image src={plusImage} alt='Plus' />
          </HeaderButton>
      </Header>

      <SearchContainer>
      <Label>
        <FiSearch />
      </Label>
      <SearchArea 
        placeholder='Buscar'
        onChange={e => setSearch(e.target.value)}
      />
    </SearchContainer>

      {actualList.slice(0, val).map((data) => (
        <EnterpriseContainer 
          key={data.id} 
          data={data}
          />
      ))}

      <LoadMoreButton onClick={handleChangeListLimit}>
        Carregar mais
      </LoadMoreButton>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<EnterpriseProps[]>('enterprises', {
    params: {
      _sort: '_id',
      _order: 'cresc'
    }
  })

  const arr = data.map((enterprise) => {
    return {
      id: enterprise.id,
      name: enterprise.name,
      status: enterprise.status,
      purpose: enterprise.purpose,
      // riNumber: enterprise.ri_number,
      address: enterprise.address
    }
  })

  return {
    props: {
      arr
    }
  }
}