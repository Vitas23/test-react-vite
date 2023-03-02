import { Box, IconButton, Stack } from '@mui/material';
import { Iconify } from '../../../components/Iconify/Iconify';
import { AccountPopover } from './AccountPopover';
import { StyledRoot, StyledToolbar } from './Header.styles';
import { LanguagePopover } from './LanguagePopover';
import { Searchbar } from './Searchbar';

interface HeaderProps {
  onOpenNav: () => void;
}

export const Header = ({ onOpenNav }: HeaderProps) => {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <LanguagePopover />
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
};
