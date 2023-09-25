import { extendTheme } from '@chakra-ui/react';
import Headings from './uielements/HeadingVariants';
// import { mode } from '@chakra-ui/theme-tools';
const theme = extendTheme({
  // styles: {
  //     global: (props) => ({
  //         body: {
  //             bg: mode('#f8f9fb', '#f8f9fb')(props),
  //         },
  //         fontFamily: "`M PLUS Rounded 1c`"
  //     }),
  // },
  // fonts: {
  //     body: `'M PLUS Rounded 1c'`
  // },
  // custom ui-elements here
  components: {
    Heading: Headings,
  },
});
// frequently used same style here
// const wrapperPadding = {
//     base: '10px 10px',
//     md: '10px 80px'
// };
// export { wrapperPadding };
export default theme;
