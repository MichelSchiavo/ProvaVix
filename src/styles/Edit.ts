import styled from 'styled-components'

const Header = styled.header`
  height: 5rem;
  width: 100%;
  padding: 0 15rem;
  display: flex;
  align-items: center;
  background: var(--white);
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

const Main = styled.main`
  height: 37.875rem;
  width: 38.875rem;
  margin: 2rem auto 0;
  background: var(--white);
  border-radius: 8px;
  padding: 32px;
`;

const MainText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #302E45;
`;

const MainForm = styled.form`
  /* width: 100%; */
`;

const MainSelect = styled.select`
  height: 2.5rem;
  width: 34.875rem;
  margin-top: 2rem;
  border: 0px;
  outline: none;
  appearance: none;
  border-bottom: 2px solid #BBB8D9;
`;

const MainOption = styled.option`
  
`;

const MainInput = styled.input`
  height: 2.5rem;
  width: 34.875rem;
  margin-top: 3rem;
  border: none;
  outline: none;
  border-bottom: 2px solid #BBB8D9;
`;

const MainAddress = styled.div`
  height: 4.5rem;
  width: 22.75rem;
  margin-top: 2rem;
  font-size: 14px;
  color: #302E45;
`;

const MainSecondText = styled.p`

`;

const MainSubmitInput = styled.input`
  height: 2.25rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  margin: 4.25rem auto;
  background: #4F46BB;
  color: var(--white);
  border-radius: 72px;
  border: none;
  cursor: pointer;
`;

export {
  Header,
  HeaderText,
  Main,
  MainForm,
  MainText,
  MainSelect,
  MainOption,
  MainInput,
  MainSubmitInput,
  MainAddress,
  MainSecondText
}