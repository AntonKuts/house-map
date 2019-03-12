import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


function App() {


  const [templates, setTemplates] = useState(
    {
      "id": 0
    }
  );
  const [counts, setCounts] = useState(
    {
      full_address: "адрес!"
    }
  );

  useEffect(() => {
    axios.get('http://demo4452328.mockable.io/properties')
        .then(function (response) {
          // console.log(response);
          let data = response.data.data;
          console.log(data);
          console.log("full_address: " + data[1].full_address);
          setCounts(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    //   }, []);

  axios.get('http://demo4452328.mockable.io/templates')
      .then(function (response2) {
        console.log(response2);
        let data = response2.data;
        console.log(data);
        // console.log("full_address: " + data[1].full_address);
        // setCounts(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }, []);
  return (
    <div className="">
      <form className='' autoComplete="off">
        <FormControl className=''>
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            // value={this.state.age}
            // onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
            <MenuItem value="30">Thirty</MenuItem>
          </Select>
        </FormControl>
       </form>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
          <Card className="card">
            <CardActionArea>
              <CardMedia
                className="media"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>


    </div>
  );
}




//
// const App = () => {
//   axios.get('http://demo4452328.mockable.io/properties')
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//
//
//     return (
//       // <div className="">
//
//         // <header className="App-header">
//         //   <img src={logo} className="App-logo" alt="logo" />
//           // <p>
//           //   Edit <code>src/App.js</code> and save to reload.
//           // </p>
//           <Button variant="contained" color="primary">
//       Hello World
//     </Button>
//         //   <a
//         //     className="App-link"
//         //     href="https://reactjs.org"
//         //     target="_blank"
//         //     rel="noopener noreferrer"
//         //   >
//         //     Learn React
//         //   </a>
//         // </header>
//   //       <Button waves='light'>
//   //   <Icon>thumb_up</Icon>
//   // </Button>
//         // <Card className='small'
//         //   // header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
//         //   actions={[<a href='#'>This is a Link</a>]}>
//         //   I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
//         // </Card>
//       // </div>
//     );
//   }

export default App;
