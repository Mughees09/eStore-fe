import { useState } from "react";

export const useForm = (obj) => {
  const [form, setForm] = useState({
    ...obj,
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return { form, handleChange };
};