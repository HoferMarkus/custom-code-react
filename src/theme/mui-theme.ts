import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    primaryColor: string;
    secondaryColor: string;
    primaryFontColor: string;
    secondaryFontColor: string;
    whiteColor: string;
    whiteHoverColor: string;
    whiteActiveColor: string;
    lightGreyColor: string;
    lightGreenColor: string;
    lightRedColor: string;
    mediumGreyColor: string;
    borderColor: string;
    disabledGreyColor: string;
  }

  interface PaletteOptions {
    primaryColor?: string;
    secondaryColor?: string;
    primaryFontColor?: string;
    secondaryFontColor?: string;
    whiteColor?: string;
    whiteHoverColor?: string;
    whiteActiveColor?: string;
    lightGreyColor?: string;
    lightGreenColor?: string;
    lightRedColor?: string;
    mediumGreyColor?: string;
    borderColor?: string;
    disabledGreyColor?: string;
  }

  interface TypographyVariants {
    fontSmall: string;
    fontNormal: string;
    fontMedium: string;
    fontLarge: string;
    fontXLarge: string;
  }

  interface TypographyVariantsOptions {
    fontSmall?: string;
    fontNormal?: string;
    fontMedium?: string;
    fontLarge?: string;
    fontXLarge?: string;
  }
}

export const muiTheme = createTheme({
  palette: {
    primaryColor: 'var(--primary-color)',
    secondaryColor: 'var(--secondary-color)',
    primaryFontColor: 'var(--primary-font-color)',
    secondaryFontColor: 'var(--secondary-font-color)',
    whiteColor: 'var(--white-color)',
    whiteHoverColor: 'var(--white-hover-color)',
    whiteActiveColor: 'var(--white-active-color)',
    lightGreyColor: 'var(--light-grey-color)',
    lightGreenColor: 'var(--light-green-color)',
    lightRedColor: 'var(--light-red-color)',
    mediumGreyColor: 'var(--medium-grey-color)',
    borderColor: 'var(--border-color)',
    disabledGreyColor: 'var(--disabled-grey-color)',
  },
  typography: {
    fontSmall: 'var(--font-small)',
    fontNormal: 'var(--font-normal)',
    fontMedium: 'var(--font-medium)',
    fontLarge: 'var(--font-large)',
    fontXLarge: 'var(--font-x-large)',
  },
});
