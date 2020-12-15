import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import { Button } from "./styles";
import { SORT_DATA } from "./init-data";

const SortComponent = React.memo((props) => {
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
    props.handleOnSort(id, true);
    setDropdown(false);
  };

  const label = SORT_DATA.find((_) => _.value === props.val).label;

  return (
    <div className="container" ref={dropdownContainer}>
      <Button
        onClick={handleOnDropdownClick}
        color="#4AC0A4"
        textColor="#ffffff"
      >
        <p>{label}</p>
      </Button>
      {dropdown && (
        <div className="dropdown">
          <ul>
            {SORT_DATA.map((_, i) => (
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

export { SortComponent };
