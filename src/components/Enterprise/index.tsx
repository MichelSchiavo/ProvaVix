import { useRouter } from 'next/router'
import { Container, Left, Title, Content, Right, Span } from "./styles"

import { RiPencilLine } from 'react-icons/ri'
import { FiTrash } from 'react-icons/fi'
import { EnterpriseProps } from "../../utils/types"
import { api } from '../../services/api'

// type EnterpriseData = Pick<EnterpriseProps, "id" | "name" | "address">

interface EnterpriseData {
  data: EnterpriseProps
}

export function EnterpriseContainer({data} : EnterpriseData) {
  const router = useRouter()

  function tryDelete() {
    const req = confirm("Deseja excluir o item: " + data.name + "?")

    if (req) {
      api.delete(`enterprises/${data.id}/`)
      .then(res => {
        router.reload()
      }).catch(err => {
        console.log(err)
      })
    }
  }
  
  return (
    <Container>
      <Left>
        <Title>
          {data.name}
          <RiPencilLine 
          onClick={() => router.push(`/edit/${data.id}`)} 
          style={{
              marginLeft: 12,
              color: '#4F46BB',
              cursor: 'pointer'
            }}
          /> 
          <FiTrash 
            style={{
              marginLeft: 4,
              color: '#4F46BB',
              cursor: 'pointer'
              }}
              onClick={tryDelete}
          />
        </Title> 
        <Content>{data.address.street} - {data.address.number} - {data.address.city}, {data.address.district}</Content>
      </Left>
      <Right>
        <Span>{data.status}</Span>
        <Span>{data.purpose}</Span>
      </Right>
    </Container>
  )
}
