import { Box, Button, Checkbox, Grid, InputLabel, ListItemText, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const categories = [
    "Jewelry",
    "Handbags",
    "Glasses and Sunglasses",
    "Whisky",
    "Wine",
    "Collectibles",
];

const vaultik = [
    "Physical Store",
    "eCommerce",
];

const eCommerce = [
    "Shopify",
    "Woocommerce",
    "Square",
    "Custom",
    "Other",
];

function Form() {
    const [businessName, setBusinessName] = useState('');
    const [isCategories, setCategories] = useState([]);
    const [isVaultik, setVaultik] = useState([]);
    const [selectOther, setSelectOther] = useState(false);
    const [isOther, setOthersValue] = useState(null);
    const [isECommerce, setECommerce] = useState([]);
    const [isError, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(true);

    useEffect(() => {
        if (isCategories.length > 0 && isVaultik.length > 0 && (isVaultik.includes("eCommerce") ? isECommerce.length > 0 : isVaultik.includes("Physical Store"))) {
            setIsFormValid(false);
            // Perform form submission
            console.log("Form submitted successfully!");
        } else {
            setIsFormValid(true);
        }
    }, [isCategories, isVaultik, isECommerce])

    const handleClose = (field, message, value) => { 
        if (!value.length) {
            setErrors(prevErrors => ({ ...prevErrors, [field]: `${message} is required!` }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, [field]: '' }));
        }
    };

    const handleChangeBusinessName = (event) => {
        const { value } = event.target;
        setBusinessName(value);
        handleClose('businessName', 'Business Name', value)
    };

    const handleChangeSell = (event) => {
        const { target: { value } } = event;

        if (!value.includes(undefined)) {
            setCategories(typeof value === 'string' ? value.split(',') : value);
        }
    };

    const handleChangeVaultik = (event) => {
        const { target: { value } } = event;
        setVaultik(typeof value === 'string' ? value.split(',') : value);
    };

    const handleChangeECommerce = (event) => {
        const { target: { value } } = event;
        setECommerce(typeof value === 'string' ? value.split(',') : value);
    };

    const handleOnOtherCategories = (event) => {
        event.preventDefault();
        if (event.target.value) {
            setOthersValue(event.target.value);
        }
    };

    const onSubmit = async (formData) => {
        console.log(formData);
    };

    return (
        <Box sx={{ padding:"2%"}}>
            <Grid sx={{ mb: 2 }} align={"left"}> <Typography variant='h6'>Tell us about yourself</Typography></Grid>

            <form>
                <Box sx={{ display: "grid", textAlign: "left" }}>
                    <InputLabel sx={{ mt: 2, mb: 1 }}>What is your Business Name?</InputLabel>
                    <TextField className='input_field' id="outlined-basic" value={businessName}
                        onChange={handleChangeBusinessName}
                        onBlur={() => handleClose('businessName', 'Business Name', businessName)}
                    />

                    {isError.businessName && <span>{isError.businessName}</span>}

                    <InputLabel sx={{ mt: 2, mb: 1 }}>What do you want to sell?</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        className='input_field'
                        multiple
                        value={isCategories}
                        onChange={handleChangeSell}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        onClose={() => handleClose('categories', "Categories", isCategories)}
                    >
                        {categories.map((name, idx) => (
                            <MenuItem className='menu_item' key={idx} value={name}>
                                <Checkbox checked={isCategories.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}

                        {selectOther ? (
                            <MenuItem className="other_ menu_item" value={isOther && isOther}>
                                <Checkbox checked={isOther && isCategories.indexOf(isOther) > -1} />
                            </MenuItem>
                        ) : (
                            <MenuItem className='menu_item' onClick={() => setSelectOther(true)}>
                                <Checkbox checked={selectOther} />
                                <ListItemText primary="Other" />
                            </MenuItem>
                        )}

                        {selectOther && (
                            <input
                                type="text"
                                className='text_field'
                                placeholder="Enter Other Category"
                                onChange={(e) => handleOnOtherCategories(e)}
                            />
                        )}
                    </Select>
                    {isError.categories && <span>{isError.categories}</span>}

                    <InputLabel sx={{ mt: 2, mb: 1 }}>In what type of stores are you going to use Vaultik?</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={isVaultik}
                        className='input_field'
                        onChange={handleChangeVaultik}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        onClose={() => handleClose('vaultik', 'Vaultik', isVaultik)}
                    >
                        {vaultik.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={isVaultik.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                    {isError.vaultik && <span>{isError.vaultik}</span>}

                    {isVaultik.includes("eCommerce") && (
                        <>
                            <InputLabel sx={{ mt: 2, mb: 1 }}>What eCommerce are you using?</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                className='input_field'
                                multiple
                                value={isECommerce}
                                onChange={handleChangeECommerce}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                                onClose={() => handleClose('eCommerce', 'E-Commerce', isECommerce)}
                            >
                                {eCommerce.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={isECommerce.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                            {isError.eCommerce && <span>{isError.eCommerce}</span>}
                        </>
                    )}

                    <Button variant="contained" disabled={isFormValid} sx={{ mt: 2, mb: 1 }}>Next</Button>
                </Box>
            </form>
        </Box>
    );
}

export default Form;
