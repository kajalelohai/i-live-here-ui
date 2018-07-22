import * as React from 'react';
import { Formik, InjectedFormikProps } from 'formik';

// to pass props. declares the shape of the object and the types associated with the keys
// must declare an interface for the state of class components
interface PropsThatWillBePassedToTheWrappedComponent {
  username?: ''; // ? means its optional i.e its type can be either string | undefined
  password?: '';
}

interface ShapeOfWhatMapPropsToValuesReturns {}

interface ShapeOfWhatMapValuesToPayloadReturns {}

export const LoginForm: React.SFC<
  InjectedFormikProps<
    PropsThatWillBePassedToTheWrappedComponent,
    ShapeOfWhatMapPropsToValuesReturns
  >
> = (props) => (
  <div>
    <h1>Sign In</h1>
    <form>
      <input id="username" placeholder="User Name" type="text" />
      <input id="password" placeholder="Password" type="password" />
    </form>
  </div>
);

export default Formik<
  PropsThatWillBePassedToTheWrappedComponent,
  ShapeOfWhatMapPropsToValuesReturns
>({})(LoginForm);
