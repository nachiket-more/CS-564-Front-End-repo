import "../../index.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import React from "react";

export default function Search() {
  const [chars, setChars] = React.useState([]);
  const [searchRes, setSearchRes] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://thronesapi.com/api/v2/Characters"
      );
      const updatedArray = response.data.map((item) => {
        return { imageUrl: item.imageUrl, fullName: item.fullName };
      });
      setChars(updatedArray);
      setSearchRes(updatedArray);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    updateSearchResult(event.target.value);
  };

  const updateSearchResult = (value) => {
    const filteredCharacters = chars.filter((character) => {
      return character.fullName.toLowerCase().includes(value.toLowerCase());
    });

    setSearchRes(filteredCharacters);
  };

  return (
    <div className="page-container Search">
      <div className="container">
        <div className="title">
          <h2>Search Characters</h2>
        </div>
        <div className="search-container">
          <div className="search-bar">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon2"
                onChange={handleSearch}
              />
              <InputGroup.Text>
                <FiSearch />
              </InputGroup.Text>
            </InputGroup>
          </div>
          <div className="search-results">
            {searchRes.length > 0 &&
              searchRes.map((item, index) => (
                <div className="result" key={index}>
                  <img className="img" src={item.imageUrl} alt=""></img>
                  <div className="full-name">{item.fullName}</div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
