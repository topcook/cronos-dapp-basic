import React from "react";
import Typography from "@mui/material/Typography";
import { AppBar, Box } from "@mui/material";
import './index.scss';

interface IProps { }

const Footer: React.FC<IProps> = () => {
  return (
    <div className='footer'>
      <Box>
        <AppBar>
          <Box>
            <Typography>App provided as is</Typography>
          </Box>
        </AppBar>
      </Box>
    </div>
  );
};

export default Footer;
