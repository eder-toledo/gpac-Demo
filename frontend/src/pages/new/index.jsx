import React, { useState, useEffect } from "react";
import { Container, Button, Tabs, Tab } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function Index() {
  const [dataForm, setDataform] = useState({
    first_name: "",
    last_name: "",
    status: "",
    wish_salary: "",
    functional_title: "",
    title: "",
    seniority: "",
    industry: "",
    location: "",
    phone: "",
    email: "",
    company: "",
    status_process: "",
    relocation: "",
    registered_by: 1,
  });

  const [places, setPlaces] = useState({});

  const handleInputChange = (event) => {
    setDataform({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  const searchPlaceMapbox = (event) => {
    if (event.target.value.length > 3) {
      fetch(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          event.target.value +
          ".json?limit=5&access_token=pk.eyJ1IjoiZXRvbGVkbyIsImEiOiJja2tlOGdnOW0wNGZpMnZxdHNuZHN2aTBxIn0.8Ks9ntap65z15hF-Xr2b1Q"
      )
        .then((response) => response.json())
        .then((data) => setPlaces(data.features));
    } else {
      setPlaces({});
    }
  };

  const sendData = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataForm),
    };
    fetch("http://127.0.0.1:3333/candidates", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Not 2xx response");
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Container fixed maxWidth="md">
      <Typography variant="h4" color="initial">
        New Talent
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={3} spacing={2}>
          <Button variant="text" color="default">
            Save as draft
          </Button>
          <br></br>
          <Button variant="text" color="default" onClick={sendData}>
            Save and send
          </Button>
          <br></br>
          <Button variant="text" color="default">
            Discard
          </Button>
        </Grid>
        <Grid item xs={9} spacing={2}>
          <Tabs>
            <Tab label="Profile" />
            <Tab label="Resume" disabled />
            <Tab label="Social Profiles" disabled />
          </Tabs>

          <Grid container spacing={4}>
            <Grid item xs={4}>
              <TextField
                label="First Name"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                onChange={handleInputChange}
                name="first_name"
              />
              <TextField
                label="Wish Slary"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                onChange={handleInputChange}
                name="wish_salary"
              />
              <TextField
                label="Seniority"
                InputLabelProps={{
                  shrink: true,
                }}
                select
                SelectProps={{
                  native: true,
                }}
                fullWidth
                onChange={handleInputChange}
                name="seniority"
              >
                <option value=""></option>
                <option value="Value A">Value A</option>
                <option value="Value B">Value B</option>
              </TextField>
              <TextField
                label="Phone"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                onChange={handleInputChange}
                name="phone"
              />

              <TextField
                label="Status of process"
                InputLabelProps={{
                  shrink: true,
                }}
                select
                SelectProps={{
                  native: true,
                }}
                fullWidth
                onChange={handleInputChange}
                name="status_process"
              >
                <option value=""></option>
                <option value="Value A">Value A</option>
                <option value="Value B">Value B</option>
              </TextField>
            </Grid>
            <Grid item xs={4} space={2}>
              <TextField
                label="Last Name"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                onChange={handleInputChange}
                name="last_name"
              />
              <TextField
                label="Functional Title"
                InputLabelProps={{
                  shrink: true,
                }}
                select
                SelectProps={{
                  native: true,
                }}
                fullWidth
                onChange={handleInputChange}
                name="functional_title"
              >
                <option value=""></option>
                <option value="Value A">Value A</option>
                <option value="Value B">Value B</option>
              </TextField>
              <TextField
                label="Industry"
                InputLabelProps={{
                  shrink: true,
                }}
                select
                SelectProps={{
                  native: true,
                }}
                fullWidth
                onChange={handleInputChange}
                name="industry"
              >
                <option value=""></option>
                <option value="Value A">Value A</option>
                <option value="Value B">Value B</option>
              </TextField>
              <TextField
                label="Email"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                onChange={handleInputChange}
                name="email"
              />
              <TextField
                label="Relocation"
                InputLabelProps={{
                  shrink: true,
                }}
                select
                SelectProps={{
                  native: true,
                }}
                fullWidth
                onChange={handleInputChange}
                name="relocation"
              >
                <option value=""></option>
                <option value="Value A">Value A</option>
                <option value="Value B">Value B</option>
              </TextField>
            </Grid>
            <Grid item xs={4} space={2}>
              <TextField
                label="Status"
                InputLabelProps={{
                  shrink: true,
                }}
                select
                SelectProps={{
                  native: true,
                }}
                fullWidth
                onChange={handleInputChange}
                name="status"
              >
                <option value=""></option>
                <option value="Value A">Value A</option>
                <option value="Value B">Value B</option>
              </TextField>
              <TextField
                label="Title"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                onChange={handleInputChange}
                name="title"
              />
              <TextField
                label="Location"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                onChange={searchPlaceMapbox}
                name="places"
              />
              {places.length > 0 ? (
                <TextField
                  label="Places"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  select
                  SelectProps={{
                    native: true,
                  }}
                  fullWidth
                  onChange={handleInputChange}
                  name="location"
                >
                  <option value="">Select location by list place</option>
                  {places.map((place) => {
                    const placeString = {
                      name: place.place_name,
                      latlng: place.center,
                    };
                    return (
                      <option value={JSON.stringify(placeString)}>
                        {place.place_name}
                      </option>
                    );
                  })}
                </TextField>
              ) : (
                ""
              )}

              <TextField
                label="Company"
                InputLabelProps={{
                  shrink: true,
                }}
                select
                SelectProps={{
                  native: true,
                }}
                fullWidth
                onChange={handleInputChange}
                name="company"
              >
                <option value=""></option>
                <option value="Value A">Value A</option>
                <option value="Value B">Value B</option>
              </TextField>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
