import { useState } from "react";
import {
  HidePassIcon,
  ShowPassIcon,
  Container,
  Wrapper,
  Input,
  ErrorText,
  Label,
} from "./InputField.styles";

export type InputProps = {
  placeholder: string;
  icon?: React.ReactNode;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name?: string;
  error?: string;
  width?: string | null;
  label?: string | null;
};

export const InputField = ({
  placeholder,
  icon = null,
  label = null,
  type,
  required,
  value,
  onChange,
  name,
  error,
  width = null,
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
      {label && <Label htmlFor={name}>{label}</Label>}
      <Wrapper>
        {icon}
        {type !== "description" && (
          <Input
            className="input-field"
            id={name}
            placeholder={placeholder}
            type={inputType}
            required={required}
            value={value}
            onChange={onChange}
            name={name}
            $error={Boolean(error)}
          />
        )}
        {type === "description" && <div> Other input</div>}
        {type === "password" && renderPasswordIcon()}
      </Wrapper>

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};
