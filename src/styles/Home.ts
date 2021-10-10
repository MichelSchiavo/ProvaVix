import styled from 'styled-components';

const Header = styled.header`
  height: 5rem;
  width: 100%;
  padding: 0 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--white)
`;

const HeaderText = styled.p`
  width: 43rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #4F46BB;
`;

const HeaderButton = styled.span`
  height: 2.25rem;
  width: 11rem;
  display: flex;
  align-items: center;
  padding: 0.625rem 2.5rem;
  background: #4F46BB;
  color: var(--white);
  font-weight: bold;
  border-radius: 4.5rem;
  cursor: pointer;
`;

const ButtonText = styled.p`
  margin-right: 0.625rem;
`;

const SearchContainer = styled.div`
  height: 52px;
  width: 1140px;
  margin: 38px auto 52px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #BBB8D9;
`

const Label = styled.label`
  margin-right: 8px;
`;

const SearchArea = styled.input`
  width: 100%;
  margin: 0 auto;
  background: transparent;
  border: none;
  outline: none;
`;

const LoadMoreButton = styled.span`
  height: 2.25rem;
  width: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  margin: 3rem auto;
  background: #4F46BB;
  color: var(--white);
  border-radius: 4.5rem;
  cursor: pointer;
`;

export { 
  Header,
  HeaderText,
  HeaderButton,
  ButtonText,
  SearchContainer,
  Label,
  SearchArea,
  LoadMoreButton
};