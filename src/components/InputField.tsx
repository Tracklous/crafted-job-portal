import { useState } from "react";
import {
  HidePassIcon,
  ShowPassIcon,
  Container,
  Wrapper,
  Input,
  ErrorText,
  Label,
  DescriptionBox,
} from "./InputField.styles";

export type InputProps = {
  placeholder: string;
  icon?: React.ReactNode;
  type: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTextAreaChange?: (
    // Todo: Need to address this typescript issue.
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  name?: string;
  error?: string;
  width?: string | null;
  label?: string | null;
  disabled?: boolean;
};

export const InputField = ({
  placeholder,
  icon = null,
  label = null,
  type,
  required,
  value,
  onChange,
  onTextAreaChange,
  name,
  error,
  disabled = false,
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
            disabled={disabled}
          />
        )}
        {type === "description" && (
          <DescriptionBox
            className="input-field"
            id={name}
            placeholder={placeholder}
            itemType="description"
            // type={inputType}
            required={required}
            value={value}
            onChange={onTextAreaChange}
            name={name}
            $error={Boolean(error)}
          />
        )}
        {type === "password" && renderPasswordIcon()}
      </Wrapper>

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};
