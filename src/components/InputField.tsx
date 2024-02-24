import { useState } from "react";
import {
  HidePassIcon,
  ShowPassIcon,
  Container,
  Wrapper,
  Input,
  ErrorText,
} from "./InputField.styles";

export type InputProps = {
  placeholder: string;
  icon: React.ReactNode;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name?: string;
  error?: string;
  width?: string;
};

export const InputField = ({
  placeholder,
  icon,
  type,
  required,
  value,
  onChange,
  name,
  error,
  width = "",
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordIcon = () => {
    setShowPassword(!showPassword);
  };

  const renderPasswordIcon = () => {
    if (showPassword) {
      return <HidePassIcon onClick={togglePasswordIcon} />;
    } else {
      return <ShowPassIcon onClick={togglePasswordIcon} />;
    }
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <Container $width={width}>
      <Wrapper>
        {icon}
        <Input
          placeholder={placeholder}
          type={inputType}
          required={required}
          value={value}
          onChange={onChange}
          name={name}
        />

        {type === "password" && renderPasswordIcon()}
      </Wrapper>

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};
