export interface EnterpriseProps {
  id: string;
  name: string;
  status: string;
  purpose: string;
  // ri_number?: string;
  address: {
    district: string;
    city: string;
    street: string;
    state: string;
    number: string;
    cep: string;
  }
}

export interface AddressProps {
  data: {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    erro?: boolean;
  }  
}
