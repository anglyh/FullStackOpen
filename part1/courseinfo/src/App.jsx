
const Header = (props) => {
  //console.log(props);
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  const [part1, part2, part3] = props.parts;
  console.log(typeof part1);

  return (
    <>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </>
  );
};

const Part = (props) => {
  return <p>{props.part} {props.exercises}</p>
}

const Total = (props) => {
  console.log(props);
  let total = 0;
  props.parts.forEach(part => total += part.exercises);

  return <p>Number of exercises {total}</p>

}

const App = () => {

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ],
  }

  return (  
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
