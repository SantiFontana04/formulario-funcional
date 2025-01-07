import { useState } from "react"
import { Button, TextField, Switch, FormGroup, FormControlLabel, FormControl } from "@mui/material"

function FormSignUp() {
    const [name, setName] = useState("")

    return (
        <form>
            <TextField 
                id="name" 
                label="Nombre" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                onChange={(e) => {
                    console.log(e.target.value)
                    setName(e.target.value)
                }}
                value={name}
            />
            <TextField 
                id="latName" 
                label="Apellidos" 
                variant="outlined" 
                color="error" 
                fullWidth 
                margin="normal" 
            />
            <TextField 
                id="email" 
                label="Email" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
            />
            <FormGroup>
                <FormControlLabel 
                    control = {
                        <Switch defaultChecked/>
                } 
                    label="Promociones" 
                />
                <FormControlLabel
                    control = {<Switch defaultChecked/>}
                    label = "Novedades"
                />
            </FormGroup>
            <Button variant = "contained">Registrarse</Button>
        </form>
    )
}

export default FormSignUp