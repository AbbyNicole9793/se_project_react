import { useState } from "react" 

export function useForm(defaultValues = {}) {
  const safeDefaults = {
    email: "",
    password: "",
    name: "",
    avatar: "",
    ...defaultValues
  };

  const [values, setValues] = useState(safeDefaults);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return { values, setValues, handleChange };
}