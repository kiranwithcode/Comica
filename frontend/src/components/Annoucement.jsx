import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: #0606cce0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
`
const Annoucement = () => {
  return (
    <div>
        <Container>Super Deal! Free Shipping on Orders Over $50</Container>
    </div>
  )
}

export default Annoucement