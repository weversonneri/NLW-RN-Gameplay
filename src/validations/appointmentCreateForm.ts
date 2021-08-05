import * as yup from 'yup';

export const schema = yup.object().shape({
  guild: yup.object().required(),
  category: yup.string().required(),
  day: yup.string().required(),
  month: yup.string().required(),
  hour: yup.string().required(),
  minute: yup.string().required(),
  description: yup.string().required()
});
