import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer, StyledRoot } from './DashboardLayout.styles';
import { Header } from './Header/Header';
import { NavigationBar } from './NavigationBar/NavigationBar';

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledRoot>
      <Header onOpenNav={() => setOpen(true)} />

      <NavigationBar openNav={open} onCloseNav={() => setOpen(false)} />

      <MainContainer>
        <Outlet />
      </MainContainer>
    </StyledRoot>
  );
};

export default DashboardLayout;
