import { Card, CardMedia, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";

export const CategoryCard = ({
    id,
    title,
    imgURL,
    description,
    artist,
    bgColor,
}) => {
    const theme = useTheme();
    const history = useHistory();

    const cardStyle = {
        borderRadius: "1rem",
        backgroundColor: bgColor ? bgColor : "#0c2461",
        transition: "0.5s ease all",
        ":hover": {
            cursor: "pointer",
            backgroundColor: "#2c53a8",
        }
    }

    const handleOnClick = () => {
        history.push(`/${id}`);
    }

    return (
        <Card
            elevation={3}
            sx={cardStyle}
            onClick={handleOnClick}
        >
            <Box>
                <Box>
                    <CardMedia
                        component="img"
                        height={"200rem"}
                        image={imgURL && imgURL}
                        alt={title && title}
                    />
                </Box>
                <Box p={2} minHeight="5rem" maxHeight={"5rem"}>
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.grey[100]}
                        textAlign={"start"}
                    >
                        {title && title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color={theme.palette.grey[400]}
                        textAlign={"start"}
                    >
                        {description && description}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color={theme.palette.grey[400]}
                        textAlign={"start"}
                    >
                        {artist && artist}
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
};
