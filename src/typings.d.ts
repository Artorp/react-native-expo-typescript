/**
 * react-navigation/NavigationTestUtils is a test module
 * that should only be used for testing
 *
 * this declaration is missing from @types/react-navigation
 */
declare module "react-navigation/NavigationTestUtils" {
  export default NavigationTestUtils as {
    resetInternalState: () => void;
  };
}
