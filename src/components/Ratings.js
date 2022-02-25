import { Box, Rating } from "@mui/material";

export default function BasicRating({ rating, id, setRestaurants }) {
    const handleSubmitRating = (newValue) => {
        fetch(`https://bocacode-intranet-api.web.app/restaurants/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ rating: newValue }),
        })
            .then((res) => res.json())
            .then((data) => setRestaurants(data))
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <Box
            sx={{
                "& > legend": { mt: 0 },
            }}
        >
            <Rating
                name="simple-controlled"
                value={rating}
                precision={0.5}
                onChange={(event, newValue) => {
                    handleSubmitRating(newValue);
                }}
            />
        </Box>
    );
}