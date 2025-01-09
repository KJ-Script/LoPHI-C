import React from 'react'

type Props = {}

const Chat = (props: Props) => {
  return (
    <div className="text-white p-4 w-full max-w-2xl mx-auto rounded-lg shadow-lg overflow-y-auto">
    <div className="h-96 overflow-y-auto">
      <div className="mb-2">
        <span className="text-green-400 ">user@terminal:~$</span> Hello, how can I help you?
      </div>
      <div className="mb-2">
        <span className="text-green-400">user@terminal:~$</span> What is the weather like today?
      </div>
      <div className="mb-2">
        <span className="text-black bg-gray-200 px-1">bot@terminal:~$</span> The weather is sunny with a high of 25°C.
      </div>
      <div className="mb-2">
        <span className="text-green-400 ">user@terminal:~$</span> Hello, how can I help you?
      </div>
      <div className="mb-2">
        <span className="text-green-400">user@terminal:~$</span> What is the weather like today?
      </div>
      <div className="mb-2">
        <span className="text-black bg-gray-200 px-1">bot@terminal:~$</span> The weather is sunny with a high of 25°C.
      </div>
      <div className="mb-2">
        <span className="text-green-400 ">user@terminal:~$</span> Hello, how can I help you?
      </div>
      <div className="mb-2">
        <span className="text-green-400">user@terminal:~$</span> What is the weather like today?
      </div>
      <div className="mb-2">
        <span className="text-black bg-gray-200 px-1">bot@terminal:~$</span> The weather is sunny with a high of 25°C.
      </div>
      <div className="mb-2">
        <span className="text-green-400 ">user@terminal:~$</span> Hello, how can I help you?
      </div>
      <div className="mb-2">
        <span className="text-green-400">user@terminal:~$</span> What is the weather like today?
      </div>
      <div className="mb-2">
        <span className="text-black bg-gray-200 px-1">bot@terminal:~$</span> The weather is sunny with a high of 25°C.
      </div>
      <div className="mb-2">
        <span className="text-green-400 ">user@terminal:~$</span> Hello, how can I help you?
      </div>
      <div className="mb-2">
        <span className="text-green-400">user@terminal:~$</span> What is the weather like today?
      </div>
      <div className="mb-2">
        <span className="text-black bg-gray-200 px-1">bot@terminal:~$</span> The weather is sunny with a high of 25°C.
      </div>
    </div>

    <div className="mt-4 flex space-x-1">
      <input
        type="text"
        className="w-full bg-black text-white border border-gray-700 p-2 rounded focus:outline-none focus:border-green-400"
        placeholder="Type your message..."
      />
      <button className="bg-green-800 p-2 rounded-sm">SEND</button>
    </div>

  </div>
  )
}

export default Chat