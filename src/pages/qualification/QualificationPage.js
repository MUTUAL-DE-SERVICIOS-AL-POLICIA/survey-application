import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme()


export default function QualificationPage() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            Soy la página de calificación
        </ThemeProvider>
    )
}