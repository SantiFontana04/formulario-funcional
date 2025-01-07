import { useState } from "react"
import { Button, TextField, Switch, FormGroup, FormControlLabel, FormControl } from "@mui/material"

function FormSignUp({ handleSubmit }) {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [promo, setPromo] = useState(true)
    const [nov, setNov] = useState(false)

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: "Debe tener al menos 3 caracteres"
        }
    })

    function validarNombre(name){
        if(name.length >= 3){
            return { name: {error: false, message: ""} }
        } else {
            return { name: {error: true, message: "Debe tener al menos 3 caracteres"} }
        }
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit({
                name, 
                lastName, 
                email, 
                promo, 
                nov
            })
        }}>
            <TextField 
                id="name" 
                label="Nombre" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                onChange={(e) => setName(e.target.value)}
                value={name}
                error={ errors.name.error }
                helperText={errors.name.error ? errors.name.message : ""}
                onBlur={(e) => {
                    setErrors(validarNombre(e.target.value))
                }}
            />
            <TextField 
                id="latName" 
                label="Apellidos" 
                variant="outlined"  
                fullWidth 
                margin="normal"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <TextField 
                id="email" 
                label="Email" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormGroup>
                <FormControlLabel 
                    control = {
                        <Switch
                        checked = {promo} 
                        onChange={(e) => setPromo(e.target.checked)} 
                        />
                } 
                    label="Promociones" 
                />
                <FormControlLabel
                    control = {<Switch checked= {nov} onChange={(e) => setNov(e.target.checked)} />}
                    label = "Novedades"
                />
            </FormGroup>
            <Button variant = "contained" type="submit">Registrarse</Button>
        </form>
    )
}

export default FormSignUp