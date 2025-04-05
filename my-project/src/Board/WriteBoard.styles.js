import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 18px;
  text-align: left;

  span {
    color: blue;
    margin-left: 5px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  resize: none;
  white-space: pre-wrap;
`;

export const Notice = styled.div`
  font-size: 12px;
  color: #888;
  margin-top: 5px;
`;

export const CharCount = styled.div`
  text-align: right;
  font-size: 14px;
  color: #444;
  margin-top: 5px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;         
  margin-top: 20px;
`;

export const Btn = styled.button`
  padding: 10px 16px;
  background-color: #111;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;