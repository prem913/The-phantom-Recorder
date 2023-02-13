import {
    Box,
    Paper,
    styled,
    TextField,
    Button,
    ListItemButton,
    List,
    Container,
    Table,
    TableHead,
    TableRow,
    TableCell,
    Typography,
    TablePagination,
  } from '@mui/material';
  
  
  export const StyledPaper = styled(Paper)(({ theme }) => ({
    boxShadow:
      'rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
  }));
  
  export const StyledTextField = styled(TextField)(
    ({ theme }) => ({
      minWidth: 100,
      width: 400,
      '& .MuiInputBase-root': {
        borderRadius: theme.spacing(1),
      },
      '& label.Mui-focused': {
        color: theme.palette.primary.main,
      },
      '& .MuiFormControl-root': {
        color: theme.palette.secondary.main,
      },
      '& .MuiFormHelperText-root': {
        color: theme.palette.primary.main,
      },
    })
  );
  
  export const ContainerColumnBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
  }));
  export const ContainerRowBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }));
  
  export const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.25)',
    border:'2px solid transparent',
    backgroundColor: theme.primary,
    [theme.breakpoints.up('lg')]: {
      minWidth: theme.spacing(20),
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'transparent',
      borderColor: '#A997DF',
    },
    '& .MuiButton-startIcon .MuiCircularProgress-root': {
      height: '20px !important',
      width: '20px !important',
    },
  }));
  
  // Side Drawer Styles
  
  
  // Lists
  export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    '&.Mui-selected': {
      '& .MuiTypography-root': {
        fontWeight: 500,
      },
      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
      },
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.redColor.main,
    },
    '& .MuiSvgIcon-root': {
      color: theme.palette.secondary.dark,
    },
  
    color: theme.palette.secondary.dark,
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1 / 2),
  
    [theme.breakpoints.down('sm')]: {
      '& .MuiListItemIcon-root': {
        minWidth: 'unset',
        alignItems: 'center',
        flexGrow: 1,
      },
  
      padding: theme.spacing(1, 1),
    },
  }));
  
  export const StyledList = styled(List)(({ theme }) => ({
    '& .MuiListSubheader-root': {
      textTransform: 'uppercase',
      color: theme.palette.blackColor.main,
      fontWeight: 700,
    },
  
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1 / 2),
    },
    padding: theme.spacing(0, 2),
  }));
  
  // Styled container
  
  export const StyledContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.up('xs')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }));
  
  // Styled table
  
  export const StyledTable = styled(Table)(({ theme }) => ({}));
  export const StyledTableHead = styled(TableHead)(({ theme }) => ({}));
  export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&.Mui-selected': {
      backgroundColor: 'rgba(0,0,0,0.04)',
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'rgba(0,0,0,0.04)',
    },
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0, 0, 0, 0.01)',
    },
    '&:focus': {},
  }));
  export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    fontSize: 'unset',
    borderBottom: 'none',
    '&:first-of-type': {
      paddingLeft: theme.spacing(3),
      borderTopLeftRadius: theme.spacing(1),
      borderBottomLeftRadius: theme.spacing(1),
    },
    '&:last-of-type': {
      borderTopRightRadius: theme.spacing(1),
      borderBottomRightRadius: theme.spacing(1),
      paddingRight: theme.spacing(3),
    },
  }));
  export const StyledTableHeadCell = styled(StyledTableCell)(({ theme }) => ({
    fontWeight: 600,
    padding: theme.spacing(2),
    color: theme.palette.greyColor.dark,
    backgroundColor: theme.palette.greyColor.light,
  }));
  
  // Status Display
  
  export const StyledStatus = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: theme.spacing(3),
    display: 'inline-flex',
    justifyContent: 'center',
    minWidth: theme.spacing(3),
    borderRadius: theme.spacing(1),
    alignItems: 'center',
    fontSize: '0.75rem',
  }));
  
  // Table Pagination
  
  export const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
    borderBottom: 'none',
  }));
  