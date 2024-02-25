import { FC, useState } from "react";
import { IoChevronDownOutline, IoClose } from "react-icons/io5";
import { useClickAway } from "@uidotdev/usehooks";
import {
  MultiSelectContainer,
  WrapperSelectInput,
  SelectedItem,
  CloseButton,
  SelectedItemText,
  SelectInput,
  OpenButton,
  Dropdown,
  Option,
  Label,
} from "./DropdownSelect.styles";

export type DropdownOptionType = { name: string; label: string; value: string };
type MultiSelectProps = {
  options: DropdownOptionType[];
  label?: string | null;
  name: string;
  selectedOption: DropdownOptionType[];
  placeholder: string;
  multiselect?: boolean;
  onSelect: (keyName: string, options: DropdownOptionType[]) => void;
};

export const DropdownSelect: FC<MultiSelectProps> = ({
  options,
  label = null,
  name,
  selectedOption,
  placeholder,
  multiselect,
  onSelect,
}) => {
  const isMultiSelect = Boolean(multiselect);
  const [isOpen, setIsOpen] = useState(false);
  const selectedItems = selectedOption;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const ref = useClickAway(() => {
    setIsOpen(false);
  });
  const toggleDropdown = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: DropdownOptionType) => {
    if (!isMultiSelect) {
      onSelect(name, [option]);
      setIsOpen(false);
    } else {
      const newSelectedOptions = [...selectedOption];
      const isAlreadySelected =
        selectedOption.filter(({ value }) => value === option.value).length > 0;
      if (!isAlreadySelected) newSelectedOptions.push(option);

      onSelect(name, newSelectedOptions);
      setSearchQuery("");
    }
  };

  const removeItem = (itemToRemove: DropdownOptionType) => {
    const filteredOptions = selectedOption.filter(
      ({ value }) => value !== itemToRemove.value
    );

    onSelect(name, filteredOptions);
  };

  return (
    <MultiSelectContainer ref={ref as React.RefObject<HTMLDivElement>}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <WrapperSelectInput onClick={toggleDropdown}>
        {multiselect &&
          selectedItems?.map((item) => (
            <SelectedItem key={item.value}>
              {item.label}
              <CloseButton
                onClick={(e) => {
                  e.preventDefault();
                  removeItem(item);
                }}
              >
                <IoClose />
              </CloseButton>
            </SelectedItem>
          ))}
        {!multiselect && selectedOption.length > 0 ? (
          <SelectedItemText>{selectedOption[0]?.value}</SelectedItemText>
        ) : (
          <SelectInput
            id={name}
            name={name}
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        )}
        <OpenButton $isOpen={isOpen} onClick={toggleDropdown}>
          <IoChevronDownOutline />
        </OpenButton>
      </WrapperSelectInput>

      {isOpen && (
        <Dropdown>
          {options
            .filter((option) =>
              option.label.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map(
              (option) =>
                !selectedOption?.some(
                  ({ value }) =>
                    option.value.toLowerCase() === value.toLowerCase()
                ) && (
                  <Option
                    key={option.value}
                    onClick={() => handleSelect(option)}
                  >
                    {option.label}
                  </Option>
                )
            )}
        </Dropdown>
      )}
    </MultiSelectContainer>
  );
};
