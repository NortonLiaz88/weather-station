import {
  FormControl,
  MenuItem,
  OutlinedInput,
} from '@mui/material';
import React, { useEffect } from 'react';
import {FieldError} from '../field-error';
import {InputSkeleton} from '../input-skeleton';
import {Container, CustomSelect, Label} from './styles';

export interface SelectProps {
  name: string;
  value: string;
  id: string;
}

interface Props {
  label: string;
  error?: string;
  loading?: boolean;
  selectItems: any[];
  onChange: (value: any) => void;
  onBlur: (value: any) => void;
  multiple?: boolean;
  value: string | string[];
  disabled?: boolean;
}

export const Select: React.FC<Props> = ({
  error,
  label,
  loading,
  multiple,
  selectItems,
  disabled,
  onBlur,
  onChange,
  value,
}: Props) => {

  useEffect(() => {
    console.log('RAPAZ', selectItems)
  }, [])

  return (
    <Container>
      {loading ? (
        <InputSkeleton />
      ) : (
        <FormControl sx={{m: 1, minWidth: 120, width: '100%', margin: 0}}>
          <Label>{label}</Label>

          <CustomSelect
            disabled={disabled}
            autoWidth
            error={!!error}
            displayEmpty
            value={value}
            input={<OutlinedInput />}
            multiple={multiple ?? false}
            onChange={onChange}
            onBlur={onBlur}>
            {selectItems.length > 0 &&
              selectItems.map(item => (
                <MenuItem
                  sx={{fontSize: '1.4rem', width: '40rem'}}
                  key={item.id}
                  value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
          </CustomSelect>
          {error && <FieldError error={error} />}
        </FormControl>
      )}
    </Container>
  );
};
