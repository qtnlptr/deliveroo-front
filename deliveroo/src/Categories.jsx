const Categories = ({ category }) => {
  return (
    <>
      <h2>{category.meals.length > 0 && category.name}</h2>
      <div className="meals">
        <div className="option">
          {/* {category.meals.title.map((elem) => { */}
          {category.meals.map((elem) => {
            <p>{elem.title}</p>;
            console.log(elem.title);
            // <h4>{elem.title}</h4>;
          })}
          {/* //   <h4>{category.meals.map}</h4>; */}
        </div>
      </div>
    </>
  );
};
export default Categories;
