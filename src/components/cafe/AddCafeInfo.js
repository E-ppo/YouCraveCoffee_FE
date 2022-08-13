import React,{useState} from "react";
import styled from "styled-components";
import PostCode from "../../components/public/PostCode";

const AddCafeInfo = () => {
  const [getAddress, setAddress] = useState(false)
  console.log(getAddress)

  return (
    <Wrap>
      <CafeInfo>
        <input type="text" placeholder="✏ 카페명을 입력하세요"></input>
        <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
        <hr />
        <AddressArea>
          
          {getAddress===false?
            <button 
              onClick={()=>{setAddress(true)}}
            > ✏ 카페가 어디에 있나요?</button>
            :
            <PostCode/> 
            }
        </AddressArea>
      </CafeInfo>
    </Wrap>
  )
}
export default AddCafeInfo

const Wrap = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 2rem 0 0 0;
`;

const CafeInfo = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  gap: 10px;

  input{
    text-align: center;
    font-size: 1.5rem;
    border: none;
    outline: none;
    &::placeholder{
      color: lightgray;
    }
  }

  span{
    width: 100%;
    display: flex;

    justify-content: center;

  }

  hr{
    width: 100%;
  }
`;

  const AddressArea = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    input{
      display: flex;
      text-align: center;
      width: 100%;
      font-size: 1rem;
      border: none;
      
      padding: 1rem;
    }

    button{
      width: 80%;
      border: none;
      background: none;
      color: lightgray;
      font-size: 1.5rem;
    }
`;
