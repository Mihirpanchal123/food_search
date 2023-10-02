import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchResult from './components/SearchResults/SearchResult';

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  const filterFood = (type) => {

    if (type == "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    setFilteredData(filter);
    setSelectedBtn(type);
  }

  const filterBtn = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfart",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    }
  ];

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch food data");
      }
    };

    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue == "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filter);

  };

  if (error) return <div>{error}</div>;
  if (Loading) return <div>Loading...</div>;



  return <Container>
    <TopContainer>
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="search">
        <input onChange={searchFood} placeholder='Search Food' />
      </div>
    </TopContainer>
    <FilterComponent>
      {filterBtn.map((value) => (
        <Button
          isSelected={selectedBtn == value.type}
          key={value.name} onClick={() => filterFood(value.type)}>
          {value.name} </Button>
      ))}
    </FilterComponent>
    <FoodCardContainer>
      <FoodCard>
        <SearchResult data={filteredData} />
      </FoodCard>
    </FoodCardContainer>
  </Container>
}

export default App;

const FoodCardContainer = styled.section`
   height : calc(100vh - 212px);
   background-image : url("/bg.png");
   background-size : cover;
`;
const FoodCard = styled.div``;

export const Button = styled.div`
outline : 1px solid ${({ isSelected }) => (isSelected ? "white" : "null")};
  border-radius: 5px;
  background: #FF4343;
  padding: 6px 12px;
  border : none;
  color : white;
  cursor : pointer;
  &:hover {
    background-color : brown;
  }

`;
export const Container = styled.div``;
const FilterComponent = styled.section`
   display : flex;
   justify-content : center;
   gap : 12px;
   padding-bottom : 40px;
`;
const TopContainer = styled.div`
   min-height : 140px;
   display : flex;
   justify-content : space-between;
   padding: 16px;
   align-items : center;

   .search{
    input{
      background-color : #323334;
      border-color : red;
      color : white;
      border-radius : 5px;
      height : 40px;
      font-size : 16px;
      padding : 4px;
      &::placeholder{
        color : white;
      }
    }
   }

   @media (0 < width < 600px){
    flex-direction : column;
    min-height : 120px;
    
   }
`;