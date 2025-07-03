import Button from '../components/Button';

export default function Home() {
  return (
    <div className="grid-container">
      <div className="grid-row">
        <div className="grid-col-12 grid-col-md-8">
          <h1>My Portfolio</h1>
        </div>
        <div className="grid-col-12 grid-col-md-4">
          <Button>Click Me</Button>
        </div>
      </div>
    </div>
  );
}