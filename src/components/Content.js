import styled from 'styled-components';



const MainContent = styled.div`
  padding: 2.5rem;
  width: 40rem;
  border: 2px solid #706c61;
  background-color: #e1f4f3;
  color: #706c61;
`;
const P = styled.p`
  font-size: 1.2rem;
  padding: 1rem;
  text-align: left;
`;
function Content({ chosenContent }) {
  const { question, answer, link } = chosenContent;
  return (
    <MainContent>
      <h2>{ question }</h2>
      <P>{ answer }</P>
      <a href={ link }> Recommended Documentation </a>

    </MainContent>
  );
}

export default Content;
