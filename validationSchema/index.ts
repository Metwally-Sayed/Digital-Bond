import * as Yup from 'yup';

export const validationSchema = Yup.object({
  fullName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string().email("Please enter a valid email").required("Required"),
  position: Yup.string().required(),
  expectedSalary: Yup.number().required("Required"),
  attachment: Yup.string().required("Required"),
  // i mean add not reuired
  address: Yup.string().max(30, "you reached to the max off characters"),
  phoneNumber: Yup.number().required("Required"),
  dateOfBirth: Yup.date().required("Required"),
  availacilityDate: Yup.date().required("Required"),
})