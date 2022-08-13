import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcodeEmbed from 'react-daum-postcode';

const PostCode = () => {
  const [fullAddress, setFullAddress] = useState();
  const [postNumber, setPostNumber] = useState();
  const [postInput, setPostInput] = useState(<DaumPostcodeEmbed onComplete={handleComplete}/>);

  function handleComplete(data){
    let address=(data.address);
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      address += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setFullAddress(address)
    setPostNumber(data.zonecode)
  };

  return (
    <PostWrap>
      {postInput}
      {fullAddress ?
        <>
          <AddressInfo>
            <label>{postNumber}<br />{fullAddress}</label>
            <button onClick={() => {
              alert("아오이거하고싶다어케하는거지?")
            }}>다시 선택하기</button>
          </AddressInfo>
          <input
            type="text"
            style={{ borderBottom: "1px solid lightgray", width: "75%" }}
            placeholder="상세 주소를 입력해주세요" />
        </> : ""}
    </PostWrap>
  )
};
export default PostCode

const PostWrap = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem 0 1rem 0;

input{
  width: 60%;

}
`;

const AddressInfo = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;

button{
  width: 25%;
  font-size: 1rem;
  color: lightgray;

}

`;