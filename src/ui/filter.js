import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import { FILTER_DATA } from "./init-data";
import { Button } from "./styles";

const FilterComponent = React.memo((props) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownContainer = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOnDropdownClick = () => {
    setDropdown(!dropdown);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownContainer.current &&
      !dropdownContainer.current.contains(event.target)
    ) {
      setDropdown(false);
    }
  };

  const handleChange = (evt) => {
    let id = evt.target.value;

    props.setVal(id);
    props.handleOnFilter(id);
    setDropdown(false);
  };

  const getLabel = () => {
    const check = FILTER_DATA.find((_) => _.value === props.val);
    return (check && check.label) || "Ngôn ngữ";
  };

  const handleRemoveVal = () => {
    setDropdown(false);
    props.handleOnFilter("");
    props.setVal("");
  };

  return (
    <div className="container" ref={dropdownContainer}>
      <Button
        onClick={props.val ? () => {} : handleOnDropdownClick}
        color={props.val ? "#4AC0A4" : "transparent"}
        textColor={props.val ? "#fff" : "#333333"}
        borderColor={props.val ? "transparent" : "#333333"}
        close={props.val ? true : false}
      >
        <p>{getLabel()}</p>
        {props.val ? (
          <span className="close" onClick={handleRemoveVal}>
            x
          </span>
        ) : (
          <></>
        )}
      </Button>
      {dropdown && (
        <div className="dropdown">
          <ul>
            {FILTER_DATA.map((_, i) => (
              <li key={i}>
                <label className="label">
                  <input
                    type="radio"
                    name="sort"
                    value={_.value}
                    onChange={handleChange}
                    checked={props.val === _.value}
                  />
                  <span>{_.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export { FilterComponent };
