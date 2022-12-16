import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="faq" subTitle="Frequently Asked Question page"></Header>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        {" "}
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, asperiores! Similique asperiores debitis ipsum a minima quidem architecto fugiat quam accusantium aperiam aliquam nostrum maxime ducimus facilis, animi, illum perspiciatis.</AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        {" "}
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, asperiores! Similique asperiores debitis ipsum a minima quidem architecto fugiat quam accusantium aperiam aliquam nostrum maxime ducimus facilis, animi, illum perspiciatis.</AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        {" "}
                        Your favorite Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, asperiores! Similique asperiores debitis ipsum a minima quidem architecto fugiat quam accusantium aperiam aliquam nostrum maxime ducimus facilis, animi, illum perspiciatis.</AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        {" "}
                        Some Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, asperiores! Similique asperiores debitis ipsum a minima quidem architecto fugiat quam accusantium aperiam aliquam nostrum maxime ducimus facilis, animi, illum perspiciatis.</AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        {" "}
                        Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, asperiores! Similique asperiores debitis ipsum a minima quidem architecto fugiat quam accusantium aperiam aliquam nostrum maxime ducimus facilis, animi, illum perspiciatis.</AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default FAQ;
