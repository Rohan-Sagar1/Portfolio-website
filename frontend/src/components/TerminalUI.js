import React, { useState, useEffect} from 'react'
import styled from 'styled-components';

function TerminalUI() {
    const [script, setScript] = useState('');

    useEffect(() => {
      const initialScript = `
      import os
      import requests
      
      def trade_btc(username, password):
          btc_spot = yf.download("BTC-USD", start = "2015-01-01", end = "2023-02-15")
          ma_50_days = btc['Close'].rolling(window=50).mean().iloc[-1]
      
          if not platform_login(username, password):
              print('Login failed')
              return
      
          balance = get_balance()
          print(f'Current account balance: {balance:.2f}')
      
          trade_amount = balance * 0.2 
          if trade_amount > 0:
              print(f'Trade amount: {trade_amount:.2f}')
      
              if btc_spot > ma_50_days:
                  order_id = buy_order(trade_amount)
                  if order_id:
                      print(f'Buy order placed (order ID: {order_id})')
                  else:
                      print('Failed to place buy order')
              else:
                  print(f'BTC price ({btc_spot:.2f}) --> below the 50 day ma ({ma_50_days:.2f})')
          else:
              print('Not enough balance to place a trade')
    `;
      setScript(initialScript);
    }, []);
  
    const handleScriptChange = (event) => {
      setScript(event.target.value);
    };
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
      }, 500);
      return () => {
        clearTimeout(timeoutId);
      };
    }, [script]);
  
    return (
      <StyledIDEContainer>
        <Header>
            <RedCircle></RedCircle>
            <YellowCircle></YellowCircle>
            <GreenCircle></GreenCircle>
            <h3>Script.py</h3>
        </Header>
        <StyledCodeEditor>
            <LineNumber/>
                <TextEditor>
                    <p>import <span>os</span></p>
                    <p>import <span>requests</span></p>
                    <br/>
                    <p>def <label>trade_btc(</label><span>username, password</span><label>)</label></p>
                    <br/><br/>
                </TextEditor>
        </StyledCodeEditor>
      </StyledIDEContainer>
    );
}

export default TerminalUI

{/* <StyledCodeEditor value={script} onChange={handleScriptChange}> */}

const Circle = styled.label`
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0 5px;
    border-radius: 50%;
`

const RedCircle = styled(Circle)`
  background-color: #ff4d4f;
`;

const YellowCircle = styled(Circle)`
  background-color: #ffd700;
`;

const GreenCircle = styled(Circle)`
  background-color: #52c41a;
`;

const StyledIDEContainer = styled.div`
  display: flex;
  height: 70%;
  margin-left: 2%;
  flex-direction: column;
  width: 50%;
  position: absolute;
  border-radius: 6px;
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.5);
  background-color: white;
`;

const Header = styled.div`
    font-family: 'Arial', sans-serif;
    display: flex;
    height: 40px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    background-color: #3D3D3D;
    border-radius: 6px 6px 0 0;
    padding: 10px;

    h3 {
        left: 45%;
        position: absolute;
        color: white;
    }
`

const StyledCodeEditor = styled.div`
  height: 100%;
  width: 100%;
  border: none;
  display: flex;
  flex-direction: row;
  text-wrap: nowrap;
  border-radius: 0 0 6px 6px;
  background-color: #353535;
  &:focus {
    outline: none;
  }
`;

const LineNumber = styled.div`
    display: flex;
    flex-direction: column;
    width: 2rem;
    height: 100%;
    color: #888;
    z-index: 1;
    font-size: 12px;
    background-color: #3D3D3D;
    border-radius: 0 0 0 6px;
`;

const TextEditor = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    border-radius: 0 0 6px 0;
    font-family: "Fira Code", monospace;
    font-size: 12px;
    padding: 10px;
    p {
        margin: 0;
        color: #AE0FC6;
        span {
            color: #219D02;
        }
        label {
            color: yellow;
        }
    }
`


