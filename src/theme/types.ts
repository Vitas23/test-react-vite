import { Palette, TypeBackground } from '@mui/material/styles/createPalette';
import { Theme } from '@mui/material/styles/createTheme';

export interface CustomType {
  iconBorderRadius: number;
  iconBorderRadius2: number;
}
export interface CustomBackgroundType extends TypeBackground {
  neutral: string;
}

export interface CustomShadowsType {
  z1: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  card: string;
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

export interface PaletteOptionsExtended extends Palette {
  custom: CustomType;
  background: CustomBackgroundType;
}

export interface ThemeOptionsExtended extends Theme {
  palette: PaletteOptionsExtended;
  customShadows: CustomShadowsType;
}
