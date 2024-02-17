import {
  RadioButtonContainer,
  RadioButtonWrapper,
  RadioInput,
  RadioInputUi,
  RadioLabel,
  RadioSquareLabel,
  RadioSquareContainer,
} from "./RadioButtonGroup.styles";

type Option = {
  name: string;
  value: string | number;
  label: string;
};

type RadioButtonGroupProps = {
  options: Option[];
  selectedOption: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <RadioButtonContainer>
      {options.map((option) => (
        <RadioButtonWrapper key={option.value}>
          <RadioInput
            id={option.value.toString()}
            name={option.name}
            autoComplete="false"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={onChange}
          />
          <RadioInputUi $checked={selectedOption === option.value.toString()} />
          <RadioLabel htmlFor={option.value.toString()}>
            {option.label}
          </RadioLabel>
        </RadioButtonWrapper>
      ))}
    </RadioButtonContainer>
  );
};

export const SquareButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <RadioSquareContainer>
      {options.map((option) => (
        <RadioButtonWrapper key={option.value}>
          <RadioInput
           id={option.value.toString()}
            key={option.value}
            autoComplete="false"
            name={option.name}
            value={option.value}
            checked={selectedOption === option.value}
            onChange={onChange}
          />
          <RadioSquareLabel
            htmlFor={option.value.toString()}
            $checked={option.value.toString() === selectedOption}
          >
            {option.label}
          </RadioSquareLabel>
        </RadioButtonWrapper>
      ))}
    </RadioSquareContainer>
  );
};
