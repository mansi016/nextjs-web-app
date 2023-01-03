import Autocomplete from "react-google-autocomplete";

export default function Accommodation() {
  return (
    <>
      <div>
        <h2>Welcome to accommodation</h2>
        <div>
          <Autocomplete
            apiKey="ABcsdfojwdDOSFNOSnowiwbnf" // place your google map api key here
            onPlaceSelected={(place) => console.log(place)}
          />
        </div>
      </div>
    </>
  );
}
