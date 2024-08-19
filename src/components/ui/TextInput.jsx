import { Input } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

export const TextInput = ({ onChange, placeholder }) => {
  return (
    <Center>
      <Input
        onChange={onChange}
        placeholder={placeholder}
        size="lg"
        width="lg"
        color="teal"
        backgroundColor="white"
        mb={5}
      />
    </Center>
  );
};
