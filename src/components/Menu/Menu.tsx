import { Course, menu, MenuSection } from "../../assets/menu";
import { H1, H3, H4 } from "../styled/Booking";
import { MenuWrapper } from "../styled/Menu";
import { PCursiveWrapper, PWrapper } from "../styled/Wrappers";

export const Menu = () => {
  return (
    <>
      <H1>Last Dance</H1>
      <H4>restaurang</H4>
      <H3>Menu</H3>
      <MenuWrapper>
        {Object.values(menu).map((section: MenuSection) => (
          <div key={section.name}>
            <h4>{section.name}</h4>
            <div>
              {section.courses.map((course: Course) => (
                <div key={course.name}>
                  <PWrapper>{course.name}</PWrapper>
                  <PCursiveWrapper>{course.description}</PCursiveWrapper>
                  <div>{course.price}:-</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </MenuWrapper>
    </>
  );
};
