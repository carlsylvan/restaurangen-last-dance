import { Course, menu, MenuSection } from "../../assets/menu";

export const Menu = () => {
  
    return (
      <>
        <h1>LAST DANCE</h1>
        <h2>RESTAURANG</h2>
        <div>
          <h3>Menu</h3>
          {Object.values(menu).map((section: MenuSection) => (
            <div key={section.name}>
              <h4>{section.name}</h4>
              <ul>
                {section.courses.map((course: Course) => (
                  <li key={course.name}>
                    <h5>{course.name}</h5>
                    <p>{course.description}</p>
                    <div>{course.price}kr</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    );
  };