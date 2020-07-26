import React, {useState} from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

const Form = ({ lngLat, addPoint }) => {

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    };

    const addItem = () => {
        const { title, description, lngLat } = values;
        const lngLatArr =  Object.values(lngLat);
        const customPoint = {
            "type": "Feature",
            "properties": {
                "title": title,
                "description": description
            },
            "geometry": {
                "type": "Point",
                "coordinates": lngLatArr
            }
        };

        if (!title || !description ) {
            return 'Add all options'
        }
        addPoint(customPoint)
    };

    const [values, setValues] = useState({title: '', description: '', lngLat: lngLat})
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        value={values.title}
                        name="title"
                        label="Point title"
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        multiline
                        rows="2"
                        required
                        onChange={handleInputChange}
                        name="description"
                        value={values.description}
                        label="Description"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={addItem}
                    >Add</Button>
                </Grid>
            </Grid>
        </form>
    )
}

Form.propTypes = {
    lngLat: PropTypes.object.isRequired,
};

export default Form

