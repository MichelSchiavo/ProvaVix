import styled from 'styled-components'

const Container = styled.div`
  height: 7.125rem;
  width: 71.25rem;
  display: flex;
  justify-content: space-between;

  background: var(--white);

  margin: 0 auto 2rem;
  padding: 2rem;
  border-radius: 0.5rem;
`;

const Left = styled.div`
  /* border: 1px solid red; */
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Content = styled.p`
  color: #6D6C7B;
`;

const Right = styled.div`
  width: 22rem;
  height: 1.75rem;

  display: flex;
`;

const Span = styled.span`
  width: 9.5rem;
  height: 1.75rem;

  font-size: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1.5rem;
  margin-right: 1rem;

  border: 1px solid #8E85FF;
  
  border-radius: 4.5rem;
  box-sizing: border-box;

  cursor: pointer;
`;

export { Container, Left, Title, Content, Right, Span}