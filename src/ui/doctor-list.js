import React, { useState, useLayoutEffect } from "react";
import "./styles.css";
import { Container, Header, HeaderText, InlineText } from "./styles";
import { SortComponent } from "./sort-component";
import { FilterComponent } from "./filter";
import { SORT_DATA } from "./init-data";
import example_data from "./data.json";
import { DoctorItem } from "./doctor-item";

const DoctorList = React.memo(() => {
  const [sortVal, setSortVal] = useState(SORT_DATA[0].value);
  const [filterVal, setFilterVal] = useState("");
  const [data, setData] = useState([]);

  useLayoutEffect(() => {
    let temp = example_data.sort((a, b) => (a.distance > b.distance ? -1 : 1));
    setData(temp);
  }, []);

  const handleOnSort = (val, filter = false) => {
    let oldData = filter ? data.slice() : example_data;

    if (val === "0") {
      let temp = oldData.sort((a, b) => (a.distance > b.distance ? -1 : 1));
      setData(temp);
    } else if (val === "1") {
      let temp = oldData.sort((a, b) => (a.rating > b.rating ? -1 : 1));
      setData(temp);
    } else {
      setData(oldData);
    }
  };

  const handleOnFilter = (val) => {
    if (val) {
      let oldData = data.slice();
      let temp = oldData.filter((_) => {
        if (typeof _.language === "string") {
          return _.language === val;
        }

        if (Array.isArray(_.language)) {
          return _.language.findIndex((item) => item === val) > -1;
        }
      });

      setData(temp);
    } else {
      handleOnSort(sortVal, false);
    }
  };

  return (
    <Container>
      <Header>
        <HeaderText>Danh sách các bác sĩ</HeaderText>
        <InlineText>
          <div>Sắp xếp theo</div>
          <SortComponent
            val={sortVal}
            setVal={setSortVal}
            handleOnSort={handleOnSort}
          />
          <div style={{ marginLeft: 10 }}>Lọc kết quả</div>
          <FilterComponent
            val={filterVal}
            setVal={setFilterVal}
            handleOnFilter={handleOnFilter}
          />
        </InlineText>
      </Header>
      <div>
        {data.length > 0 ? (
          data.map((item, index) => (
            <DoctorItem data={item} key={`item-${index}`} />
          ))
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
});

export default DoctorList;
