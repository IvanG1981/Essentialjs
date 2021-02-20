import styled from 'styled-components';
const MainContent=styled.div`
  display: flex;
  font-size: 1.5em;
  text-align: center;
  border: 2px solid #706c61;
  background-color: #e1f4f3;
  color: #706c61;


`;
function Content() {
  return (
    <MainContent>
      <h1>And I am the content</h1>
    </MainContent>
  );
}

export default Content;
