import { Course, menu, MenuSection } from "../../assets/menu";
import { H1, H2 } from "../styled/Booking";

export const Menu = () => {
  
    return (
      <>
        <H1>LAST DANCE</H1>
        <H2>RESTAURANG</H2>
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