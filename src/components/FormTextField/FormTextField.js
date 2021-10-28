import react from 'react';
import { TextField } from "@mui/material";
import { Controller } from 'react-hook-form';

export default function FormTextField(props) {
    const {
        name,
        label,
        type,
        required,
        variant,
        defaultValue,
        control,
        rules,
        error,
        helperText,
        onChange,
        ...rest
    } = props;
    
    return (
        <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field: { onChange, value}}) => (
            <TextField 
            label={label}
            type={type}
            variant={variant}
            required={required}
            error={error}
            helperText={helperText}
            onChange={onChange}
            value={value}
            {...rest}
            />

        )}
        />
    );
}