import styled from "styled-components";

function WriteRecipe(){
  return(
    <Wrap>

      <TitleWrap>
        <div className="writeRecipeTitle">
          <span>
            Title
          </span>
          </div>
        <div>
          <span>0000.00.00</span>
          <span>Eppo</span>
        </div>
      </TitleWrap>

      <ContentsWrap>
        <div className = "recipeWrap">
          <RecipeCustom>

       
          </RecipeCustom>
          </div>

          <WriteBox>
            <div>
              <img src=""/>

            </div>
            <div>

            </div>
          </WriteBox>

        <div>
          <button>등록하기</button>
        </div>
      </ContentsWrap>

      <commentsWrap/>

    </Wrap>

  ) 
}
export default WriteRecipe;

const Wrap = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  width: 80%;
  margin: 0 1rem;
  display: flex;

  .writeRecipeTitle{
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-top: 1px solid rosybrown;
    border-bottom: 1px solid rosybrown;
    padding: 0 5%;

  }

  div{
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-top: 1px solid rosybrown;
    border-bottom: 1px solid rosybrown;
    padding: 0.5rem 5% 0.5rem 5%;
  }

`;

const ContentsWrap = styled.div`
  display:flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  
  .recipeWrap{
    display: flex;
    justify-content: center;


  }

`;
const ModifyDelete = styled.div``;
const RecipeCustom = styled.div`
height: 250px;
width: 15%;
border: 1px solid rosybrown;
`;

const WriteBox = styled.div`
height: 500px;
border: 1px so;
`;
const commentsWrap = styled.div``;
