import router from "next/router";
import { api } from "../services/api";
import { AddressProps, EnterpriseProps } from "../utils/types";

type EnterpriseData = Pick<EnterpriseProps, "name" | "status" | "purpose" | "address">

export function UseUpdate(
  validCEP: boolean,
  cep: string,
  data: EnterpriseData,
  address: AddressProps,
  id: string
) {
  if (!validCEP) {
    alert('Seu CEP está inválido, favor preencher com um válido ou deixe este campo vazio.')
    return
  } 
  api.put(`enterprises/${id}`, {
    name: data.name,
    status: data.status,
    purpose: data.purpose,
    address: {
      street: address.data.logradouro,
      number: data.address.number,
      district: address.data.bairro,
      city: address.data.localidade,
      state: address.data.uf,
      cep: cep.replace(/[^\d]/g, '')
    }
  })
  .then(function(response) {
    router.push('/')
  })
  .catch(function(error) {
    console.log(error);
  });
}