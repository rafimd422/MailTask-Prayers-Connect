import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const filter = createFilterOptions();

const top100Films = [
  { title: 'Hackerrank', key: 2 },
  { title: 'Codeforces', key: 4 },
  { title: 'Google', key: 3 },
  { title: 'Microsoft', key: 1 },
];

const SearchAutoComplate = () => {
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = React.useState(top100Films);

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: 10,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const handleAddOption = (inputValue) => {
    const newOption = { title: inputValue, key: Date.now() };
    setOptions([...options, newOption]);
    setValue(newOption);
  };

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          handleAddOption(newValue.inputValue);
        } else {
          setValue(newValue);
        }
      }}
      onInputChange={(event, newInputValue) => {
        // If the user is typing a new value, update the state
        if (value && value.inputValue !== newInputValue) {
          setValue({
            title: newInputValue,
          });
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }
        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={options}
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <Box sx={{ width: 300 }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <TextField {...params} label="Search" placeholder="Search…" />
        </Box>
      )}
    />
  );
};

export default SearchAutoComplate;
