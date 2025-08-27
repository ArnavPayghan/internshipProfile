import Input from './Input';

function App() {
  return (
    <div id="content">
      <Input type="text" placeholder="Your name" />
      <Input richText placeholder="Your message" />
    </div>
  );
}

export default App;

{/*
Input.jsx

export default function Input({ richText, ...props }) {
  // return a <textarea> if a richText prop is true
  // return an <input> otherwise
  // forward / set the received props on the returned elements
  if (richText) {
      return <textarea {...props} />
  }
  return <input {...props} />
}
*/}