import styled from '@emotion/styled';
import pink_ellipse from '../../img/figures/pink_ellipse.svg';
import purple_ellipse from '../../img/figures/purple_ellipse.svg';
// import Frame from '../../img/illustrations/Frame.svg';
import BublePurp from 'assets/images/ellipse-purple.svg';
import BublRed from 'assets/images/ellipse-pink.svg';
import { theme } from 'Styles/theme';

export const LoginFormPage = styled.div(({ theme }) => ({
  margin: '0',
  display: 'Flex',
  gap: '38px',
  backgroundColor: theme.colors.mainBgUnderColor,
  backgroundRepeat: 'no-repeat, no-repeat',
  backgroundImage: `url(${BublRed}), url(${BublePurp})`,
  backgroundPosition: 'top -150px right -150px, bottom -150px left -150px',
}));

export const Illustration = styled.img(({ theme }) => ({
  width: '435px',
  display: 'block',
  margin: '0 auto',
  // width: '100%',
  // height: '420px',
  // height: '420px',
}));

export const IllustrationWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: '150px',
}));

export const FormWrapper = styled.div(({ theme }) => ({
  //   marginLeft: '32px',
  display: 'block',
  width: '100%',
  //   marginLeft: 'auto',
  //   justifyContent: 'center',
  //   width: '435px',
  //   height: '420px',

  backgroundColor: theme.colors.mainBgLighter,
  backdropFilter: 'blur(25px)',
  //   blur: '25px',
}));

export const IllustrationDesc = styled.p(({ theme }) => ({
  marginTop: '28px',
  padding: '0',
  textAlign: 'center',
  fontFamily: theme.fonts.main,
  fontSize: '30px',
  lineHeight: '45px',
  color: theme.colors.textMain,
  fontWeight: '400',
  zIndex: '10',
}));

export const FormBlock = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  margin: '136px 91px 116px 107px',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '40px 61px 62px 61px',

  width: '532px',
  height: '468px',

  alignItems: 'center',
  //   justifyContent: 'center',
  backgroundColor: theme.colors.whiteColor,
  color: theme.colors.textMain,
  //   borderRadius: '20px',
  borderRadius: theme.radii.currency,
}));

export const FormBlockMobile = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  // margin: '136px 91px 116px 107px',
  // marginLeft: 'auto',
  // marginRight: 'auto',
  // padding: '40px 61px 62px 61px',

  minWidth: '280px',
  height: '568px',

  alignItems: 'center',
  //   justifyContent: 'center',
  backgroundColor: theme.colors.whiteColor,
  color: theme.colors.textMain,
  //   borderRadius: '20px',
  borderRadius: theme.radii.currency,
}));

export const FormWrapperMobile = styled.div(({ theme }) => ({
  //   marginLeft: '32px',
  display: 'block',
  width: '100%',
  //   marginLeft: 'auto',
  //   justifyContent: 'center',
  //   width: '435px',
  //   height: '420px',

  backgroundColor: theme.colors.mainBgLighter,
  backdropFilter: 'blur(25px)',
  //   blur: '25px',
}));

export const Overlay = styled.div`
  position: fixed;
  top: 360px;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.25); */

  /* overflow-y: hidden; */
  z-index: 100;

  @media (min-width: 768px) {
    min-width: 603px;
    min-height: 540px;
    top: 0;
  }
`;

export const BubbleWrapper = styled.div(({ theme }) => ({
  width: '100%',
  height: '100vh',
  minHeight: '800px',
  zIndex: 1,
  background: theme.colors.BgMain,
  '::after': {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
    content: '""',
    // filter: 'blur(25px)',
    background: `url('${BublePurp}') bottom left no-repeat, url('${BublRed}') top right no-repeat `,
  },
}));

export const FormBlockTab = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '40px 61px 62px 61px',

  width: '532px',

  alignItems: 'center',

  backgroundColor: theme.colors.whiteColor,
  color: theme.colors.textMain,

  borderRadius: theme.radii.currency,
}));

export const IllustrationWrapperTab = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: '60px',
  paddingLeft: '114px',
  position: 'absolute',
}));
