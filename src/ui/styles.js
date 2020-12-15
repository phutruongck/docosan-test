import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  text-align: left;
`;

export const Header = styled.div`
    flex-direction: row;
`;

export const HeaderText = styled.p`
    font-size: 25px;
    color: #333333;
    font-weight: bold;
`;

export const InlineText = styled.div`
    margin-top: 15px;
    display: inline-flex;
`;

export const Button = styled.button`
    display: inline-flex;
    padding: 2px 10px;
    width: 100%;
    background-color: ${props => props.color};
    color: ${props => props.textColor};
    ${props => props.close ? '' : 'cursor: pointer;'}
    border-radius: 10px;
    border: ${props => props.borderColor ? `1px solid ${props.borderColor}` : 'none'};
    outline: 0;
    font-size: 16px;
`;

export const ItemContainer = styled.div`
    display: block;
    margin-top: 20px;
`;

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Wrapper = styled.div`
    margin-bottom: 30px;
`;

export const Article = styled.article`
    padding: 20px 0 0 20px;
    background: #fff;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    border-radius: 3px;
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.45);
`;

export const Thumbnail = styled.div`
    width: 128px;
    float: left;
`;

export const Content = styled.div`
    flex-grow: 1;
    float: right;
    width: 515px;
    background-color: #fff;
`;

export const Star = styled.span`
    height: 14px;
    width: 14px;
    margin: 2px;
    float: left;
    background-color: #BC2D5F;
    -webkit-clip-path: polygon(
        50% 0%,
        63% 38%,
        100% 38%,
        69% 59%,
        82% 100%,
        50% 75%,
        18% 100%,
        31% 59%,
        0% 38%,
        37% 38%
    );
`;