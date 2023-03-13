import { Course, menu, MenuSection } from "../../assets/menu";

export const Menu = () => {
  
    return (
      <>
        <div>
          <h3>Menu</h3>
          {Object.values(menu).map((section: MenuSection) => (
            <div key={section.name}>
              <h4>{section.name}</h4>
              <div>
                {section.courses.map((course: Course) => (
                  <div key={course.name}>
                    <h5>{course.name}</h5>
                    <p>{course.description}</p>
                    <div>{course.price}kr</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };