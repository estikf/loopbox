import { Grid } from "@mui/material";
import React from "react";
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
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                    >
                        <CategoryCard
                            // subheader={"Consequatur rerum amet fuga expedita"}
                            id={1}
                            description={
                                "Feel the summer."
                            }
                            title={"House"}
                            imgURL={
                                "https://ae01.alicdn.com/kf/HTB1yx1ZSXXXXXaIXFXXq6xXFXXX8/MoonEmbassy-Alto-Saksafon-Minyat-r-Ekran-Sax-Modeli-Ger-ek-i-M-zik-Sevgilisi-do-um.jpg_Q90.jpg_.webp"
                            }
                            artist="Furkan Estik"
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                    >
                        <CategoryCard
                            // subheader={"Consequatur rerum amet fuga expedita"}
                            id={2}
                            description={
                                "Deep inspirational vibes."
                            }
                            title={"Melodic Techno"}
                            imgURL={
                                "https://revox.com/media/image/12/60/0e/Revox-Plattenspieler-STUDIOMASTER-T700-turntable-aufmacher.jpg"
                            }
                            artist="Furkan Estik"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
