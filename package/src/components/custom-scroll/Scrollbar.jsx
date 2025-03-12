import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { useMediaQuery } from "@mui/material";

const SimpleBarStyle = styled(SimpleBar)(() => ({
    maxHeight: "100%",
}));


const Scrollbar = (props) => {
    const { children, sx, ...other } = props;
    const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

    if (lgDown) {
        return <Box sx={{ overflowX: "auto" }}>{children}</Box>;
    }

    return (
        <SimpleBarStyle sx={sx} {...other}>
            {children}
        </SimpleBarStyle>
    );
};

export default Scrollbar;
