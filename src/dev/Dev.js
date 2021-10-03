import React, {useRef} from 'react';
import {View, Button} from 'react-native';
import {Formik} from 'formik';
import {ToggleButton} from 'form/ToggleButton';

export function Dev() {
  const valor = useRef();
  return (
    <Formik
      initialValues={{
        valor: true,
        coisa: [],
      }}
      onSubmit={(values, {resetForm}) => {
        console.error(values);
      }}>
      {({handleChange, handleSubmit, values, setFieldValue}) => (
        <View>
          <ToggleButton
            ref={valor}
            label="marca"
            value={values.coisa.valor}
            onValueChange={value => setFieldValue('coisa.valor', value)}>
            Financially Responsible
          </ToggleButton>
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
}

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Formik, Field, Form } from 'formik';

// const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// const Basic = () => (
//   <div>
//     <h1>Sign Up</h1>
//     <Formik
//       initialValues={{
//         checked: [],
//       }}
//       onSubmit={async (values) => {
//         await sleep(500);
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       {({ values }) => (
//         <Form>

//           {/*
//             Multiple checkboxes with the same name attribute, but different
//             value attributes will be considered a "checkbox group". Formik will automagically
//             bind the checked values to a single array for your benefit. All the add and remove
//             logic will be taken care of for you.
//           */}
//           <div id="checkbox-group">Checked</div>
//           <div role="group" aria-labelledby="checkbox-group">
//             <label>
//               <Field type="checkbox" name="checked" value="One" />
//               One
//             </label>
//             <label>
//               <Field type="checkbox" name="checked" value="Two" />
//               Two
//             </label>
//             <label>
//               <Field type="checkbox" name="checked" value="Three" />
//               Three
//             </label>
//           </div>

//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

// ReactDOM.render(<Basic />, document.getElementById('root'));
