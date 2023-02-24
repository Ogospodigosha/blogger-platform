import {Box, FormControl, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import React from 'react';




export const MainSelect = () => {
    const [string, setString] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setString(event.target.value as string);
    };
    return (
        <Box sx={{ minWidth: 256 }}>
            <FormControl sx={{ m: 1, minWidth: 256 }}>
                <Select
                    value={string}
                    onChange={handleChange}
                    displayEmpty
                    size={'small'}
                >
                    <MenuItem value="">
                        <span>New blogs first</span>
                    </MenuItem>
                    <MenuItem value={10}>Old blogs first</MenuItem>
                    <MenuItem value={20}>From A to Z</MenuItem>
                    <MenuItem value={30}>From Z to A</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

