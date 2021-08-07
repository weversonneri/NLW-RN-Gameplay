import * as yup from 'yup';

export const schema = yup.object().shape({
  guild: yup.object().required(),
  category: yup.string().required(),
  day: yup.string().required(),
  month: yup.number().min(0).max(12).required(),
  hour: yup.number().min(0).max(23).required(),
  minute: yup.number().min(0).max(59).required(),
  description: yup.string().required()
});
