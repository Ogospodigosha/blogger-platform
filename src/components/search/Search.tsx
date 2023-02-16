import React from 'react';
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
    return (
        <TextField
            sx={{ width: '672px', marginRight: '170px'}}
            size="small"
            // value={searchValue}
            // onChange={onSearchInputHandler}
            placeholder={'Search'}
            InputProps={{
                startAdornment: (
                    <InputAdornment position={'start'}>
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
        />
    );
};

