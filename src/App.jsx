import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieList } from './components/MovieList';
import { FilterButton } from './components/FilterButton';
import { Button, Form } from 'react-bootstrap';

const App = () => {
  const [movies, setMovies] = useState([
    // Movie objects...
    {
      id: Math.random(),
      Title: "FAST X",
      Description: " production in 2023",
      Gender:"Action",
      Poster: "https://static.bunnycdn.ru/i/cache/images/2/26/26e5d063413fca41c8120643b655e2bc.jpg"
    },
    {
      id: Math.random(),
      Title: "The Super Mario",
      Description: "production in 2023",
      Gender:"Anime",
      Poster: "https://static.bunnycdn.ru/i/cache/images/a/a6/a626a19dca19799450594250720ebf38.jpg"
    },
    {
      id: Math.random(),
      Title: "The Covenant",
      Description: "production in 2023",
      Gender:"Action",
      Poster: "https://static.bunnycdn.ru/i/cache/images/3/3f/3f91fd4aecac8beea4e10a565f805576.jpg"
    },
  
    {
      id: Math.random(),
      Title: "Spider-Man",
      Description: "production in 2023",
      Gender:"Anime",
      Poster: "https://static.bunnycdn.ru/i/cache/images/1/1e/1e317d9e04806839aae58bd9e5a7f0fe.jpg"
    },
    {
      id: Math.random(),
      Title: "Mr. Bean's Holiday",
      Description: "production in 2007",
      Gender:"Comedy",
      Poster: "https://static.bunnycdn.ru/i/cache/images/2/25/2515d1ade3215b76a5fb72aa1d9038cb.jpg"
    }
  ]);

//  states declaration of gender and title
  const [filterGender, setFilterGender] = useState('');
  const [filterTitle, setFilterTitle] = useState('');

  // function to filter by gender or/and title before creating the card and return the only the matches:
  const handleFilter = () => {
    const filteredMovies = movies.filter(movie => {
      const genderMatch = filterGender ? movie.Gender === filterGender : true;
      const titleMatch = filterTitle ? movie.Title.toLowerCase().includes(filterTitle.toLowerCase()) : true;
      return genderMatch && titleMatch;
    });
    return filteredMovies;
  };

    // function to handle the additin of a new object in the movies table
  const handleAdd = (newMovie) => {setMovies([...movies, newMovie]);};

    // function to create a new object and lounch addition to Movies
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      Title: newTitle,
      Description: newDescript,
      Gender: newGender,
      Poster: newPoster
    };

    handleAdd(newMovie);

    // Reset the input fields
    setnewTitle('');
    setnewDescript('');
    setnewGender('');
    setnewPoster('');
  };

  // 4 states of newMovie datas
  const [newTitle, setnewTitle] = useState("newTitle");
  const [newDescript, setnewDescript] = useState("newDescript");
  const [newGender, setnewGender] = useState("newGender");
  const [newPoster, setnewPoster] = useState("newPoster");
  return (
    <>
    <br />
          {/* call the component of filter */}
          <FilterButton 
        filterGender={filterGender}
        filterTitle={filterTitle}
        setFilterGender={setFilterGender}
        setFilterTitle={setFilterTitle}
      />
      <br />
      {/* call the component which create movie list */}
      <MovieList allmovies={handleFilter()} />
      <br /> <br />
{/* Forum to enter new movie's datas */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Movie's Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Movie's Title"
            onChange={e => setnewTitle(e.target.value)}
          />
        </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description:</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter the movie's description" onChange={e=>setnewDescript(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gender:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={e => setnewGender(e.target.value)}
          >
            <option>Choose the gender</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Anime">Anime</option>
            <option value="Comedy">Comedy</option>
            <option value="Herror">Herror</option>
          </Form.Select>
        </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Poster's link:</Form.Label>
          <Form.Control
            type="link"
            placeholder="Enter Poster's link"
            onChange={e => setnewPoster(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </>
  );
}

export default App;
