import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="column" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between", flexDirection: { md: "row" } }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      {/* <img src="../../public/logo.jpg" alt="logo" height={45} width={200}/> */}
      <Typography variant="h4" fontWeight="bold" mb={0} sx={{ color: "white", paddingTop: "10px", paddingLeft: "10px" }}>
          <span style={{ color: "#6e52fb" }}> &lt; / &gt; </span>
          <span style={{ color: "#ffffff", fontFamily: "revert-layer" }}> code</span> 
          <span style={{ color: "#6e52fb" }}>Tube</span>
      </Typography>
    </Link>
    {/* <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
        Antinode Learning
    </Typography> */}
    <SearchBar />
  </Stack>
);

export default Navbar;
