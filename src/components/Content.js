import styled from 'styled-components';
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2.5rem;
  width: 60rem;
  border: 2px solid #706c61;
  background-color: #e1f4f3;
  color: #706c61;
`;
const P = styled.p`

  font-size: 1.2rem;
  padding: 1rem;
  text-align: left;

`;
const A= styled.a`
  font-size: 1rem;
`;
function Content({ content }) {
  return (
    <MainContent>
      <h1>Answers</h1>
      <h2>{ content.question }</h2>
      <P>{ content.answer }</P>
      <A href={content.link} > Recommended documentation </A>
    </MainContent>
  );
}

export default Content;
