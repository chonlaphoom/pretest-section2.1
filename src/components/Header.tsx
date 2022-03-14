
import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const isPrime = (num:number) =>  {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

const isFibonacci = (num:number, count:number = 1, last:number = 0) => {
  if(count < num){
     return isFibonacci(num, count+last, count);
  };
  if(count === num){
     return true;
  }
  return false;
};

enum CalType {
  PRIME = 1,
  FIBONACCI = 2
}

const Header = () => {
    const [input, setInput] = useState<number | null>(0);
    const [mode,setMode] = useState<number>(CalType.PRIME)

    const onChangeInputNumber = (e:React.ChangeEvent<HTMLInputElement>) => {
      const input:number = Math.round(Number(e.currentTarget.value));
      if(input < 0){
        setInput(0);
      }else{
        setInput(input)
      }
    }

    const calculation = () => {
      if(mode === CalType.PRIME){
        return isPrime(input);
      }
      return isFibonacci(input);
    }

    const result = calculation();

    return (
      <Container className="test-container">
        <Row>
          <Col style={{width:'200px'}}>
            <Form.Control type="number" value={input} onChange={onChangeInputNumber}/>
          </Col>
          <Col style={{minWidth:'100px'}}>
            <Form.Select value={mode} onChange={(e)=>setMode(Number(e.currentTarget.value))}>
              <option value={CalType.PRIME}>isPrime</option>
              <option value={CalType.FIBONACCI}>isFibonacci</option>
            </Form.Select>
          </Col>
          <Col style={{width:'600px'}}>
            {result?'true':'false'}
          </Col>
    </Row></Container>)
}

export default Header;