import React, { useState } from 'react';

const ChatGPTIntegration = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [output,outputResponse]=useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    outputResponse("Waiting..")
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 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', // Replace with your actual API key
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: message },
          ],
        }),
      });

      const data = await response.json();
      console.log(data)
      outputResponse(data.choices[0].message.content)
      // console.log();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{marginTop:"100px"}}>
      <h1>Enter the Prompt</h1>
      <input
        style={{width:"80%"}}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div> <h1 style={{width:"70%", fontSize:16}}>{output}</h1></div>
      <button style={{"width":"100px"}} onClick={handleSendMessage}>Send</button>
      <p>{response}</p>
      
    </div>
    
  );
};

export default ChatGPTIntegration;