import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const TextFieldStyle = styled(TextField)({
  marginBottom: '10px',
  backgroundColor: 'rgb(211,211,211)',
  '&:hover': {
    backgroundColor: 'rgb(192,192,192)',
  },
});

export default TextFieldStyle;

