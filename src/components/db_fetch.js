import axios from "axios";

const GetRequest = () => {
  axios
    .request({
      method: "get",
      baseURL:
        "https://api.trakt.tv/oauth/authorize?response_type=code&client_id=c5c44e51fbfa6b8beaf355c7cc1151e4c37545a6bef1143ea51cdd8ac45052d3&redirect_uri=http://localhost:3000/",
    })
    .then((response) => {
      console.log(response);
    });

  return (
    <div>
      <p>Hello</p>
    </div>
  );
};

export default GetRequest;
// code = 1c79e44d0c7aa020fa06b8f12c042810abadd0b39fad14e98ee10cf51cd91f18
