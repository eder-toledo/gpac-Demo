import React from "react";
import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useCandidates } from "../../context/candidates-context";
import { makeStyles } from "@material-ui/core/styles";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZXRvbGVkbyIsImEiOiJja2tlOGdnOW0wNGZpMnZxdHNuZHN2aTBxIn0.8Ks9ntap65z15hF-Xr2b1Q",
});

const useStyles = makeStyles((theme) => ({
  marker: {
    width: "50px",
    height: "auto",
  },
  textMarker: {
    color: "white",
    padding: 0,
    margin: 0,
    marginTop: "-44px",
    fontSize: "20px",
    width: "50px",
    textAlign: "center",
    font: "normal normal bold 19px/23px Montserrat",
  },
}));

export default function Index() {
  const classes = useStyles();

  const { candidates } = useCandidates();

  const markers =
    candidates === null
      ? ""
      : candidates.map((candidate) => {
          return (
            <Marker
              coordinates={[-0.13235092163085938, 51.518250335096376]}
              anchor="bottom"
              key={candidate.id}
            >
              <img className={classes.marker} src="/assets/marker.svg" />
              <p className={classes.textMarker}>
                {candidate.first_name[0] + candidate.last_name[0]}
              </p>
            </Marker>
          );
        });

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "95vh",
        width: "100%",
      }}
    >
      {markers}
    </Map>
  );
}
