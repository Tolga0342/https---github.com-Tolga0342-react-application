import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, placeholder }) => {
  return <Input onChange={onChange} placeholder={placeholder} size="lg" />;
};
