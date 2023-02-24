import {Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

export const PostsSelect = () => {
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
                        <span>New posts first</span>
                    </MenuItem>
                    <MenuItem value={10}>Old posts first</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

