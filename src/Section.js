const Section = (props) => {
  return (
    <div className="category">
      <h1>{props.title}</h1>
      <div className="carrousel">
        {props.list.map((elem, i) => {
          return (
            <ul>
              <li>
                <img src={elem} key={i} alt="" />;
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Section;
