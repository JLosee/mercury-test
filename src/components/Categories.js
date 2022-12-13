import { Chip, Box } from '@mui/material';

const CATEGORIES = [{ key: 0, label: "All" }, { key: 1, label: "General" }, { key: 2, label: "Knock-Knock" }, { key: 3, label: "Programming" }];

const Categories = ({ cat, setCat }) => {

    return (
        <Box sx={{ mt: 3, mb: 1, pl: 0 }}>
            {CATEGORIES.map((data) => {
                return (

                    <Chip key={data.key}
                        color={cat == data.label ? "primary" : "default"}
                        onClick={() => { setCat(data.label) }}
                        sx={{ mr: 1, mb: 1 }}
                        label={data.label}
                    />
                );
            })}
        </Box>
    );
}

export default Categories;