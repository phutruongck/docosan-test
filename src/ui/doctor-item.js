import React, { useEffect } from "react";
import {
  ItemContainer,
  Row,
  Wrapper,
  Article,
  Thumbnail,
  Content,
  Star,
} from "./styles";

const DoctorItem = React.memo(({ data }) => {
  const {
    avatar,
    display_name,
    rating,
    specialty,
    clinic_name,
    clinic_address,
  } = data;

  const stringFromArr = (arr = []) => {
    return arr.map((_) => _.name).join(", ");
  };

  return (
    <ItemContainer>
      <Row>
        <Wrapper>
          <Article>
            <Thumbnail>
              <img src={avatar} style={{ borderRadius: 5 }} width={103} />
            </Thumbnail>
            <Content>
              <p style={{ fontSize: 16, fontWeight: "bold" }}>{display_name}</p>
              <div style={{ display: "block" }}>
                {[...Array(parseInt(rating))].map((_, i) => (
                  <Star key={`star-${i}`} />
                ))}
              </div>
              <br />
              <p style={{ fontSize: 14 }}>{stringFromArr(specialty)}</p>
              <br />
              <p style={{ fontSize: 15 }}>{clinic_name}</p>
              <p style={{ fontSize: 14 }}>{clinic_address}</p>
            </Content>
          </Article>
        </Wrapper>
      </Row>
    </ItemContainer>
  );
});

export { DoctorItem };
