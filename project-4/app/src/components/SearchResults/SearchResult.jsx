import styled from "styled-components";
import { Button, Container } from "../../App";
const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>

      <FoodCards>
        {data?.map(({ name, image, text, price }) => (
          <FoodCard key={name}>
            <div className="food_image">
              <img src={process.env.BASE_URL + image} />
            </div>
            <div className="food_info">
              <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
              <Button>${price.toFixed(2)}</Button>
            </div>
          </FoodCard>
        ))}
      </FoodCards>

    </FoodCardContainer>
  );
};

export default SearchResult;
const FoodCardContainer = styled.section`
min-height : calc(100vh - 212px);
background-image : url("/bg.png");
background-size : cover;
`;
const FoodCards = styled.div`
display:flex;
flex-wrap: wrap;
padding : 20px;
justify-content : center;
align-items: center;
gap: 32px;

`;
const FoodCard = styled.div`
width: 340px;
height: 167px;


border: 0.66px solid;

border-image-source: radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;


border-radius: 20px;
border: 0.659px solid #98F9FF;
background: url(.png), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);
background-blend-mode: overlay, normal;
backdrop-filter: blur(13.184196472167969px);

display : flex;
padding : 8px;

.food_info{
  display: flex;
  flex-direction : column;
  justify-content : space-between;
  align-items : end;

  h3{
    color: #FFF;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
padding : 10px;
  }

  p{
    width: 168px;
    height: 59px;
    color: #FFF;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

`;
