import loopkits from '../../data/loopkits.json'
import { Grid } from "@mui/material";
import { CategoryCard } from "./CategoryCard";

export const Categories = () => {
    return (
        <Grid
            container
            justifyContent={"center"}
            alignItems="center"
            direction={"row"}
            height="100%"
            p={2}
        >
            <Grid item xs={12}>
                <Grid container justifyContent={"center"} spacing={2}>
                    {loopkits.list.map((i) => (
                        <Grid 
                            key={i.id}
                            item xs={12} 
                            sm={6} 
                            md={3}
                        >
                            <CategoryCard
                                id={i.id}
                                description={i.description}
                                title={i.title}
                                imgURL={i.img}
                                artist={i.artist}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
